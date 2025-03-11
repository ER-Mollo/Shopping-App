export default function Cart({ cart, removeFromCart }) {
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    return (
        <div className="bg-gray-100 p-4 shadow-md rounded-md">
            <h2 className="text-lg font-bold mb-2">Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-2">
                            <span>{item.title}</span>
                            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <p className="mt-2 font-bold">Total: ${totalPrice}</p>
                </>
            )}
        </div>
    );
}
