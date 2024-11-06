import { useContext } from "react";
import { toast } from "react-toastify";
import { DeleteSVG } from "../../assets/svg/SVG";
import { ShopContext } from "../../context";

// eslint-disable-next-line react/prop-types
export default function CartModal({ onRef }) {
  const { state, dispatch } = useContext(ShopContext);

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    toast.error(`Opps! Item deleted from Cart!`, {
      position: "bottom-right",
    });
  };

  const handleIncrease = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: { id } });
    toast.success(`Item quantity increased in Cart!`, {
      position: "bottom-right",
    });
  };

  const handleDecrease = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: { id } });
    const count = state.cart.find((item) => item.id === id).quantity;
    if (count === 1) {
      toast.error(`Opps! Item quantity cannot be less than 1!`, {
        position: "bottom-right",
      });
    } else {
      toast.success(`Item quantity decreased in Cart!`, {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <div
        className="absolute z-10 mt-2 w-56 top-10 right-0 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="cart-button"
        tabIndex="-1"
        id="cart-dropdown"
        ref={onRef}
      >
        <div className="py-1" role="none">
          {state.cart.length > 0 ? (
            state.cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.title}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="px-2 text-2xl"
                      onClick={() => handleDecrease(item.id)}
                    >
                      -
                    </button>

                    <p className="text-sm font-medium text-gray-900">
                      {item.quantity}
                    </p>
                    <button
                      className="px-2 text-2xl"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>

                    <button
                      type="button"
                      className="flex-shrink-0 text-gray-400 hover:text-gray-500"
                      onClick={() => {
                        handleRemoveFromCart(item.id);
                      }}
                    >
                      <DeleteSVG />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <p className="font-medium">No items in cart</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
