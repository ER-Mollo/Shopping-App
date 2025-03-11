import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`/api/products?search=${searchTerm}`);
            const data = await res.json();
            setProducts(data);
        };

        fetchProducts();
    }, [searchTerm]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <SearchBar onSearch={setSearchTerm} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ItemCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
