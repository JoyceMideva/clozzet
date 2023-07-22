function addToCart(e, product, cart, setCart) {
  if (e.target.textContent.toLowerCase() === "add to cart") {
    setCart((prev) => [...prev, product]);
    e.target.textContent = "Added to cart";
  }
  localStorage.setItem("cart", JSON.stringify([...cart, product]));
}

function addToCartText(cart, item) {
  return cart.some((cartItem) => cartItem.productName === item.productName)
    ? "Added to cart"
    : "Add to cart";
}
export { addToCart, addToCartText };
