import UpdateForm from "../../components/UpdateForm";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Single from "../../components/SinglePage";

const EditPage = () => {
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
          <div id="middle-section" className="w-[64vw] h-[100%]">
            <div
              id="middle-section-container"
              className="w-[95%] h-[100%] mx-auto pt-[20px]"
            >
              <UpdateForm />
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

export default EditPage;
