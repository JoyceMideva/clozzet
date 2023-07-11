import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
function Nav() {
  return (
    <div className="container mx-auto  flex justify-between items-center capitalize">
      <div>
        <ul className="flex justify-between gap-10 items-center  text-lg py-4">
          <Link to="/">
          <li>
            <img className="w-40" src={logo} />
          </li>
          </Link>
          <Link to="/"><li className="hidden md:block">Home</li></Link>
          <Link to="/about us"><li className="hidden md:block ">About us</li></Link>
          <Link to="/shop"><li className="hidden md:block ">Shop</li></Link>
        </ul>
      </div>
      <div>
        <ul className="flex justify-between gap-10 items-center  text-lg py-4">
          <Link to="/cart">
          <li>
            <AiOutlineShoppingCart size={29} />
          </li>
          </Link>
          <Link to="/signup"><li>sign up</li></Link>
          <li>
            <button className="border-2  border-black  py-2 px-6  rounded-full">
              Log in
            </button>
          </li>
          <li className="block md:hidden ">
            <FaBars size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
