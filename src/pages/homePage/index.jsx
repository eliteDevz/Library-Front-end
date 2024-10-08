import Footer from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import NewReleases from "./components/NewReleases.jsx";
import { Link } from "react-router-dom";
import BookForm from "../../components/BookForm.jsx";

const HomePage = () => {
  return (
    <div className="bg-[#E5E9EF] w-[100vw] h-[100vh] flex relative">
      <div id="sidebar" className="w-[18%] h-[100%]">
        <Sidebar />
      </div>
      <div id="Right-side" className="w-[82%] h-[100%]">
        <div id="nav-placeholder" className="w-[82vw] h-[12vh] bg-[#ffffff00]">
          <Navbar />
        </div>

        <div
          id="action-area"
          className="w-[100%] h-[100vh]  mt-[12vh] flex justify-between"
        >
          <div id="middle-section" className="w-[64%] h-[100%]">
            <NewReleases />
          </div>
          <div className="w-[18vw] h-[400px] bg-blue-500 top-[12vh] right-0">
            <div
              id="book-deets"
              className="w-[18vw] h-[400px] bg-red-500 fixed top-[12vh] right-0"
            ></div>
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
