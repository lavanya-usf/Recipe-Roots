import Navbar from "./ui/navbar";
import TopPicks from './components/top-recipes/page';
import SearchBar from "./ui/searchbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <Navbar />
      <div className="flex justify-between">
        <SearchBar />
      </div>
      <TopPicks />
    </main>
  );
}
