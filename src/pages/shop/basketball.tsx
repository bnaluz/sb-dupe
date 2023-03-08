import MiniNav from "@/components/Nav/MiniNav";
import bballItems from "@/data/bballItems";
import RetailItem from "@/utils/RetailItem";

import { useState } from "react";

const Basketball = () => {
  const [firstPriceFilter, setFirstPriceFilter] = useState(false);
  const [secondPriceFilter, setSecondPriceFilter] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [wilsonFilter, setWilsonFilter] = useState(false);
  const [spaldingFilter, setSpaldingFilter] = useState(false);

  const spaldingHandler = () => {
    setSpaldingFilter(true);
    setWilsonFilter(false);
    setFirstPriceFilter(false);
    setSecondPriceFilter(false);
    setShowAll(false);
  };

  const wilsonHandler = () => {
    setWilsonFilter(true);
    setFirstPriceFilter(false);
    setSecondPriceFilter(false);
    setShowAll(false);
    setSpaldingFilter(false);
  };

  const showAllHandler = () => {
    setFirstPriceFilter(false);
    setSecondPriceFilter(false);
    setShowAll(true);
    setWilsonFilter(false);
    setSpaldingFilter(false);
  };

  const priceHandler1 = () => {
    setShowAll(false);
    setFirstPriceFilter(true);
    setSecondPriceFilter(false);
    setWilsonFilter(false);
    setSpaldingFilter(false);
  };

  const priceHandler2 = () => {
    setShowAll(false);
    setFirstPriceFilter(false);
    setSecondPriceFilter(true);
    setWilsonFilter(false);
    setSpaldingFilter(false);
  };

  return (
    <div className="w-full h-auto pb-24 pt-8 ">
      {/* <MiniNav /> */}
      <div className="w-full text-4xl py-2 pb-8 font-bold text-green-600 text-center tracking-wide">
        Basketball
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 container mx-auto space-x-4">
        <div className=" pl-8 max-w-[320px] ">
          <div className=" bg-white  rounded-lg">
            <div className="flex pl-2 align-top font-bold uppercase text-xl pb-4">
              brands
            </div>

            <ul className="pl-2 pb-2 hover:cursor-pointer text-lg">
              <li onClick={showAllHandler} className="font-bold text-green-500">
                Show All
              </li>
              <li onClick={wilsonHandler}>Wilson</li>
              <li onClick={spaldingHandler}>Spalding</li>
            </ul>
          </div>
          <div className="w-full mt-3 bg-white  rounded-lg">
            <div className="mt-1 flex pl-2 align-top font-bold uppercase text-xl pb-4 ">
              Price
            </div>
            <ul className="pl-2 pb-2 hover:cursor-pointer text-lg">
              <li onClick={showAllHandler} className="font-bold text-green-500">
                Show All
              </li>
              <li onClick={priceHandler1}>$0.00-$49.99</li>
              <li onClick={priceHandler2}>$50.00-$99.99</li>
            </ul>
          </div>
        </div>

        {firstPriceFilter &&
          bballItems
            .filter((item) => item.price < 50.0)
            .map((e) => {
              return (
                <RetailItem
                  key={e.id}
                  id={e.id}
                  brand={e.brand}
                  title={e.title}
                  backgroundImg={e.backgroundImg}
                  price={e.price}
                />
              );
            })}

        {secondPriceFilter &&
          bballItems
            .filter((item) => item.price > 50.0)
            .map((e) => {
              return (
                <RetailItem
                  key={e.id}
                  id={e.id}
                  brand={e.brand}
                  title={e.title}
                  backgroundImg={e.backgroundImg}
                  price={e.price}
                />
              );
            })}
        {showAll &&
          bballItems.map((e) => {
            return (
              <RetailItem
                key={e.id}
                id={e.id}
                brand={e.brand}
                title={e.title}
                backgroundImg={e.backgroundImg}
                price={e.price}
              />
            );
          })}
        {wilsonFilter &&
          bballItems
            .filter((item) => item.brand.includes("Wilson"))
            .map((e) => {
              return (
                <RetailItem
                  key={e.id}
                  id={e.id}
                  brand={e.brand}
                  title={e.title}
                  backgroundImg={e.backgroundImg}
                  price={e.price}
                />
              );
            })}
        {spaldingFilter &&
          bballItems
            .filter((item) => item.brand.includes("Spalding"))
            .map((e) => {
              return (
                <RetailItem
                  key={e.id}
                  id={e.id}
                  brand={e.brand}
                  title={e.title}
                  backgroundImg={e.backgroundImg}
                  price={e.price}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Basketball;
