import { FaBook } from "react-icons/fa";
import StarRating from "./StarRating";
import george from "../assets/images/george.jpg";

const Single = () => {
  return (
    <section className="bg-[#001542] py-[70px] w-[18vw] h-[88vh] fixed right-0 overflow-y-auto">
      <div
        id="single-page-container"
        className=" w-[70%]  mx-auto flex flex-col gap-y-[1.5rem]"
      >
        <h5 className="text-[1.7rem] text-[white] text-center">Best Seller</h5>
        <div
          id="image"
          className="w-[100%] h-[35vh] bg-[#EEF3F3] rounded-[10px] flex items-center justify-center"
        >
          <img src={george} alt="book cover art" className="w-[70%] h-[80%]" />
        </div>
        <div
          id="title-author"
          className="flex flex-col items-center gap-y-[0.1rem]"
        >
          <h5 className=" text-[1.17rem] font-bold text-white">1984</h5>
          <h6 className="text-[1rem] text-[#819ACE]">George Owell</h6>
        </div>
        <div id="star-ratings" className="">
          <StarRating rating={4} />
        </div>
        <div id="ratings" className="flex my-[10px]">
          <div id="first" className="flex flex-col items-center px-[0.7rem]">
            <h4 className="text-[#819ACE] text-[1.1rem]">320</h4>
            <p className="text-[#76809C]">Pages</p>
          </div>
          <div
            id="second"
            className="flex flex-col items-center border-x-[1.5px] border-[#2D4573] px-[0.7rem]"
          >
            <h4 className="text-[#819ACE] text-[1.1rem]">643</h4>
            <p className="text-[#76809C]">Ratings</p>
          </div>
          <div id="third" className="flex flex-col items-center px-[0.7rem]">
            <h4 className="text-[#819ACE] text-[1.1rem]">110</h4>
            <p className="text-[#76809C]">Reviews</p>
          </div>
        </div>
        <div id="bk-desc" className="w-[100%] ">
          <p className="text-center text-[#819ACE] text-[0.9rem]">
            Nineteen Eighty-Four is a dystopian novel and cautionary tale by
            English writer George Orwell. It was published on 8 June 1949 by
            Secker & Warburg as Orwell's ninth and final book completed in his
            lifetime
          </p>
        </div>
        <button className="bg-[#0055FF] w-[100%] rounded-[10px] text-[white] flex items-center justify-center gap-x-[1rem] py-[10px] px-[20px] mt-[15px] hover:bg-[#007bff] hover:border-[2px] hover:border-[#001542]">
          Read Now <FaBook className="mr-2" />
        </button>
      </div>
    </section>
  );
};

export default Single;
