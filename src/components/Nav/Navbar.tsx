import Link from "next/link";
import Image from "next/image";
import {
  AiFillQuestionCircle,
  AiFillHeart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRecycle, FaShoppingCart } from "react-icons/fa";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [hamNav, setHamNav] = useState(false);

  const navHandler = () => {
    setHamNav(!hamNav);
    console.log(hamNav);
  };

  return (
    <div className="fixed p-2 w-full h-20 border-b border-b-gray-300 z-[100] bg-[#e9ecee]">
      <div className="flex justify-between  items-center w-full h-full px-2 2xl:px-16">
        <div className="flex justify-between">
          <Link href="/">
            <Image src="/SB_LOGO.svg" alt="/" height="100" width="100" />
          </Link>

          <div className="justify-start ">
            <ul className="hidden lg:flex ">
              <Link href="/#shop">
                <li className="ml-10 uppercase hover:border-b-2 text-3xl font-bold  hover:border-green-600">
                  Shop
                </li>
              </Link>
              <Link href="/#rent">
                <li className="ml-10 text-3xl uppercase hover:border-b-2 hover:border-green-600 font-bold">
                  Rent
                </li>
              </Link>
              <Link href="/#deals">
                <li className="ml-10 text-3xl uppercase hover:border-b-2 font-bold  hover:border-green-600 text-green-600">
                  Deals
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* searchbar */}
        <SearchBar />

        <div className="hidden lg:flex px-8 justify-between text-2xl">
          <Link href="#faq" className="p-3 text-green-600">
            <AiFillQuestionCircle />
          </Link>
          <Link href="#login" className="p-3  text-green-600">
            <BsFillPersonFill />
          </Link>
          <Link href="#wish-list" className="p-3  text-green-600">
            <AiFillHeart />
          </Link>
          <Link href="#cart" className="p-3  text-green-600">
            <FaShoppingCart />
          </Link>
        </div>

        <div onClick={navHandler} className="lg:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* // Hamburger Menu */}
      <div
        className={
          hamNav
            ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            hamNav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Link href="/" onClick={() => setHamNav(false)}>
                <Image src={"/SB_LOGO.svg"} alt="" width="105" height="85" />
              </Link>
              <div
                onClick={navHandler}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="py-4 flex flex-col ">
              <ul className="uppercase text-2xl font-bold ">
                <Link href="/shop" onClick={() => setHamNav(false)}>
                  <li className="py-4 text:sm hover:text-green-600">Shop</li>
                </Link>
                <Link href="/rent" onClick={() => setHamNav(false)}>
                  <li className="py-4 text:sm hover:text-green-600">Rent</li>
                </Link>
                <Link href="/deals" onClick={() => setHamNav(false)}>
                  <li className="py-4 text:sm text-green-600">Deals</li>
                </Link>
              </ul>
              <div className="border-b border-gray-500"></div>

              <div className="py-4 flex flex-col ">
                <ul className="uppercase text-2xl font-bold ">
                  <Link href="/#pre-loved" onClick={() => setHamNav(false)}>
                    <li className="py-4 text:sm flex hover:text-green-600">
                      <FaRecycle className="text-green-600" />
                      pre-loved
                    </li>
                  </Link>

                  <Link href="/#gift-cards" onClick={() => setHamNav(false)}>
                    <li className="py-4 text:sm hover:text-green-600">
                      gift cards
                    </li>
                  </Link>
                  <Link href="/#events" onClick={() => setHamNav(false)}>
                    <li className="py-4 text:sm hover:text-green-600">
                      Events
                    </li>
                  </Link>
                  <Link href="/#services" onClick={() => setHamNav(false)}>
                    <li className="py-4 text:sm hover:text-green-600">
                      services
                    </li>
                  </Link>
                  <Link href="/#ski-bus" onClick={() => setHamNav(false)}>
                    <li className="py-4 text:sm hover:text-green-600">
                      ski bus
                    </li>
                  </Link>
                  <Link href="/#basementeers" onClick={() => setHamNav(false)}>
                    <li className="py-4 text:sm hover:text-green-600">
                      basementeers
                    </li>
                  </Link>
                  <Link href="/#find-a-store" onClick={() => setHamNav(false)}>
                    <li className="py-4 text:sm hover:text-green-600">
                      find a store
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
