import { useReducer } from "react";
import { ShopContext } from "../context";
import { initialState, shopReducer } from "../reducers/shopReducer";

// eslint-disable-next-line react/prop-types
function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopProvider;
