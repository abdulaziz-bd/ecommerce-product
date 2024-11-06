import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context";

export const useProduct = () => {
  const { state } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading({ state: true, message: "Fetching products..." });
        let url = import.meta.env.VITE_FAKE_STORE_BASE_URL;

        if (state.filter !== "") {
          url += `/category/${state.filter}`;
        }

        if (state.sort !== "") {
          url += `?sort=${state.sort}`;
        }

        const response = await fetch(url);

        const data = await response.json();
        setLoading({ state: true, message: "Loading products..." });
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading({ state: false, message: "" });
      }
    };

    fetchProducts();
  }, [state.filter, state.sort]);

  return { products, loading, error };
};
