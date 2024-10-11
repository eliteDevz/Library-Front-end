import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/index.js";
import BookCard from "../../components/BookCard.jsx"; 

const Library = () => {
  const [books, setBooks] = useState([]);

  const onDelete = async (targetID) => {
    try {
      await axios.delete(`${BASE_URL}/${targetID}`);
      setBooks((prevBooks) =>
        prevBooks.filter((book) => book._id !== targetID)
      );
      console.log("Book deleted successfully");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const getBooks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books`);
      setBooks(response.data);
      console.table(response.data);
    } catch (error) {
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
  };

  useEffect(() => {
    getBooks();
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
          className="w-[100%] h-[140vh] flex justify-evenly"
        >
          <div id="middle-section" className="w-[100%] h-[100%]">
            <div
              id="middle-section-container"
              className="w-[95%] h-[100%] mx-auto pt-[20px]"
            >
              <div
                id="cards"
                className="grid grid-cols-5 gap-x-[1rem] gap-y-[1rem] w-[100%] h-[100px]"
              >
                {books.map((book) => (
                  
                    <BookCard
                      key={book._id}
                      targetID={book._id}
                      bookname={book.title}
                      authorName={book.author.name}
                      coverImage={book.coverImage} 
                      deleteBook={onDelete} 
                    />
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
