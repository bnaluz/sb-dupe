import Link from "next/link";
import Image from "next/image";

type FieldGuidesProps = {
  backgroundImg: string;
  href: string;
  tagLine: string;
};

const FgBlogItem = ({ backgroundImg, href, tagLine }: FieldGuidesProps) => {
  return (
    <div>
      <div className="overflow-hidden relative flex items-center justify-center h-auto w-full ">
        <Link href={href}>
          <Image src={backgroundImg} height="500" width="500" alt="/" />

          <div className="absolute  top-[50%] p-2 left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h3 className="text-center px-2 bg-green-600 text-white uppercase ">
              {tagLine}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FgBlogItem;
