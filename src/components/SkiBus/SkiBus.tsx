import Image from "next/image";
import Link from "next/link";

const SkiBus = () => {
  return (
    <div className="w-full h-auto px-6 pt-0 pb-20">
      <div className="container mx-auto flex flex-wrap ">
        <div className="w-full md:w-1/2  ">
          <a href="/shop">
            {/* change href later */}
            <Image src="/skibus.png" alt="/" width={1000} height="500" />
          </a>
        </div>
        <div className="w-full md:w-1/2 py-6 px-6 md:py-8 md:px-12 bg-white">
          <h2 className="mb-0 font-bold uppercase text-2xl  tracking-wider">
            We'll do the driving. you do the skiing.
          </h2>
          <div className="w-1/3 border-b-[5px] py-2 border-b-green-600"></div>
          <div>
            <p className="text-lg py-4">
              Hop aboard our luxury Ski Bus to Palisades Tahoe and let us take
              care of the drive while you stay fresh for the slopes ahead. Enjoy
              breakfast, après drinks and snacks, free wifi and the joy of
              actually being able to enjoy the scenery rather than staring at
              someone's tailights for 3 hours.
            </p>
          </div>
          <div className="text-center md:text-left">
            <Link href="/shop">
              <button className="bg-green-600 uppercase text-sm rounded-full my-4 py-2 px-2 text-white">
                book your seat
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkiBus;
