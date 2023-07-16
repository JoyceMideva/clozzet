 import Nav from "../components/Nav"
 import Products from "../components/Products"
import Footer from "../components/Footer"
import FeaturedProducts from "../components/FeaturedProducts"
import FeaturedProduct from "../components/FeaturedProduct"
 function Shop(cart,setCart) {
    return(
        <div>
<Nav cart={cart} setCart={setCart}/>
<Products/>
<FeaturedProducts/>
<FeaturedProduct/>
<Footer/>
        </div>
    )
}
export default Shop