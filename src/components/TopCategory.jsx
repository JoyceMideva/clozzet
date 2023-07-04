import jackets from "../assets/images/jacket.png"
function TopCategory(props) {
    return(
        <div className=" text-center  w-40 h-40">
            <div className=" rounded-[50%] py-4 px-5 border-5 bg-gray-200">
                <img className="h-[100%]"  width={500} src={props.icon} alt="" />
            </div>
            <h4 className="">{props.category}</h4>
        </div>

    )
}
export default TopCategory