import { useState, useEffect } from "react";
// import Author from "../../components/Author.jsx";
import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import Single from "../../components/SinglePage";
import { BASE_URL } from "../../constants/index.js";
import axios from "axios";
import portrait from '../../assets/images/authorCards/portrait.png'


const Authors = () => {
  const [authors, setAuthors] = useState([]);


  const getAuthors = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/authors`)
      setAuthors(response.data)
    } catch (error) {
      console.log(error)
      console.error("Error fetching books:", error);
      if (error.code === "ERR_NETWORK") {
        alert(error.code + "\n Please check your network and try again.");
      }
      if (error.message === "Request failed with status code 404") {
        alert(`${error.message}  

          Bad Code somewhere on front-end.
          Please fix and try again!.`);
      }
    }
  }


    useEffect(() => {
      getAuthors();
    }, []);



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
              className="w-[95%] h-[100%] mx-auto pt-[20px] grid grid-cols-4 gap-x-[1rem] gap-y-[0rem]"
            >
              {
                authors.map((author, index) => {
                    return (
                      <div
                        key={author._id}
                        id="card"
                        className="h-[280px] bg-black flex flex-col justify-between py-[20px] rounded-[10px] bg-white"
                      >
                        <div className="image-holder w-[70%] h-[75%] mx-auto rounded-[100px]">
                          <img
                            src={portrait}
                            alt="book cover"
                            className="h-[100%] w-[100%] rounded-[100px]"
                          />
                        </div>
                        <h5 className="text-[1.rem] font-semibold text-[#001542] leading-[1.3rem] text-center">
                          {author.name}
                        </h5>
                      </div>
                    );
                })
              }
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

export default Authors;
