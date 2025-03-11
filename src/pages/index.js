import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";
import Cart from "../components/Cart";
import Wishlist from "./wishlist";
import BarcodeScanner from "../components/BarcodeScanner";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [showScanner, setShowScanner] = useState(false);

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

    const handleScan = (code) => {
        alert(`Scanned barcode: ${code}`);
        setShowScanner(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Shopping List App</h1>

                <div className="flex justify-end mb-4">
                    <button 
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                        onClick={() => setShowScanner(!showScanner)}
                    >
                        {showScanner ? "Close Scanner" : "Scan Barcode"}
                    </button>
                </div>

                {showScanner && <BarcodeScanner onScan={handleScan} />}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
        </div>
    );
}
