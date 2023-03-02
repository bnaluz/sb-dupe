import Image from "next/image";

const MainHero = () => {
  return (
    <div className="w-full container mx-auto pt-24">
      <Image
        src="/sb-hero-img.png"
        alt="/"
        width="5000"
        height="5000"
        className="cursor-pointer"
      />
    </div>
  );
};

export default MainHero;
