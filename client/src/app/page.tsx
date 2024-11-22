import HomeContent from "@/components/home/Home";
import Services from "@/components/services/Services";
import About from "@/components/about/About";

const Home = () => {
  return (
    <div>
      {/* Top Navbar */}
     <HomeContent />
     <Services />
     <About />

      
    </div>
  );
};

export default Home;
