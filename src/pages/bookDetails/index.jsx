import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import detailsImage from "../../assets/images/detailsImage.jpg"; // Placeholder image
import { BASE_URL } from "../../constants/index.js";

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null); // State to store book details

  useEffect(() => {
    // Fetch the book details when the component loads
    const getBookDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/books/${id}`);
        setBook(response.data); // Save the book data
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    getBookDetails(); // Call the function to fetch book details
  }, [id]); // Make sure to refetch if the ID changes

  // If the book data hasn't been loaded yet, show a loading message
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-[100vh] w-[100vw] flex items-center text-gray-700 text-[0.8rem]">
      <section className="w-[60vw] mx-auto p-[5%]">
        <div
          id="detail-container"
          className="w-[100%] h-[100%] flex justify-between items-center"
        >
          <div id="left-side" className="w-[30%] h-[100%] flex items-center">
            <img
              className="w-[100%] h-[58vh]"
              src={book.coverImage || detailsImage}
              alt={book.title}
            />
          </div>

          <div id="right-side" className="w-[60%] h-[100%]">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <span>by</span>{" "}
            <span className="font-bold">{book.author?.name}</span>
            <p className="pt-[5%] italic">{book.description}</p>
            <p className="pt-[5%]">{book.longDescription}</p>
            <div className="flex flex-col-4 gap-9  pt-[10%]">
              <div>
                <h6 className="font-bold">Language</h6>
                <h6 className="font-bold pt-[5%]">Publisher</h6>
                <h6 className="font-bold pt-[5%]">Published date</h6>
              </div>

              <div>
                <h6>{book.language || "English"}</h6>
                <h6 className="pt-[5%]">
                  {book.publisher || "Unknown Publisher"}
                </h6>
                <h6 className="pt-[5%]">
                  {book.publishedDate || "Unknown Date"}
                </h6>
              </div>

              <div>
                <h6 className="font-bold">Pages</h6>
                <h6 className="font-bold pt-[5%]">Genre</h6>
              </div>

              <div>
                <h6>{book.pageCount || "N/A"} pp</h6>
                <h6>{book.genre || "Unknown Genre"}</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
