import shopCategoryInfo from "@/data/shopCategoryInfo";
import ShopCategoryItem from "./ShopCategoryItem";

const ShopCategorys = () => {
  return (
    <div className="grid pt-2 lg:grid-cols-3 gap-8 items-stretch">
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
