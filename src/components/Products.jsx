import { PiMagnifyingGlassBold } from "react-icons/pi";
function Products() {
  return (
    <div className="container justify-between items-center flex mx-auto my-11 border-2 rounded-full border-teal-500 ">
      <div className=" border-r-4 gap-7  flex items-center w-[90%]  py-8 px-12">

        <PiMagnifyingGlassBold size={40} />
        <input className=" outline-none text-5xl" type="text" placeholder="Search Products and categories" />

        <div>
          <select name="" id="">
            Filter Category
          </select>
        </div>
      </div>
    </div>
  );
}
export default Products;
