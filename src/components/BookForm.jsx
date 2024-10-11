import { useEffect, useState } from "react";

import axios from "axios";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`);
    setAuthors(response.data);
  };

  useEffect(() => {
    getAuthors();
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //  collect form data
      const formData = new FormData(event.target);
      // post data to api
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get("title"),
        author: formData.get("author"),
        description: formData.get("description"),
        publisher: formData.get("publisher"),
        genre: formData.get("genre"),
        publishDate: formData.get("publishedDate"),
        pages: formData.get("pages"),
        language: formData.get("language"),
        coverImage: formData.get("cover-image"),
      });
    } catch (error) {
      console.log(error);
    }
    navigate("/all-books");
  };

  return (
    <div className="h-[12vh] w-[60vw] p-[2%] mx-auto text-[0.8rem]">
      <form
        onSubmit={handleSubmit}
        className="w-[100%] mx-auto p-6  bg-white shadow-md rounded-lg"
      >
        <h2 className="font-bold mb-2  text-gray-700">Add a New Book</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-2">
            <label className=" text-gray-700 font-bold mb-1" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-1 border rounded"
              required
            />
          </div>

          <div className="mb-2">
            <label className=" text-gray-700 font-bold mb-2" htmlFor="author">
              Author
            </label>
            <select
              name="author"
              id="author"
              className="w-full p-1 border rounded"
            >
              {authors.map((author) => {
                return (
                  <option key={author._id} value={author._id}>
                    {author.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full p-1 border rounded"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-2">
            <label
              className=" text-gray-700 font-bold mb-2"
              htmlFor="publisher"
            >
              Publisher
            </label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              className="w-full p-1 border rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label className=" text-gray-700 font-bold mb-2" htmlFor="genre">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              className="w-full p-1 border rounded"
              required
            />
          </div>
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="publishedDate"
          >
            Published Date
          </label>
          <input
            type="date"
            id="publishedDate"
            name="publishedDate"
            className="w-full p-1 border rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="pages">
            Pages
          </label>
          <input
            type="number"
            id="pages"
            name="pages"
            className="w-full p-1 border rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="language"
          >
            Language
          </label>
          <input
            type="text"
            id="language"
            name="language"
            className="w-full p-1 border rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="cover-image"
          >
            Cover Image
          </label>
          <input
            type="text"
            id="cover-image"
            name="cover-image"
            className="w-full p-1 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add New
        </button>
      </form>
    </div>
  );
};

export default BookForm;
