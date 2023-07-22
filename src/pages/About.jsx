import Nav from "../components/Nav" 
import Footer from "../components/Footer"
import Aboutus from "../components/Aboutus"
function About(cart,setCart){
    return(
        <div>
<Nav cart={cart} setCart={setCart}/>
<Aboutus cart={cart} setCart={setCart}/>
<Footer/>
        </div>
    )
}
export default About