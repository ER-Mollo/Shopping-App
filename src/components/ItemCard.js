export default function ItemCard({ product, addToCart, addToWishlist }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <div className="mt-4 flex gap-2">
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
                <button 
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => addToWishlist(product)}
                >
                    Wishlist
                </button>
            </div>
        </div>
    );
}
