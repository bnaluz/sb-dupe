import MiniNav from "@/components/Nav/MiniNav";
import ShopCategorys from "@/components/Shop/ShopCategorys";
import ShopImage from "@/components/Shop/ShopImage";

const shop = () => {
  return (
    <div className="w-full h-screen border-b border-black">
      <MiniNav />

      <div className="w-full text-4xl py-2 font-bold text-green-600 text-center tracking-wide">
        Explore All
      </div>
      <div className="w-full mx-auto ">
        <div className="bg-fixed">
          <ShopImage />
        </div>
        <div>
          <div className="absolute pt-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <ShopCategorys />
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
