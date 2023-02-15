import Link from "next/link";
import Image from "next/image";

type SaleItemProps = {
  backgroundImg: string;
  URL: string;
  tagLine: string;
};

const SaleItem = ({ backgroundImg, URL, tagLine }: SaleItemProps) => {
  return (
    <div>
      <div className="relative overflow-hidden flex items-center justify-center h-auto w-full cursor-pointer">
        <Link href={URL}>
          <Image src={backgroundImg} height="1200" width="1200" alt="/" />

          <div className=" absolute top-[50%] p-2 left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h3 className="text-center w-fit h-fit leading-[1.75] px-2 bg-blue-500 text-white uppercase">
              {tagLine}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SaleItem;
