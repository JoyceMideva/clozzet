import { products } from "../data";
import { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import {useEffect} from "react"
function FeaturedCollection({cart,setCart}) {
  console.log(cart);
  function addToCart(e,product){
    if (e.target.textContent.toLowerCase()==="add to cart") {
      setCart((prev) => [...prev,product]);
      e.target.textContent="Added to cart";
    }
localStorage.setItem("cart",JSON.stringify([...cart,product]))
  }

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
                  onClick={(e) => addToCart(e,item)}
                  className=" invisible group-hover:visible bg-teal-500 py-4 px-12  w-[100%]  rounded-md absolute bottom-0 left-0 text-[#fff]"
                >
                  ADD TO CART
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
