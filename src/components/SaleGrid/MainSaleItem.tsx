import SaleItem from "./SaleItem";

const MainSaleItem = () => {
  return (
    <div className="w-full">
      <div className="max-w-[2040px] mx-auto px-2 py-10 ">
        <div className="grid md:grid-cols-4 gap-8">
          <SaleItem
            backgroundImg={"/sale1.png"}
            URL="/#shop/helly-hansen"
            tagLine="50% off select helly hansen snow apparel"
          />
          <SaleItem
            backgroundImg={"/sale2.png"}
            URL="/#shop/patagonia"
            tagLine="save 40% on select patagonia - new styles added!"
          />
          <SaleItem
            backgroundImg={"/sale3.png"}
            URL="/#shop/the-north-face"
            tagLine="save 30% off select the north face"
          />
          <SaleItem
            backgroundImg={"/sale4.png"}
            URL="/#shop/columbia"
            tagLine="save 30-50% on columbia apparel"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSaleItem;
