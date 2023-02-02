import Image from "next/image";

const MainHero = () => {
  return (
    <div className="p-2">
      <Image
        src="/sb-main-hero.jpg"
        alt="/"
        width={1500}
        height="400"
        className="absolute left-[50%] translate-x-[-50%] translate-y-[1%] cursor-pointer"
      />
    </div>
  );
};

export default MainHero;
