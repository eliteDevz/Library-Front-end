import Footer from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Navbar />
      <Hero />
      <Sidebar />
      <Link to="/add-new" className="bg-green-700 text-white p-[5px]">
        Add new Book
      </Link>
      <Footer />
    </div>
  );
};

export default HomePage;
