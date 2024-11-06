import { useContext, useEffect, useRef, useState } from "react";
import { CartSVG } from "../../assets/svg/SVG";
import { ShopContext } from "../../context";
import CartModal from "./CartModal";

export default function ProductCart() {
  const { state } = useContext(ShopContext);
  const [showCart, setShowCart] = useState(false);
  const cartDropDownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        cartDropDownRef.current &&
        !cartDropDownRef.current.contains(event.target)
      ) {
        setShowCart(false);
      }
    }

    // Add event listener when dropdown is open
    if (showCart) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart]);

  return (
    <div className="flow-root relative inline-block text-left">
      <button
        className="group -m-2 flex items-center p-2"
        aria-expanded={showCart}
        aria-haspopup="true"
        onClick={() => setShowCart(!showCart)}
      >
        <CartSVG />
        <span className="ml-2 mt-1 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {state.cart.reduce((acc, cur) => acc + cur.quantity, 0)}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </button>
      {showCart && <CartModal onRef={cartDropDownRef} />}
    </div>
  );
}
