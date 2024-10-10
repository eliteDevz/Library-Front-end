const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //  collect form data
      const formData = new FormData(event.target);
      // post data to api
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get('title'),
        author: formData.get('author'),
        description: formData.get('description'),
        publisher: formData.get('publisher'),
        genre: formData.get('genre'),
        publishedDate: formData.get('publishedDate'),
        pages: formData.get('pages'),
        language: formData.get('language'),
      })
    } catch (error) {
      console.log(error)
    }

  };


const UpdateForm = () => {
  return (
    <div className='h-[12vh] w-[60vw] p-[2%] mx-auto text-[0.8rem]'>

    <form onSubmit={handleSubmit} className="w-[100%] mx-auto p-6  bg-white shadow-md rounded-lg">
      <h2 className="font-bold mb-2  text-gray-700">Update Book Content</h2>

      <div className='grid grid-cols-2 gap-4'>
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
          <select name="author" id="author" className="w-full p-1 border rounded">

            {/* place name of authors here */}
            <option value="no-author"></option>
            <option value="author1">Fredrick Douglass</option>
            <option value="author2">Lewis Alerson</option>
            <option value="author3">David Trotter</option>
            <option value="author4">Henry David Thoreau</option>
            <option value="author4">Terence A.Smart</option>
          </select>

        </div>
      </div>

      <div className="mb-2">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
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

      <div className='grid grid-cols-2 gap-4'>

        <div className="mb-2">
          <label className=" text-gray-700 font-bold mb-2" htmlFor="publisher">
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
        <label className="block text-gray-700 font-bold mb-2" htmlFor="publishedDate">
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
        <label className="block text-gray-700 font-bold mb-2" htmlFor="language">
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

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add New
      </button>
    </form>


  </div>
  )
}

export default UpdateForm;







