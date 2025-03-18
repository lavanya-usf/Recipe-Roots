import { Search } from "lucide-react";

export default function SearchBar() {
    return(
        <div className="relative p-1">
            <input
                className="bg-orange-500 text-white flex items-center justify-center w-60 p-3 rounded-md float-right"
                placeholder="Enter your dish.."
                type="text"
            />
            <i className="absolute inset-y-0 right-7 flex items-center"><Search className="text-white"/></i>
        </div>
    )
}