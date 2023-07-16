import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SinglePage from "./pages/SinglePage";
import { useState } from "react";
import Router from "./components/Router";
export default function App() {
  const [cart, setCart] = useState([]);
  return <Router cart={cart} setCart={setCart} />;
}
