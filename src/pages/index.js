import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch("https://fakestoreapi.com/products/categories");
            const data = await res.json();
            setCategories(data);
        };

        const fetchProducts = async () => {
            let url = "https://fakestoreapi.com/products";
            if (selectedCategory) {
                url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
            }

            const res = await fetch(url);
            const data = await res.json();
            setProducts(data);
        };

        fetchCategories();
        fetchProducts();
    }, [selectedCategory]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

            {/* Category Filter */}
            <div className="mb-4">
                <label className="font-semibold">Filter by Category:</label>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="ml-2 border p-2 rounded"
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ItemCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
