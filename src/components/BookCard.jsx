import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";
import ellipsis from "../assets/images/bookCards/ellipsis.png";
import { Link } from "react-router-dom";

const BookCard = ({
  bookname,
  authorName,
  coverImage,
  deleteBook,
  targetID,
}) => {
  const [isclicked, setIsclicked] = useState(false);
  console.log("the book:", coverImage)

  return (
    <div
      id="card"
      className="h-[320px] bg-black flex flex-col justify-between py-[20px] rounded-[10px] bg-gradient-to-br from-[#1F5289] to-[#3A061B]"
    >
      
        <div className="image-holder w-[70%] h-[75%] mx-auto rounded-[10px]">
          <Link to={`/books/${targetID}`} >
          <img
            src={coverImage}
            alt="book cover"
            className="h-[100%] w-[100%] rounded-[10px] bg-center"
          />
           </Link>
        </div>
     
      <div className="bottom-part flex h-[20%] w-[70%] mx-auto">
        <div className="desc w-[90%] mx-auto flex flex-col ">
          <h5 className="text-[1.rem] font-semibold text-white leading-[1.3rem]">
            {bookname}
          </h5>
          <p className="text-[#76809C] text-[0.9rem]">{authorName}</p>
        </div>
        <div className="w-[10%] relative flex items-center">
          <img
            src={ellipsis}
            alt="menu icon"
            className="h-[35px] absolute right-0 top-50% translateY-[50%] cursor-pointer"
            onClick={() => setIsclicked(!isclicked)}
          />

          {isclicked && (
            <ul className="bg-[#ffffff] w-[100px] h-[60px] absolute right-0 bottom-[90%] rounded-[10px]">
              <Link to="/update">
                <li className="h-[50%] px-[15px] hover:bg-[#1D62FF] hover:text-white rounded-t-[10px] flex items-center">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Edit
                  </a>
                </li>
              </Link>
              <li
                className="h-[50%] px-[15px] hover:bg-[#1D62FF] hover:text-white rounded-b-[10px] flex items-center"
                onClick={() => deleteBook(targetID)} // Use deleteBook with targetID
              >
                <a href="#" className="text-gray-400 hover:text-white">
                  Delete
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

// Define prop types for bookname, authorName, coverImage, deleteBook, targetID
BookCard.propTypes = {
  bookname: PropTypes.string.isRequired, // bookname is a required string
  authorName: PropTypes.string.isRequired, // authorName is a required string
  coverImage: PropTypes.string.isRequired, // coverImage is a required string (URL)
  deleteBook: PropTypes.func.isRequired, // deleteBook is a required function
  targetID: PropTypes.oneOfType([
    // targetID can be string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // Required targetID for deleting the book
};

export default BookCard;
