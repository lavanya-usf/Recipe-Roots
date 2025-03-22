import Navbar from "../components/navbar/navbar";
import TopPicks from '../components/top-recipes/page';
import SearchBar from "../components/ui/searchbar";
import Footer from "../components/footer/footer";
import Banner from "../components/banner/banner";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <Navbar />
      <Banner />
      
      <div className="flex justify-between py-2">
        <SearchBar />
      </div>
      <TopPicks />
      <Footer/>
    </main>
  );
}
