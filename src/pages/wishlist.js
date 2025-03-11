export default function Wishlist({ wishlist, removeFromWishlist }) {
    const shareWishlist = () => {
        const emailBody = wishlist.map(item => `- ${item.title} ($${item.price})`).join("\n");
        window.location.href = `mailto:?subject=My Wishlist&body=${encodeURIComponent(emailBody)}`;
    };

    return (
        <div className="bg-gray-100 p-4 shadow-md rounded-md mt-4">
            <h2 className="text-lg font-bold mb-2">Wishlist</h2>
            {wishlist.length === 0 ? (
                <p className="text-gray-500">No items in wishlist.</p>
            ) : (
                <>
                    {wishlist.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-2">
                            <span>{item.title}</span>
                            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeFromWishlist(item.id)}>Remove</button>
                        </div>
                    ))}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full" onClick={shareWishlist}>
                        Share via Email
                    </button>
                </>
            )}
        </div>
    );
}
