import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import BarcodeScanner from "../components/BarcodeScanner";

const handleScan = (code) => {
    alert(`Scanned barcode: ${code}`);
};

export default function Home() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("shoppingCart");
        if (savedCart) setCart(JSON.parse(savedCart));

        const savedWishlist = localStorage.getItem("wishlist");
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    }, []);

    useEffect(() => {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [cart, wishlist]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const addToCart = (product) => setCart((prev) => [...prev, product]);
    const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

    const addToWishlist = (product) => setWishlist((prev) => [...prev, product]);
    const removeFromWishlist = (id) => setWishlist((prev) => prev.filter((item) => item.id !== id));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <ItemCard key={product.id} product={product} addToCart={addToCart} addToWishlist={addToWishlist} />
                        ))}
                    </div>
                </div>
                <div className="md:col-span-1">
                    <Cart cart={cart} removeFromCart={removeFromCart} />
                    <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
                </div>
            </div>
        </div>
    );
}
