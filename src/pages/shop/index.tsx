import MiniNav from "@/components/Nav/MiniNav";
import ShopCategorys from "@/components/Shop/ShopCategorys";
import Image from "next/image";

const shop = () => (
  <div>
    {/* <MiniNav /> */}
    <div className="text-center text-3xl font-bold text-green-600 py-2">
      Explore All
    </div>

    <div className="h-auto w-full flex justify-center">
      <ShopCategorys />
    </div>
  </div>
);

export default shop;
