import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SinglePage from "./pages/SinglePage";
import { useState } from "react";
import Router from "./components/Router";
import StateProvider from "./context/state";
export default function App() {
  return (
    <StateProvider>
      <Router/>
    </StateProvider>
  )
}
