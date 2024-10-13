import { useEffect, useState } from "react";
import { BASE_URL } from "../../../constants";
import downloads from "../../../assets/images/bookCards/downloads.png"
import axios from "axios";

const NewReleases = () => {
  const [newBooks, setNewBooks] = useState([]);

  const fetchNewBooks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books`);
      const booksInReverse = response.data.reverse().splice(0,4);
      setNewBooks(booksInReverse);
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  useEffect(() => {
    fetchNewBooks();
  }, []);

  return (
    <section id="new-releases" className="w-[100%] bg-white rounded-[10px]">
      <div
        id="container"
        className="w-[95%] mx-auto pt-[40px] flex-grow flex flex-col gap-y-[2rem]"
      >
        <div id="title" className="flex items-center justify-between">
          <h3 className="font-semibold text-[1.5rem]">New Releases</h3>
          <button className="bg-[#E6EFFE] text-[#1D62FF] py-[5px] px-[20px] rounded-[10px]">
            See All
          </button>
        </div>

        {/* Container that allows horizontal scrolling  */}
        <div
          id="book-cards"
          className="h-[270px] flex items-center overflow-x-auto space-x-[2rem]"
        >
          {newBooks.map((newBook) => {
            return (
              <div
                key={newBook._id}
                id="card-container"
                className="h-[250px] flex items-center"
              >
                <div
                  id="card"
                  className="min-w-[390px] h-[150px] bg-gradient-to-br from-[#1F5289] to-[#3A061B] rounded-[10px] relative flex"
                >
                  <div
                    id="image-placeholder"
                    className="w-[38%] h-[150px] relative rounded-l-[10px]"
                  >
                    <div
                      id="image"
                      className="h-[170px] w-[90%] absolute bottom-[20px] left-[20px] rounded-[10px]"
                    >
                      <img
                        src={newBook.coverImage}
                        alt="harry potter image"
                        className="w-full h-full rounded-[10px]"
                      />
                    </div>
                  </div>
                  <div
                    id="description"
                    className="w-[62%] px-[20px] py-[20px] flex flex-col gap-y-[0.5rem]"
                  >
                    <h5 className="text-[1.1rem] font-semibold text-white leading-[1.3rem]">
                      {newBook.title}
                    </h5>
                    <p className="text-[#76809C] text-[0.9rem]">
                      {newBook.author.name}
                    </p>
                    <div className="flex gap-x-[0.2rem] items-center">
                      <p className="text-[#819ACE] text-[0.8rem]">{`Pages ${newBook.pages}`}</p>
                      <span className="text-[#819ACE]">•</span>
                      <p className="text-[#819ACE] text-[0.8rem]">
                        13 Chapters
                      </p>
                      <span className="text-[#819ACE]">•</span>
                      <div className="flex items-center h-[19.2px] justify-between">
                        <p className="text-[#819ACE] text-[0.8rem]">3M </p>
                        <img
                          src={downloads}
                          alt="download icon"
                          className="h-[80%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
