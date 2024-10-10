import hatefulEight from '../../../assets/images/bookCards/hateful-eight.png'
import ellipsis from '../../../assets/images/bookCards/ellipsis.png'


const ForYou = () => {
  return (
    <section id="new-releases" className="w-[100%] bg-white rounded-[10px]">
      <div
        id="container"
        className="w-[95%] mx-auto pt-[40px] flex-grow flex flex-col gap-y-[2rem] py-[3.5rem] "
      >
        <div id="title" className="flex items-center justify-between">
          <h3 className="font-semibold text-[1.5rem]">For You</h3>
          <button className="bg-[#E6EFFE] text-[#1D62FF] py-[5px] px-[20px] rounded-[10px]">
            See More
          </button>
        </div>
        <div id="cards" className="grid grid-cols-4 gap-x-[1rem] gap-y-[1rem]">
          <div
            id="card"
            className=" h-[320px] bg-black flex flex-col justify-between py-[20px] rounded-[10px] bg-gradient-to-br from-[#1F5289] to-[#3A061B]"
          >
            <div className="image-holder w-[70%] h-[75%] mx-auto rounded-[10px]">
              <img
                src={hatefulEight}
                alt="book cover"
                className="h-[100%] w-[100%] rounded-[10px]"
              />
            </div>
            <div className="bottom-part flex h-[20%] w-[70%] mx-auto">
              <div className="desc w-[70%] mx-auto flex flex-col ">
                <h5 className="text-[1.rem] font-semibold text-white leading-[1.3rem]">
                  Hateful 8
                </h5>
                <p className="text-[#76809C] text-[0.9rem]">James Brown</p>
              </div>
              <div className="w-[30%] relative">
                <img
                  src={ellipsis}
                  alt="menu icon"
                  className="h-[35px] absolute bottom-0 right-0"
                  htmlFor="dropdown-toggle"
                />
                <ul id='dropdown-toogle' className="dropdown-menu absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-md hidden">
                  <li className="p-2 hover:bg-gray-100">
                    <a href="#" className="block text-gray-700">
                      Action 1
                    </a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="#" className="block text-gray-700">
                      Action 2
                    </a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="#" className="block text-gray-700">
                      Action 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
