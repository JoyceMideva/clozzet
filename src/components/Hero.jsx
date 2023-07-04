import { PiMagnifyingGlassBold } from "react-icons/pi";
function Hero() {
  return (
    <div className="container mx-auto flex">
      <div className="w-[100%] md:w-[50%] pt-7">
        <h1 className=" md:text-7xl  text-4xl font-bold">
          Choose the look that <span className="text-[#45C9A1]">suits</span> you
          best 
        </h1>
        <p className="text-lg my-5 md:text-sm">
          Every day is a fashion show & the world is your runway. Clozzet will
          elevate your wardrobe with the best collections. Be exclusive, Be
          Devine, Be yourself. Explore outfits that will make you comfortably
          beautiful.True style never dies.
        </p>
        <div className="flex gap-7">
          <button className=" sm:px-6 border-2 py-4 px-12  bg-[#45c9a1] rounded-full font-bold text-[#fff] text-lg">
            Shop Now
          </button>
          <button className="  shadow-md border-2 py-4 px-12 sm:px-6  bg-[#fff] rounded-full font-bold text-[#45c9a1] text-lg">
            About Us
          </button>
        </div>
        <div className="flex bg-white items-center border-2 rounded-full  px-2 my-7 w-[100%]">
          <PiMagnifyingGlassBold size={40} />
          <input
            className="  bg-transparent outline-none  w-[100%] py-4 px-12"
            type="text"
            placeholder="search"
          />
        </div>
      </div>
      <div className="w-[50%] tt    hidden md:block bg-right-top bg-no-repeat bg-[url('assets/images/hero2.png')]"></div>
    </div>
  );
}
export default Hero;
