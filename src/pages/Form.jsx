import Footer from "../components/Footer";
import Forms from "../components/Forms";
import Nav from "../components/Nav";

function Form(cart, setCart){
    return(
        <div>
            <Nav cart={cart} setCart={setCart}/>
            <Forms/>
            <Footer/>
        </div>
    )
}
export default Form