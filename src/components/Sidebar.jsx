import heart from "../assets/images/sidebar/heart.png";
import openedBook from "../assets/images/sidebar/opened-book.png";

import settings from "../assets/images/sidebar/settings.png";
import library from "../assets/images/sidebar/library.png";
import chat from "../assets/images/sidebar/chat.png";
import logout from "../assets/images/sidebar/logout.png";
import home from "../assets/images/sidebar/discover.png";
import avatar from "../assets/images/sidebar/avatar.png";
import { Link } from "react-router-dom";




const Sidebar = () => {
  return (
    <section
      id="sidebar"
      className="w-[18vw] h-[100vh] bg-white box-shadow z-20 fixed top-0 left-0"
    >
      <div
        id="sidebar-container"
        className="w-[80%] h-[100%] mx-auto py-[3.2rem] pl-[1.2rem] flex flex-col gap-y-[3rem]"
      >
        <Link to="/">
          <div id="app-name" className="flex items-center gap-x-[0.7rem]">
            <img
              src={openedBook}
              alt="opened book"
              className="h-[40px] w-[40px]"
            />

            <h3 className="text-[1.7rem] font-semibold text-[#001643]">
              Book<span className="text-[1.7rem] font-light">Nest</span>
            </h3>
          </div>
        </Link>
        <div id="menu-items" className="flex flex-col gap-y-[2rem]">
          <Link to="/">
            <div id="menu-item" className="flex items-center gap-x-[0.7rem]">
              <div
                id="img-bg"
                className="bg-[#0055FF] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
              >
                <img
                  src={home}
                  alt="heart shaped icon"
                  className="h-[20px] w-[20px]"
                />
              </div>

              <h5 className="text-[1.17rem] font-semibold text-[#001643]">
                Discover
              </h5>
            </div>
          </Link>
          <Link to="/book-categories">
            <div id="menu-item" className="flex items-center gap-x-[0.7rem]">
              <div
                id="img-bg"
                className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
              >
                <img
                  src={settings}
                  alt="heart shaped icon"
                  className="h-[28px] w-[28px]"
                />
              </div>
              <h5 className="text-[1.17rem] text-[#727C8E]">Category</h5>
            </div>
          </Link>
          <Link to="/all-books">
            <div id="menu-item" className="flex items-center gap-x-[0.7rem]">
              <div
                id="img-bg"
                className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
              >
                <img
                  src={library}
                  alt="heart shaped icon"
                  className="h-[28px] w-[28px]"
                />
              </div>
              <h5 className="text-[1.17rem] text-[#727C8E]">My Library</h5>
            </div>
          </Link>
          <Link to="/book-authors">
            <div id="menu-item" className="flex items-center gap-x-[0.7rem]">
              <div
                id="img-bg"
                className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
              >
                <img
                  src={avatar}
                  alt="heart shaped icon"
                  className="h-[28px] w-[28px]"
                />
              </div>
              <h5 className="text-[1.17rem]  text-[#727C8E]">Authors</h5>
            </div>
          </Link>
        </div>

        <hr className="w-[100%] mx-auto border-t-2px " />

        <div id="preferences" className="flex flex-col gap-y-[2rem]">
          <div
            id="preference-item"
            className="flex items-center gap-x-[0.7rem]"
          >
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src={settings}
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <h5 className="text-[1.17rem]  text-[#727C8E]">Settings</h5>
          </div>
          <div
            id="preference-item"
            className="flex items-center gap-x-[0.7rem]"
          >
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src={chat}
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <h5 className="text-[1.17rem]  text-[#727C8E]">Support</h5>
          </div>
          <div
            id="preference-item"
            className="flex items-center gap-x-[0.7rem]"
          >
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src={logout}
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <h5 className="text-[1.17rem]  text-[#727C8E]">Logout</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
