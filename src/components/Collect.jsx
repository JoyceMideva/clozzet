import men from "../assets/images/mens.png";
import { FaPlay } from "react-icons/fa";
function Collect({collection,icon  }) {
  return (
    <div className="m-3">
      <div className="flex justify-center items-end">
        <div>
          <p className="text-lg text-gray-400">Casual Collection</p>
          <h3 className=" text-xl font-bold">{collection}</h3>
          <div>
            <h4 className="">Shop Now</h4>
            <FaPlay />
          </div>
        </div>
        <div className="h-[100%] object-cover">
          <img width={200} src={icon} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Collect;
