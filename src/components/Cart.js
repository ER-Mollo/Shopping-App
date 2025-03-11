export default function Cart({ cart, removeFromCart }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Cart</h2>
            {cart.length === 0 ? <p className="text-gray-600">No items in cart.</p> : (
                cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b py-2">
                        <p>{item.title}</p>
                        <button 
                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}
