import { useContext } from "react";
import { ProductContext, ShopContext } from "../../context";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

export default function ProductList() {
  const { state } = useContext(ShopContext);
  const { products, loading, error } = useContext(ProductContext);

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {loading.state ? (
        // Skeleton loading state
        Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="opacity-0 animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <ProductSkeleton />
          </div>
        ))
      ) : searchedProducts.length > 0 ? (
        // Products grid
        searchedProducts.map((product, index) => (
          <div
            key={product.id}
            className="opacity-0 animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        // No results found
        <div className="col-span-full text-center py-10 text-gray-500 animate-fade-in">
          No products found for &quot;{state.searchTerm}&quot;
        </div>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
}
