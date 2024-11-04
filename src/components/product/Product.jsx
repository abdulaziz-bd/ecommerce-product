import ProductHeadline from "./ProductHeadline";
import ProductList from "./ProductList";
import ProductToolbar from "./ProductToolbar";

export default function Product() {
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <ProductHeadline />

        <ProductToolbar />
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
