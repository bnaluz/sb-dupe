import MiniNav from "@/components/Nav/MiniNav";
import ShopCategorys from "@/components/Shop/ShopCategorys";
import ShopImage from "@/components/Shop/ShopImage";

const shop = () => {
  return (
    <>
      <ShopImage />
      <div className="w-full h-screen border-b border-black">
        <div>
          <div className="absolute w-full bg-white">
            <MiniNav />
            <div className="w-full text-4xl py-2 font-bold text-green-600 text-center tracking-wide">
              Explore All
            </div>
          </div>
        </div>
        <ShopCategorys />
      </div>
    </>
  );
};

export default shop;
