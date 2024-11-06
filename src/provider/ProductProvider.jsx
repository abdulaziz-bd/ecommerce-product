import { ProductContext } from "../context";
import { useProduct } from "../hooks/useProduct";

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const { products, loading, error } = useProduct();

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
