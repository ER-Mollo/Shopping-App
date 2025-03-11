export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Shopping App</h1>
                <ul className="flex gap-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Wishlist</a></li>
                    <li><a href="#" className="hover:underline">Cart</a></li>
                </ul>
            </div>
        </nav>
    );
}
