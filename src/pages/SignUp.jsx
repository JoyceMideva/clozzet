import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sign from "../components/Sign";

function SignUp(cart,setCart) {
    return(
        <div>
            <Nav cart={cart} setCart={setCart}/>
            <Sign/>
            <Footer/>
        </div>
    )
}
export default SignUp