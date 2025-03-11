function ItemCard({ product }) {
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-green-500">${product.price}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Add to Cart
            </button>
        </div>
    );
}

export default ItemCard;
