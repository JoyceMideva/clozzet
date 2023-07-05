import men from "../assets/images/mens.png";
import watches from "../assets/images/watches.png";
import hbags from "../assets/images/hbags.png";
import ladies from "../assets/images/ladies.png";
import Collect from "./Collect";

function Collection() {
  return (
    <div className="container py-10  mx-auto gap-3 grid grid-cols-2 grid-rows[200px_200px_200px m-10]  ">
      <div className="bg-[#F0EFEF] row-span-2 ">
        <Collect icon={men} collection="men's collection" />
      </div>
      <div className="bg-[#E3F9FB] ">
        <Collect icon={watches} collection="Luxury Watches" />
      </div>
      <div className="bg-[#FEDBDB] row-span-2 ">
        <Collect icon={ladies} collection="Ladies Collection" />
      </div>
      <div className="bg-[#FFF1F1] ">
        <Collect icon={hbags} collection="Handbags" />
      </div>
    </div>
  );
}
export default Collection;
