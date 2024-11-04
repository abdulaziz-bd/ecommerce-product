import ProductCart from "./ProductCart";
import ProductFilter from "./ProductFilter";
import ProductSearch from "./ProductSearch";
import ProductSort from "./ProductSort";

export default function ProductToolbar() {
  return <div className="mt-10">
  <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
    {/* <!-- Sort & Filter--> */}
    <div className="w-full">
      {/* <!-- Sort --> */}
      <ProductSort />

      {/* <!-- Filter --> */}
      <ProductFilter />
    </div>

    {/* <!-- Search and Cart --> */}
    <div className="flex gap-2 items-center">
      <ProductSearch />

      <ProductCart />
    </div>
  </div>
</div>;
}
