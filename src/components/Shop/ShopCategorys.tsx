import shopCategoryInfo from "@/data/shopCategoryInfo";
import ShopCategoryItem from "./ShopCategoryItem";

const ShopCategorys = () => {
  return (
    <div className="grid h-full md:space-x-6 place-items-center grid-cols-1 md:grid-cols-3">
      {shopCategoryInfo.map((e) => {
        return (
          <ShopCategoryItem
            key={Math.random()}
            backgroundImg={e.backgroundImg}
            href={e.href}
            categoryName={e.categoryName}
          />
        );
      })}
    </div>
  );
};

export default ShopCategorys;
