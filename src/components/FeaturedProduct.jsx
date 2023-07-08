import FeaturedProducts from "./FeaturedProducts"
import {SlArrowLeft} from "react-icons/sl"
import {SlArrowRight} from "react-icons/sl"
function FeaturedProduct(){
    return(
        <div className=" flex items-center justify-center gap-11 my-7">
            <div className="rounded-[50%] border-2  border-gray mx-5 py-2 px-2"><SlArrowLeft size={30} className="cursor-pointer" /></div>
            <div className="rounded-[50%] border-2  border-gray  py-2 px-2">1</div>
            <div className="rounded-[50%] border-2  border-gray  py-2 px-2">2</div>
            <div className="rounded-[50%] border-2  border-gray  py-2 px-2">3</div>
            <div className="rounded-[50%] border-2  border-gray  py-2 px-2">4</div>
            <div className="rounded-[50%] border-2  border-gray  py-2 px-2">5</div>
            <div className="rounded-[50%] border-2  border-grey  py-2 px-2"><SlArrowRight size={30} className="cursor-pointer" /></div>
        </div>
    )
}
export default FeaturedProduct