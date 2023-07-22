import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SinglePage from "../pages/SinglePage";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import About from "../pages/About"
import Form from "../pages/Form";
function Router({cart, setCart}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home cart={cart} setCart={setCart}/>}/>
        <Route path="/aboutus" element={<About cart={cart} setCart={setCart}/>}/>
        <Route path="/shop"  element={<Shop cart={cart} setCart={setCart} />}/>
        <Route path="/cart"  element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path="/product/:productId" element={<SinglePage/>}/>
        <Route path="*" element={<NotFound/>} cart={cart} setCart={setCart}/>
        <Route path="/signup" element={<SignUp cart={cart} setCart={setCart}/>}/>
        <Route path="/login" element={<Login cart={cart} setCart={setCart}/>}/>
        <Route path="/form" element={<Form cart={cart} setCart={setCart}/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default Router ;
