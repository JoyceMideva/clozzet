import { products } from "../data";
import { AiOutlineHeart } from "react-icons/ai";
function FeaturedProducts() {
  return (
    <div className="container mx-auto grid grid-rows-5 grid-cols-4 my-20  gap-10">
      {products.map((item) => {
        if (item.Featured) {
          return (
            <div>
              <div className="h-[300px] w-[300px] bg-gray-200 relative group">
                <img
                  className="object-contain h-[100%] w-[100%] "
                  src={`/src/assets/images/${item.Img}`}
                />
                <button className=" invisible group-hover:visible bg-teal-500 py-4 px-12  w-[100%]  rounded-md absolute bottom-0 left-0 text-[#fff]">
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
    </div>
  );
}
export default FeaturedProducts;
