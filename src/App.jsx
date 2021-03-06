import { FilterSection, Navbar, ProductsListing } from "./components";
import { useProducts } from "./contexts";

function App() {
  const {
    productState: { products },
  } = useProducts();
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start gap-2 mt-14 px-2  bg-slate-100 min-h-[calc(100vh-4rem)]">
        <FilterSection />
        <ProductsListing products={products} />
      </div>
    </>
  );
}

export default App;
