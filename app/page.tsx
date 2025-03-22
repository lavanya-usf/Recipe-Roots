import Navbar from "../components/navbar/navbar";
import TopPicks from '../components/top-recipes/page';
import SearchBar from "../components/ui/searchbar";
import Footer from "../components/footer/footer";
import HeroBanner from "../components/banner/heroBanner";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <Navbar />
      <HeroBanner />
      
      <div className="flex justify-between py-2">
        <SearchBar />
      </div>
      <TopPicks />
      <Footer/>
    </main>
  );
}
