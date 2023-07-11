import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SinglePage from "../pages/SinglePage";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/shop"  element={<Shop/>}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/product/:productId"  element={<SinglePage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default Router ;
