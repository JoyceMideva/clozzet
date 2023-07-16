import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SinglePage from "../pages/SinglePage";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import About from "../pages/About"
function Router({cart, setCart}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home cart={cart} setCart={setCart}/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/shop"  element={<Shop/>}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/product/:productId" element={<SinglePage/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default Router ;
