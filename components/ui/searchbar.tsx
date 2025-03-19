import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <div className="flex rounded-lg overflow-hidden shadow-sm">
        <input
          className="flex-grow py-2 px-4 rounded-l-lg border-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Enter your dish..."
          type="text"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg flex items-center justify-center">
          <Search className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}