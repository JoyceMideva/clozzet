import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Logins from "../components/Logins"
function Login(cart,setCart) {
    return(
        <div>
<Nav cart={cart} setCart={setCart}/>
<Logins/>
<Footer/>
        </div>
    )
}
export default Login