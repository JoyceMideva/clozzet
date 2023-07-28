import Nav from "../components/Nav";
import { RiDeleteBin5Line } from "react-icons/ri";
import Footer from "../components/Footer";
import sweater from "../assets/images/knitted-sweater.png";

import { useState, useEffect,useContext } from "react";
import { StateContext } from "../context/state"
import EmptyCart from "../components/EmptyCart";
import { FaCopyright } from "react-icons/fa";
const Carts = () => {
  const [copyCart, setCopyCart] = useState([]);
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    cartData && setCopyCart(JSON.parse(cartData));
  }, []);
  // const cartPrice=localStorage.getItem("cart",JSON.stringify([...cart, productPrice])  )
  function manageCart(action, product) {
    if (action === "add") {
      setCopyCart((prev) => [...prev, product]);
    } else if (action === "remove") {
      const cartCopyArray = [...copyCart];
      const ProductIndex = cartCopyArray.indexOf(product);
      cartCopyArray.splice(ProductIndex, 1);
      setCopyCart(cartCopyArray);
    } else if (action === "delete") {
      alert("delete");
    }
  }

  return (
    <div className="h-[100vh] flex flex-col">
      <Nav className="flex-1" cart={cart} setCart={setCart} />
      {cart.length === 0 ? (
        <EmptyCart className="flex-1" />
      ) : (
        <div className="container mx-auto  w-[100%]  my-12 flex gap-5">
          <div className="  border-2 shadow w-[70%] ">
            <div className="flex justify-evenly  text-2xl font-bold border-b-2  border-gray-300 p-[1.5em]">
              <h3>Product</h3>
              <h3>Quantity</h3>
              <h3>Price</h3>
            </div>
            {cart.map((item) => {
              return (
                <div className=" m-[2em] px-20 w-[100%] flex border-b-2 border-gray-200 py-4  justify-between items-center">
                  <div className="flex justify-start w-[30%] gap-2">
                    <div>
                      <img
                        src={`/src/assets/images/${item.img}`}
                        alt=""
                        className="w-[200px]"
                      />
                    </div>
                    <div className="">
                      <h4 className="font-bold text-2xl">{item.productName}</h4>
                      <p className=" text-3xl">Size: XL</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center border-2 border-gray-300 w-[30%]">
                    <button
                      onClick={() => manageCart("remove", item)}
                      disabled={
                        copyCart.filter(
                          (cartItem) =>
                            cartItem.productName === item.productName
                        ).length === 1
                          ? true
                          : false
                      }
                      className=" flex-1 "
                    >
                      <p className="text-3xl font-bold p-5  border-gray-300 text-center">
                        -
                      </p>
                    </button>
                    <div className="flex-1">
                      <p className="text-3xl font-bold  border-gray-300 p-5 border-x-2 text-center">
                        {
                          copyCart.filter(
                            (cartItem) =>
                              cartItem.productName === item.productName
                          ).length
                        }
                      </p>
                    </div>
                    <button
                      onClick={() => manageCart("add", item)}
                      className="flex-1"
                    >
                      <p className="text-3xl font-bold  border-gray-300 p-5 text-center">
                        +
                      </p>
                    </button>
                  </div>
                  <div className="w-[30%]">
                    <p className="font-bold text-3xl text-center">
                      {`Ksh. ${copyCart
                        .filter(
                          (element) => element.productName === item.productName
                        )
                        .reduce((acc, curr) => acc + curr.productPrice, 0).toLocaleString()}`}
                    </p>
                  </div>
                  <div className="group">
                    <p
                      onClick={() => manageCart("delete")}
                      className="invisible group-hover:visible font-bold text-red-500 cursor-pointer"
                    >
                      <RiDeleteBin5Line size={40} />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" h-[fit-content] mt-10 bg-gray-200 ">
            <div className="text-center text-3xl">
              <h4 className="font-bold mt-[1.5em]">Cart Summary</h4>
              <p className="mt-[1.5em]">Have a promo code? Apply here</p>
            </div>
            <div>
              <div className="flex justify-center items-center m-5">
                <div className="m-5">
                  <input
                    className=" py-4 px-[.5em]  border-2 text-2xl bg-white outline-0  "
                    type="text"
                    placeholder="Promo Code(optional)"
                  />
                </div>
                <div>
                  <button className="py-4 px-[2em] text-2xl  text-white bg-[#45C9A1]  font-bold">
                    Apply
                  </button>
                </div>
              </div>
              <div className="m-[1em] text-3xl">
                <div className=" flex justify-between  ">
                  <h4>Subtotal</h4>
                  <p>{`Ksh. ${copyCart
                        .reduce((acc, curr) => acc + curr.productPrice, 0).toLocaleString()}`}</p>
                </div>
                <div className=" flex justify-between ">
                  <h4>Delivery Fee</h4>
                  <p>ksh 450</p>
                </div>
                <div className=" flex justify-between border-b-2">
                  <h4>Total</h4>
                  <p className="">{`Ksh. ${copyCart
                        .reduce((acc, curr) => acc + curr.productPrice, 0+450).toLocaleString()}`}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button className=" py-4 px-[3em]  border-2 m-5 text-2xl bg-[#45C9A1] items-center ">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer className="flex-1" />
    </div>
  );
};
export default Carts;
