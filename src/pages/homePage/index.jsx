import Footer from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import NewReleases from "./components/NewReleases.jsx";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-[#E5E9EF] w-[100vw] h-[100vh] flex relative">
      <div id="sidebar" className="w-[18%] h-[100%]">
        <Sidebar />
      </div>
      <div id="Right-side" className="w-[82%] h-[100%]">
        <Navbar />
        <div id="action-area" className="w-[100%] h-[100vh] bg-green-500">
          <div id="middle-section" className="flex">
            <NewReleases />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

{
  /* <Link to="/add-new" className="bg-green-700 text-white p-[5px]">
  Add new Book
</Link>; */
}
