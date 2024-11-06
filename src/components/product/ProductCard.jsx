import { useContext } from "react";
import { toast } from "react-toastify";
import { CartSVG, HoverCartSVG } from "../../assets/svg/SVG";
import { ShopContext } from "../../context";

/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  const { state, dispatch } = useContext(ShopContext);

  const found = state.cart.find((item) => item.id === product.id);

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id: product.id, title: product.title },
    });
    toast.success(`Item added to Cart! View Cart please!`, {
      position: "bottom-right",
    });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    toast.error(`Opps! Item deleted from Cart!`, {
      position: "bottom-right",
    });
  };

  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      {/* <!-- Button --> */}
      <div
        className={`cursor-pointer rounded-md ${
          found
            ? "bg-red-500 text-white  hover:bg-red-700"
            : "bg-white text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900"
        } text-[0.8125rem] font-medium leading-5 items-center text-center mb-3 mx-3 flex-1`}
      >
        <button
          className="flex w-full items-center justify-center px-3 py-2"
          onClick={() => {
            if (found) {
              handleRemoveFromCart(product.id);
            } else {
              handleAddToCart(product);
            }
          }}
        >
          {found ? <HoverCartSVG /> : <CartSVG />}
          {found ? "Remove from cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
