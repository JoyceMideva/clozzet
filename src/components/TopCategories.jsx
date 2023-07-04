import TopCategory from "./TopCategory"
import jackets from "../assets/images/jacket.png"
import handbags from "../assets/images/handbag.png"
import shirts from "../assets/images/tshirt.png"
import dresses from "../assets/images/dress.png"
import jeans from "../assets/images/jeans.png"
import shoes from "../assets/images/shoe.png"
import jacket from "../assets/images/sweater.png"
function TopCategories() {
    return(
        <div className="container mx-auto my-20">
<h2 className="text-center font-bold">Top Categories</h2>
<div className="flex gap-12">
<TopCategory icon={jackets} category="Jacket"/>
<TopCategory icon={handbags} category="handbags"/>
<TopCategory icon={shirts} category="Tshirts"/>
<TopCategory icon={dresses} category="Dresses"/>
<TopCategory icon={jeans} category="Jeans"/>
<TopCategory icon={shoes} category="Shoes"/>
<TopCategory icon={jacket} category="Sweater"/>
</div>

        </div>
    )
}
export default TopCategories