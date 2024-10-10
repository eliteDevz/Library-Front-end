import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import NewReleases from "./components/NewReleases.jsx";
import { Link } from "react-router-dom";
import Single from "../../components/SinglePage.jsx";
import ForYou from "./components/ForYou.jsx";

const HomePage = () => {
  return (
    <div className="bg-[#E5E9EF] w-[100vw] flex relative">
      <div id="sidebar" className="w-[18%] h-[100%]">
        <Sidebar />
      </div>
      <div id="Right-side" className="w-[82%] h-[100%]">
        <div id="nav-placeholder" className="w-[82vw] h-[12vh] bg-[#a8383800]">
          <Navbar />
        </div>

        <div
          id="action-area"
          className="w-[100%]  flex justify-evenly"
        >
          <div id="middle-section" className="w-[64vw] h-[100%]">
            <div
              id="middle-section-container"
              className="w-[95%] h-[100%] mx-auto pt-[20px] flex flex-col gap-y-[2rem]" 
            >
              <NewReleases />
              <ForYou />
            </div>
          </div>
          <div id="book-details" className="w-[18vw]">
            <div
              id="book-deets-placeholder"
              className="bg-[#ffff0000] w-[18vw]"
            >
              <Single />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


