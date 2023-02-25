import shopCategoryInfo from "@/data/shopCategoryInfo";
import Image from "next/image";
import Link from "next/link";

type ShopCategoryProps = {
  href: string;
  backgroundImg: string;
  categoryName: string;
};

const ShopCategoryItem = ({
  href,
  backgroundImg,
  categoryName,
}: ShopCategoryProps) => {
  return (
    <div>
      <div className="py-6 relative flex items-center justify-center  ">
        <Link href={href}>
          <div className="mt-auto flex">
            <Image src={backgroundImg} height="800" width="800" alt="/" />
          </div>
          <div className="absolute  top-[50%] p-2 left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h3 className="text-center px-2 bg-green-600 text-white uppercase ">
              {categoryName}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShopCategoryItem;
