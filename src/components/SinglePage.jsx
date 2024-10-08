
import { FaBook } from 'react-icons/fa';
import StarRating from './StarRating';
import imageS from '../assets/images/imageS.jpg'
const Single = () => {
  return (
    
        <div className='h-[88vh] w-[18vw] bg-slate-600'>
           
            <div className='w-[80%] h-[100%] mx-auto bg-[#001743] py-0' id='container'>
            <h1 className='text-white text-bold'>Best Seller</h1>
            <img className='w-[70%] mx-auto p-[10%] border rounded-md bg-slate-50 border-white ' src={imageS} alt=""  srcSet=''/>

            
            <h5 className='text-white text-xs pt-[8%] text-center'>1984</h5>
            <h6 className='text-[#8DA6DA] text-[0.6rem] text-center'>George Owell</h6>
            <StarRating rating={4} />
            
            


<div className="flex items-center space-x-4 mt-[15%]">
      <div className=''>
        <p className="text-[0.6rem] text-[#8DA6DA] text-center ">320 Pages </p>
      </div>
      <div className="border-l-2 border-[#8DA6DA] pl-[7%] ">
        <p className="text-[0.6rem] text-[#8DA6DA] text-center ">643 Ratings</p>
      </div>
      <div className="border-l-2 border-[#8DA6DA] pl-[7%] text-center">
        <p className="text-[0.6rem] text-[#8DA6DA]">110 Reviews</p>
      </div>
    </div>
            
            <p className='text-[#8DA6DA] text-[0.6rem] text-justify  py-[10%]  mt-[5%]' >
            Nineteen Eighty-Four is a dystopian novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime
            </p>
            <button className="flex items-center w-[70%] mx-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ">
      <FaBook className="mr-2" />
      Read Now
    </button>
            
            
            </div>



          



        </div>


  )
};

export default Single;