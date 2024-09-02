
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown); // Toggle dropdown state
  };

  return (
    <nav className="w-full h-24 flex justify-center items-center lg:bg-transparent bg-[url('/background.jpg')] bg-cover lg:relative fixed z-28 ">
      <div className="container mx-auto lg:px-6 flex justify-between items-center w-full">
        <div className="flex items-center gap-x-2 lg:w-1/3">
          <h1 className="font-poppins text-white text-3xl font-bold">
            About <span className="text-[#FFFF00]"> Vishnu.</span>
          </h1>
        </div>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <a href="#hero" className="leading-normal text-lg no-underline text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="leading-normal text-lg no-underline text-white">
              Explore
            </a>
          </li>
          {/* <li>
            <a href="#" className="leading-normal text-lg no-underline text-white">
              Article
            </a>
          </li> */}
          {/* <li>
            <a href="#" className="leading-normal text-lg no-underline text-white">
              Galleries
            </a>
          </li> */}
          <li>
            <a href="#footer" className="leading-normal text-lg no-underline text-white">
              Contact
            </a>
          </li>
        </ul>
        <div className="lg:block hidden">
          <TbGridDots className="text-[#ce8a5c] text-4xl" />
        </div>
        <div
          onClick={showDropdown}
          className="lg:hidden text-[22px] cursor-pointer text-black ml-auto"
        >
          {dropdown ? <MdClose /> : <HiMenuAlt3 />}
        </div>
      </div>
      {dropdown && (
        <div className="lg:hidden w-full h-full fixed top-24 bg-[url('/background.jpg')] bg-cover ease-in-out duration-100">
          <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
            <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
              <li>
                <a href="#hero" className="leading-normal text-lg no-underline text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="leading-normal text-lg no-underline text-white">
                  Explore
                </a>
              </li>
              {/* <li>
                <a href="#" className="leading-normal text-lg no-underline text-white">
                  Article
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="leading-normal text-lg no-underline text-white">
                  Galleries
                </a>
              </li> */}
              <li>
                <a href="#footer" className="leading-normal text-lg no-underline text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}


