import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import Cart from "../components/Cart";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // Load cart from localStorage on page load
    useEffect(() => {
        const savedCart = localStorage.getItem("shoppingCart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }, [cart]);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const syncCartToServer = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/carts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: 1,
                    date: new Date().toISOString(),
                    products: cart.map((item) => ({ productId: item.id, quantity: 1 })),
                }),
            });
            if (response.ok) {
                console.log("Cart synced to server");
            }
        } catch (error) {
            console.error("Failed to sync cart:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <ItemCard key={product.id} product={product} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
                <div className="md:col-span-1">
                    <Cart cart={cart} removeFromCart={removeFromCart} syncCartToServer={syncCartToServer} />
                </div>
            </div>
        </div>
    );
}
