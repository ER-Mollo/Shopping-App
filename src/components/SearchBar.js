export default function SearchBar({ onSearch }) {
    return (
        <input
            type="text"
            placeholder="Search items..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
        />
    );
}
