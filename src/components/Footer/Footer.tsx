import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#e9ecee] py-5">
      <div className="container mx-auto py-5">
        <div className="flex flex-wrap justify-around">
          <div className="w-full lg:w-1/3 mb-12 px-5 max-w-[500px]">
            <form>
              <div className="flex relative">
                <div className="mx-auto">
                  <input
                    className="rounded-xl px-4"
                    placeholder="Get our newsletter!"
                  ></input>
                </div>
                <div>
                  <button className="bg-green-600 px-4 m-1 text-white uppercase rounded-full">
                    sign me up!
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center pt-2 text-xl justify-around">
              <a
                href="https://www.facebook.com/sportsbasement"
                className="text-green-600"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/sportsbasement/"
                className="text-green-600"
              >
                <BsInstagram />
              </a>
              <a
                href="https://twitter.com/SportsBasement"
                className="text-green-600"
              >
                <BsTwitter />
              </a>
              <a
                href="https://www.youtube.com/user/thesportsbasement"
                className="text-green-600"
              >
                <BsYoutube />
              </a>
              <a href="/review-us" className=" text-lg italic">
                <div>Review Us</div>
              </a>
            </div>
          </div>
          <div className="w-full xs:w-2/3 md:w-5/6 lg:w-full xl:w-2/3 px-2 xs:pl-6">
            <div className="container mx-auto">
              <div className="flex flex-wrap justify-around">
                <div className="w-full md:w-1/2 lg:w-1/4 mb-12 px-3 flex flex-col">
                  <a href="/about" className="font-semibold pb-2 ">
                    About Sb
                  </a>
                  <a
                    href="/store-locations"
                    className="text-sm  pb-2  leading-none whitespace-normal"
                  >
                    Store Locations
                  </a>
                  <a
                    href="/contact"
                    className="text-sm  pb-2  leading-none whitespace-normal"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-12 px-3 flex flex-col">
                  <a href="/my-account" className="font-semibold pb-2 ">
                    My Account
                  </a>
                  <a
                    href="/login"
                    className="text-sm  pb-2  leading-none whitespace-normal"
                  >
                    Login
                  </a>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-12 px-3 flex flex-col">
                  <a href="/community" className="font-semibold pb-2">
                    Our Community
                  </a>
                  <a
                    href="/field-guides"
                    className="text-sm  pb-2  leading-none whitespace-normal"
                  >
                    Field Guides
                  </a>
                  <a
                    href="/events"
                    className="text-sm  pb-2  leading-none whitespace-normal"
                  >
                    Events
                  </a>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-12 px-3 flex flex-col">
                  <a href="/shop" className="font-semibold pb-2 ">
                    Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="grid md:grid-cols-3  justify-items-end">
<div>list 1</div>
<div>list 2</div>
<div>list 3</div>
</div> */
}

{
  /* <a
            href="https://www.facebook.com/sportsbasement"
            className="text-green-600"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/sportsbasement/"
            className="text-green-600"
          >
            <BsInstagram />
          </a>
          <a
            href="https://twitter.com/SportsBasement"
            className="text-green-600"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.youtube.com/user/thesportsbasement"
            className="text-green-600"
          >
            <BsYoutube />
          </a>
          <a href="/review-us" className=" text-lg italic">
            <div>Review Us</div> */
}
