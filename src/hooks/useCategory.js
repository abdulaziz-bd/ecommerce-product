import { useEffect, useState } from "react";

export const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading({ state: true, message: "Fetching categories..." });
        const response = await fetch(
          import.meta.env.VITE_FAKE_STORE_BASE_URL + "/categories"
        );
        const data = await response.json();
        setLoading({ state: true, message: "Loading categories..." });
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading({ state: false, message: "" });
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
