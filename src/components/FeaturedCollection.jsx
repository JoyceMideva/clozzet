import { products } from "../data";
import { useState,useEffect ,useContext} from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart, addToCartText} from "../helpers";
import { StateContext } from "../context/state"
function FeaturedCollection() {
  const {cart,setCart}=useContext(StateContext)
  return (
    <div className="container mx-auto flex  justify-center items-center  my-20  gap-10">
      {console.log(cart)}
      <SlArrowLeft size={40} className="cursor-pointer" />
      {products.map((item) => {
        if (item.featured) {
          return (
            <div>
              <div className="h-[300px] w-[300px] bg-gray-200 relative group">
                <img
                  className="object-contain h-[100%] w-[100%] "
                  src={`/src/assets/images/${item.img}`}
                />
                <button
                
                  onClick={(e) => addToCart(e,item, cart,setCart)}
                  className=" invisible group-hover:visible bg-teal-500 py-4 px-12  w-[100%]  rounded-md absolute bottom-0 left-0 text-[#fff]"
                >
                 {addToCartText(cart, item)}
                </button>
              </div>
              <div className=" flex justify-between items-center">
                <div>
                  <p>{item.productName}</p>
                  <p>{item.productPrice}</p>
                </div>
                <AiOutlineHeart size={40} />
              </div>
            </div>
          );
        }
      })}
      <SlArrowRight size={40} className="cursor-pointer" />
    </div>
  );
}
export default FeaturedCollection;
