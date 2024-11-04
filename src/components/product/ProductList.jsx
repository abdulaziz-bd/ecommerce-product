import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

export default function ProductList() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <ProductCard key={1} />
      <ProductCard key={2} />
      <ProductCard key={3} />
      <ProductCard key={4} />

      <ProductSkeleton key={5} />
      <ProductSkeleton key={6} />
    </div>
  );
}
