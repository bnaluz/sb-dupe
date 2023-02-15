import Image from "next/image";
import fgInfo from "@/data/fgInfo";
import FgBlogItem from "./FgBlogItem";
import Link from "next/link";

const FieldGuides = () => {
  return (
    <div>
      {/* Text box */}
      <div className="bg-gray-800 px-6 pt-14 pb-6 ">
        <div className="container mx-auto text-center">
          <div className=" text-white text-4xl font-bold uppercase italic">
            <span>Take a Closer look at our field Field guides</span>
          </div>
          <div className=" py-2 text-white text-xl uppercase">
            weird videos, staff reviews, & a ton of adventures
          </div>
        </div>
      </div>

      {/* Image and skibus blurb */}
      <div className="bg-gray-800 px-6 pt-6 pb-12">
        <div className="container mx-auto flex flex-wrap ">
          {/* image */}
          <div className="w-full md:w-1/2 md:order-2">
            <Link href="/">
              <Image
                className="w-full md:w-auto md:h-auto"
                src="/Fg-Ski-Rental.png"
                alt="/"
                height={3500}
                width="3500"
              />
            </Link>
          </div>
          <div className="w-full md:w-1/2 py-6 px-6 md:py-8 md:px-12 bg-white">
            <h2 className="uppercase font-bold tracking-wider text-2xl">
              How we tune the largest ski rental fleet in california
            </h2>
            <div className="w-1/3 border-b-[5px] border-b-green-500 my-4"></div>
            <div>
              <p>
                Did you know that Sports Basement has the largest ski rental
                fleet in California? If you saw how long it takes to run them
                all through our Wintersteiger Jupiter, you'd believe it.
                Luckily, our massive fleet has a massive tuning machine (and a
                massive amount of loving staffers) to care for it all. Follow
                along as Matt Gough talks with a bunch of those staffers
                (including himself) to learn all about &apos;em.
              </p>
              <Link href="/shop">
                <button className="bg-green-600 uppercase text-sm rounded-full my-4 py-2 px-2 text-white">
                  Watch the video
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* text blurb field guide */}
      <div className="bg-gray-800 px-6 pt-2 pb-4">
        <div className="container mx-auto text-center">
          <div className="my-0 uppercase text-2xl  text-white ">
            <span className="text-3xl italic">
              TRY SOMETHING NEW THIS YEAR{" "}
            </span>
            With our staff-written field guides
          </div>
        </div>
      </div>

      {/* mapping data for fg-blog */}

      <div className="w-full bg-gray-800  ">
        <div className="max-w-[2040px] mx-auto px-2 py-8">
          <div className="grid md:grid-cols-5 gap-8 ">
            {fgInfo.map((e) => {
              return (
                <FgBlogItem
                  key={Math.random()}
                  tagLine={e.tagLine}
                  href={e.href}
                  backgroundImg={e.backgroundImg}
                />
              );
            })}
          </div>
        </div>
        <div className="text-center  uppercase">
          <Link href="/all-fg">
            <button className="bg-green-600 uppercase text-md rounded-full px-2 mb-8 py-2 text-white">
              Check Out Our Field Guides
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FieldGuides;
