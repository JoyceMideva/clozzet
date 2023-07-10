import stripknitted from "../assets/images/knitted-sweater.png";
import unisex from "../assets/images/unisex.png";
import slim from "../assets/images/slim-banquet-dress.png";
import denim from "../assets/images/denim-jeans.png";
import {FiTrash2} from "react-icons/fi"
function Carts() {
  return (
    <div className="container mx-auto flex">
      <div className="flex border-2">
        <div className="">
          <h3>Product</h3>
          <div className="flex">
            <div>
              <img width={100} src={stripknitted} alt="" srcset="" />
            </div>
            <div>
            <h4>Strip Knitted Sweater</h4>
            <p>Size: XL</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img width={100} src={unisex} alt="" srcset="" />
            </div>
            <div>
            <h4>Unisex Airforce Sneakers</h4>
            <p>Size: 40</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img width={100} src={slim} alt="" srcset="" />
            </div>
            <div>
            <h4>Slim Banquet Dress</h4>
            <p>Size: M</p>
            </div>
          </div>

          <div className="flex">
            <img width={100} src={denim} alt="" srcset="" />
            <div>
            <h4>Women Denim Jeans</h4>
            <p>Size: L</p>
            </div>
          </div>
        </div>
        <div className="">
          <h3>Quantity</h3>
          <div>
            <div>-1+</div>
            <div>-1+</div>
            <div>-1+</div>
            <div>-1+</div>
          </div>
        </div>
        <div>
          <h3>Price</h3>
          <p>KSh 2250</p>
          <p>KSh 2000</p>
          <p>KSh 10,250</p>
          <p>KSh 10,250</p>
        </div>
        <div className="text-red-700">
            <p>  </p>
            <FiTrash2/>
            </div>
      </div>

      <div className="border-2 border-grey mx-auto w-[30%] h-[200] rounded-md bg-slate-200">
        <h2 className="text-2xl font-bold">Cart Summary</h2>
        <p>Have a promo code? Apply here</p>
        <input
          className=" outline-none  text-lg border-2 border-grey py-4 px-2 mx-5 rounded-md"
          type="text"
          placeholder="Promo Code(optional)"
        />
        <button className="text-lg text-white font-bold bg-teal-500 py-4 px-2 rounded-md w-40">
          Apply
        </button>
        <div className="flex gap-10">
          <p>Subtotal</p>
          <p>KSh 16,000</p>
        </div>

        <div className="flex gap-10">
          <p>Delivery Fee</p>
          <p>KSh 450</p>
        </div>
        <div className="flex gap-10 border-t-2">
          <p>Total</p>
          <p>KSh 16,450</p>
        </div>
        <button className="bg-teal-500 text-lg py-4 px-2 text-white font-bold w-40 rounded-md">Checkout</button>
      </div>
    </div>
  );
}
export default Carts;
