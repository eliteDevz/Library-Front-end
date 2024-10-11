import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";
import ellipsis from "../assets/images/bookCards/ellipsis.png";
import { Link } from "react-router-dom";
// import 

const BookCard = ({
  bookname,
  authorName,
  coverImage,
  deleteBook,
  targetID,
}) => {
  const [isclicked, setIsclicked] = useState(false);

  return (
    <div
      id="card"
      className="h-[320px] bg-black flex flex-col justify-between py-[20px] rounded-[10px] bg-white"
    >
      <div className="image-holder w-[70%] h-[75%] mx-auto rounded-[100px]">
        <img
          src={coverImage}
          alt="book cover"
          className="h-[100%] w-[100%] rounded-[10px]"
        />
      </div>
      <h5 className="text-[1.rem] font-semibold text-white leading-[1.3rem]">
        {authorName}
      </h5>
      
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
