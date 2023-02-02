import Link from "next/link";
import { FaRecycle } from "react-icons/fa";

const MiniNav = () => {
  return (
    <div className=" w-full h-30">
      <div className="flex justify-end p-2 items-center pt-24 w-full h-full px-2 2xl:px-16">
        <div className="flex justify-end ">
          <ul className="flex">
            <Link href="/#pre-loved">
              <li className="ml-10  flex text-md uppercase hover:text-green-600 font-bold">
                <FaRecycle className="text-green-600" />
                pre-loved
              </li>
            </Link>

            <Link href="/#gift-cards">
              <li className="ml-10 text-md uppercase hover:text-green-600 font-bold">
                gift cards
              </li>
            </Link>
            <Link href="/#events">
              <li className="ml-10 text-md uppercase hover:text-green-600 font-bold">
                Events
              </li>
            </Link>
            <Link href="/#services">
              <li className="ml-10 text-md uppercase hover:text-green-600 font-bold">
                services
              </li>
            </Link>
            <Link href="/#ski-bus">
              <li className="ml-10 text-md uppercase hover:text-green-600 font-bold">
                ski bus
              </li>
            </Link>
            <Link href="/#basementeers">
              <li className="ml-10 text-md uppercase hover:text-green-600 font-bold">
                basementeers
              </li>
            </Link>
            <Link href="/#find-a-store">
              <li className="ml-10 text-md uppercase hover:text-green-600 font-bold">
                find a store
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
