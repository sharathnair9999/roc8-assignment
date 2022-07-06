import { useState } from "react";
import { FilterSection, Navbar, ProductsListing } from "./components";
import { useProducts } from "./contexts";

function App() {
  const {
    productState: { products },
  } = useProducts();
  return (
    <>
      <Navbar />
      <div className="main-container flex justify-start items-start gap-2 mt-14 px-2  bg-slate-100 min-h-[calc(100vh-3.5rem)]">
        <FilterSection />
        <ProductsListing products={products} />
      </div>
    </>
  );
}

export default App;
