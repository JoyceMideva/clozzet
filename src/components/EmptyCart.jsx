// import {HiEmojiSad} from "react-icons/hi"
import { Link } from "react-router-dom"
function EmptyCart() {
    return(
        <div className="flex-1">
            <h4 className="text-center font-extrabold text-5xl"> The Cart is empty</h4>
            <p className="text-7xl text-center py-4"> 😭 👎 👎😭</p>
           <Link to="/shop"> <button className=" text-white py-4 px-[3em] block rounded-md mx-auto border-2 m-5 text-2xl bg-[#45C9A1] items-center ">Shop Now</button></Link>
        </div>
    )
}
export default EmptyCart