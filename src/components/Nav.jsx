import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useEffect } from "react";
function Nav({cart,setCart}) {
useEffect(()=>{
const cartItems=JSON.parse(localStorage.getItem("cart"))
 cartItems && setCart(cartItems)

},[])

  return (
    <div className="container mx-auto  flex justify-between items-center capitalize">
      <div>
        <ul className="flex justify-between gap-10 items-center  text-lg py-4">
          <Link to="/">
            <li>
              <img className="w-40" src={logo} />
            </li>
          </Link>
          <Link to="/">
            <li className="hidden md:block">Home</li>
          </Link>
          <Link to="/aboutus">
            <li className="hidden md:block ">About us</li>
          </Link>
          <Link to="/form">
            <li className="hidden md:block ">ADD</li>
          </Link>
          <Link to="/shop">
            <li className="hidden md:block ">Shop</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul className="flex justify-between gap-10 items-center  text-lg py-4">
          <Link to="/cart">
            <li className="relative">
              {
                cart.length>0&&
              <span className="absolute bg-teal-500 left-4 bottom-6 w-[30px] h-[30px] rounded-full text-white font-bold flex justify-center items-center">
                {cart.length}
              </span>
}
              <AiOutlineShoppingCart size={29} />
            </li>
          </Link>
          <Link to="/signup">
            <li>sign up</li>
          </Link>
          <Link to="/login">
            <li>
              <button className="border-2  border-black  py-2 px-6  rounded-full">
                Log in
              </button>
            </li>
          </Link>
          <li className="block md:hidden ">
            <FaBars size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
