import { useState } from "react";

export default function ItemCard({ product }) {
    const [isOutOfStock, setIsOutOfStock] = useState(false);

    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
            {isOutOfStock ? (
                <span className="text-red-500 font-semibold">Out of Stock</span>
            ) : (
                <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
                    onClick={() => setIsOutOfStock(true)}
                >
                    Mark as Out of Stock
                </button>
            )}
        </div>
    );
}
