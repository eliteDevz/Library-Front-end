import { useState } from 'react';

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    publisher: '',
    publishedDate: '',
    pages: '',
    language: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    
  };

  return (
      

    <div className='h-[15vh] w-[60vw] p-[2%] mx-auto text-[0.8rem]'>

    <form onSubmit={handleSubmit} className="w-[100%] mx-auto p-6  bg-white shadow-md rounded-lg mt-[50px] ">
      <h2 className=" font-bold  text-gray-700 mb-2">Add a New Book</h2>

      
       <div className='grid grid-cols-2 gap-4'>
      <div className="mb-4">
        <label className=" text-gray-700 font-bold mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-1 border rounded"
          required
        />
      </div>

      <div className="mb-2">
        <label className=" text-gray-700 font-bold mb-2" htmlFor="author">
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-1 border rounded"
          required
        />
      </div>
      </div>

      <div className="mb-2">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-1 border rounded"
          rows="2"
          required
        ></textarea>
      </div>

      <div className='grid grid-cols-2 gap-4'>

      <div className="mb-2">
        <label className=" text-gray-700 font-bold mb-2" htmlFor="publisher">
          Publisher
        </label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
          className="w-full p-1 border rounded"
          required
        />
      </div>


      <div className="mb-2">
        <label className=" text-gray-700 font-bold mb-2" htmlFor="Genre">
          Genre
        </label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full p-1 border rounded"
          required
        />
      </div>

      </div>

      <div className="mb-2">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="publishedDate">
          Published Date
        </label>
        <input
          type="date"
          id="publishedDate"
          name="publishedDate"
          value={formData.publishedDate}
          onChange={handleChange}
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
          value={formData.pages}
          onChange={handleChange}
          className="w-full p-1 border rounded"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="language">
          Language
        </label>
        <input
          type="text"
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="w-full p-1 border rounded"
          required
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add New
      </button>
    </form>


    </div> 
  );
};

export default BookForm;
