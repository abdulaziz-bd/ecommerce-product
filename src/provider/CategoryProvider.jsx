import { CategoryContext } from "../context";
import { useCategory } from "../hooks/useCategory";

// eslint-disable-next-line react/prop-types
const CategoryProvider = ({ children }) => {
  const { categories, loading, error } = useCategory();

  return (
    <CategoryContext.Provider value={{ categories, loading, error }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
