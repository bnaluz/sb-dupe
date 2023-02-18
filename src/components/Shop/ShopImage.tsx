import Image from "next/image";

const ShopImage = () => {
  return (
    <div className="fixed h-screen w-full flex justify-center mx-auto  pt-2">
      <Image src="/shopAllCourt.png" alt="/" width="1800" height="1800" />
    </div>
  );
};

export default ShopImage;
