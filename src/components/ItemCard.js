export default function ItemCard({ product, addToCart }) {
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
}
