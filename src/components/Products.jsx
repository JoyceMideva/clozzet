import { PiMagnifyingGlassBold } from "react-icons/pi";
function Products() {
  return (
    <div className="container justify-between items-center flex mx-auto my-11 border-2 rounded-full border-teal-500 ">
      <div className="gap-7  flex items-center justify-evenly mx-4  w-[90%]  py-8 px-12">
        <PiMagnifyingGlassBold size={40} />
        <div>

        <input
          className=" outline-none text-5xl border-r-4  mx-4"
          type="text"
          placeholder="Search Products and categories"
        />
        </div>
        <select name="" id="">
          <option value="">Filter category</option>
        </select>
      </div>
    </div>
  );
}
export default Products;
