import men from "../assets/images/mens.png";
import watches from "../assets/images/watches.png";
import hbags from "../assets/images/hbags.png";
import ladies from "../assets/images/ladies.png";
import Collect from "./Collect";
import {BiSolidRightArrow} from "react-icons/bi"
function Collection() {
  return (
    <div className="container mx-auto gap-3 grid grid-cols-2 grid-rows-3  ">
      <div className="bg-[#F0EFEF] row-span-2 ">
       
        <Collect
          icon={men}
          category="casual collection"
          collection="mens'collection"
          shop="shop now"
          
        />
      </div>
      <div className="bg-[#E3F9FB] ">
        <Collect
          icon={watches}
          category="casual collection"
          collection="Luxury Watches"
          shop="shop now"
          
        />
      </div>
      <div className="bg-[#FEDBDB] row-span-2 ">
        <Collect
          icon={ladies}
          category="casual collection"
          collection="Ladies Collection"
          shop="shop now"
        
        />
      </div>
      <div className="bg-[#FFF1F1] ">
        <Collect
          icon={hbags}
          category="casual collection"
          collection="Handbags"
          shop="shop now"
          
        />
      </div>
    </div>
  );
}
export default Collection;
