import Image from "next/image";

type RetailItemProps = {
  brand: string;
  title: string;
  price: number;
  backgroundImg: string;
};

const RetailItem = ({
  brand,
  title,
  price,
  backgroundImg,
}: RetailItemProps) => (
  <div className="bg-white rounded-lg col-span-1 mx-2 my-2 hover:cursor-pointer">
    <div className=" px-2 py-2 ">
      <Image src={backgroundImg} alt="/" height="500" width="500" />
    </div>
    <div className="pl-2 py-2 align-bottom w-full">
      <div className="text-xl font-semibold">{brand}</div>
      <div className="text-lg ">{title}</div>
      <div className="text-lg text-green-600">${price}</div>
    </div>
  </div>
);

export default RetailItem;
