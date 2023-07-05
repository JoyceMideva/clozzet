import Hero from "../components/Hero";
import Nav from "../components/Nav";
import TopCategories from "../components/TopCategories";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import FeaturedCollections from "../components/FeaturedCollections";
function Home() {
  return (
    <div>
      <div className="  bg-contain bg-right-top bg-no-repeat bg-[url('assets/images/background_1.png')]">
        <Nav />
        <Hero />
      </div>
      <TopCategories />
      <FeaturedCollections />
      <Collection />
      <Footer />
    </div>
  );
}
export default Home;
