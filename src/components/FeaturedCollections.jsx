
 import FeaturedCollection from "./FeaturedCollection"

function FeaturedCollections({cart,setCart}){
    return(
        <div className=" text-xl text-center container mx-auto">
            <h1>Featured Collection</h1>
            <div>
<FeaturedCollection cart={cart} setCart={setCart}/>
            </div>
        </div>
    )
}
export default FeaturedCollections