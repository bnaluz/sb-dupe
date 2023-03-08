import { addToCart } from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/store";
import Image from "next/image";

type RetailItemProps = {
  brand: string;
  title: string;
  price: number;
  backgroundImg: string;
  id: string;
};

const RetailItem = ({
  id,
  brand,
  title,
  price,
  backgroundImg,
}: RetailItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      id={id}
      className="bg-white rounded-lg col-span-1 mx-2 my-2 hover:cursor-pointer"
    >
      <div className=" px-2 py-2">
        <Image src={backgroundImg} alt="/" height="500" width="500" />
      </div>
      <div className="pl-2 py-2 align-bottom w-full">
        <div className="text-xl font-semibold">{brand}</div>
        <div className="text-lg ">{title}</div>
        <div className="text-lg text-green-600">${price}</div>
        <button
          onClick={() => dispatch(addToCart({ id: id }))}
          className="w-full rounded-full bg-green-600 text-white py-1 px-2"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default RetailItem;
