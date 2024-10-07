
import image2 from '../assets/images/image2.jpeg';
import image1 from '../assets/images/image1.jpeg';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [isListOpen, setIsListOpen] = useState(false);
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-5">
                <div className="flex flex-col items-center">
                    <img
                        className="rounded-full h-24 w-24"
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                    />
                    <h3 className="text-lg font-semibold mt-4">Ben Bradlee</h3>
                </div>
                <nav className="mt-10">
                    <ul>
                        {/* Collapsible "Your List" */}
                        <li className="mb-4">
                            <button
                                className="text-gray-300 hover:text-white w-full text-left flex justify-between"
                                onClick={() => setIsListOpen(!isListOpen)}
                            >
                                Your List
                                <FontAwesomeIcon icon={isListOpen ? faChevronUp : faChevronDown} />
                            </button>
                            {isListOpen && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Menu-1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Menu-2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Menu-3
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Collapsible "Your Collection" */}
                        <li className="mb-4">
                            <button
                                className="text-gray-300 hover:text-white w-full text-left flex justify-between"
                                onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                            >
                                Your Collection
                                <FontAwesomeIcon icon={isCollectionOpen ? faChevronUp : faChevronDown} />
                            </button>
                            {isCollectionOpen && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Menu-1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Menu-2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Menu-3
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Menu-4
                                        </a>
                                    </li>
                                </ul>

                            )}
                        </li>
                    </ul>
                </nav>

                
                <div>
                    {/* <img src={download} alt="" srcSet='' /> */}
                </div>
               
        


            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-6">
                <form id="search" className="flex items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            required
                            name="Search"
                            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Search
                    </button>
                </form>

                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Best Seller</h1>

                </header>
                <p className="mt-4">
                    <div className="flex-1 p-6">

                        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>

                            <img src={image1} alt="" srcSet='' />
                            </div>

                            <div>
                            <img src={image2} alt="" srcSet='' />
                            </div>
                            {/* <img src={image3} alt="" srcSet='' /> */}
                            <div>

                            </div>
                        </section>

                        <div className="flex-1 p-6">

                            <section className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    imgSrc="https://via.placeholder.com/200"
                                </div>

                                <div>
                                    imgSrc="https://via.placeholder.com/200"
                                </div>

                                <div>
                                    imgSrc="https://via.placeholder.com/200"
                                </div>

                                <div>
                                    imgSrc="https://via.placeholder.com/200"
                                </div>

                                <div>
                                    imgSrc="https://via.placeholder.com/200"
                                </div>

                                <div>
                                    imgSrc="https://via.placeholder.com/200"
                                </div>


                            </section>
                        </div>
                    </div>
                </p>
            </div>


        </div>
    );
};

export default Sidebar;

