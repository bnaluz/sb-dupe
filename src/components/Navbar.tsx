import Link from "next/link";
import Image from "next/image";
import { AiFillQuestionCircle, AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed p-2 w-full h-20 border-b border-b-gray-300 z-[100%]">
      <div className="flex justify-between items-center py-18 w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/SB_LOGO.svg" alt="/" height="100" width="100" />
        </Link>

        <div className="justify-start ">
          <ul className="flex">
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

        <div> Searchbar llllllllllllll</div>

        <div className="flex px-8 justify-between text-2xl">
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
      </div>
    </div>
  );
};

export default Navbar;
