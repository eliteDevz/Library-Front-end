
import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";

import { Link } from "react-router-dom";
import Single from "../../components/SinglePage.jsx";

const Library = () => {
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
          className="w-[100%] h-[100vh]  flex justify-evenly"
        >
          <div id="middle-section" className="w-[100%] h-[100%]">
            <div
              id="middle-section-container"
              className="w-[95%] h-[100%] mx-auto pt-[20px]"
            >
              <div className="bg-[black] w-[100%] h-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
