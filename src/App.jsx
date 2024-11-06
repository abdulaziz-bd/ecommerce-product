import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Page from "./Page";
import { CategoryProvider, ProductProvider, ShopProvider } from "./provider";

function App() {
  return (
    <ShopProvider>
      <ProductProvider>
        <CategoryProvider>
          <Page />
          <ToastContainer />
        </CategoryProvider>
      </ProductProvider>
    </ShopProvider>
  );
}

export default App;
