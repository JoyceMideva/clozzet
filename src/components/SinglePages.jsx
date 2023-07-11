import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import unisex from "../assets/images/unisex.png";
function SinglePages() {
  return (
    <div className="flex container mx-auto">
      {/* <div className="flex"> */}
        <div className="flex-1">
          <img width={800} src={unisex} alt="" srcset="" />
        </div>

        <div className="flex-1">
          <h4 className="text-teal-500 text-xl">SHOES</h4>
          <h2 className=" font-bold text-5xl py-2 border-b-2 my-5 border-black">
            Unisex Airforce Sneakers
          </h2>
          <p className="text-lg font-bold my-2">KSh 3,500</p>

          <p className="text-2xl ">
            The sneaker has all sizes which fits to normal size,it is suitable
            for all weather conditions, it is light in weight making it
            comfortable for a long wear. The shoe can be worn by both gender. It
            is suitable for outdoor activities. Buy from our shop, get it
            delivered to your doorstep and slay the whole day.
          </p>
          <div className="flex items-center gap-10 my-6">
          <h3 className="text-xl font-semibold">SELECT SIZE</h3>
          <div className="bg-white border-2 text-2xl font-bold border-gray-400 w-[30%] px-2 py-4 rounded-full flex gap-10 items-center">
            <p>40</p>
            <select name="" id=""></select>
          </div>
          <h3 className="text-xl font-semibold">QUANTITY</h3>
          <div className="bg-white border-2 px-2 py-4 text-2xl font-bold border-gray-400  border-r-2 w-[30%] rounded-full flex gap-10 items-center">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          </div>
        <div className="flex gap-4 my-5">
          <button className="bg-teal-500 flex items-center gap-7 rounded-md   font-bold text-white px-2 py-4">
            <AiOutlineShoppingCart size={30} />
            ADD TO CART
          </button>
          <button className=" border-2 border-grey flex rounded-md items-center gap-7   font-bold  px-2 py-4">
            <AiOutlineHeart size={30} />
            SAVE TO WISHLIST
          </button>
        </div>
        </div>
      {/* </div> */}
    </div>
  );
}
export default SinglePages;
