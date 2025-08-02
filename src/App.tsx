import "./App.css";
import { useEffect, useState } from "react";
import type { Product } from "./types/product";
import Products from "./components/Products";

// create dummy data for products
const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Product 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJG6WgHA6RhpG42QC80K6I6kifKejhwF3H15K-LMeq3viktcI9Z-AbdfFw69ep5MuE7c&usqp=CAU",
    rating: 4.5,
    price: 100,
    instatedOf: 150,
    description: "This is the first product",
  },
  {
    id: 2,
    title: "Product 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJG6WgHA6RhpG42QC80K6I6kifKejhwF3H15K-LMeq3viktcI9Z-AbdfFw69ep5MuE7c&usqp=CAU",
    rating: 2,
    price: 80,
    instatedOf: 100,
    description: "This is the second product",
  },
  {
    id: 3,
    title: "Product 3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJG6WgHA6RhpG42QC80K6I6kifKejhwF3H15K-LMeq3viktcI9Z-AbdfFw69ep5MuE7c&usqp=CAU",
    rating: 3,
    price: 120,
    instatedOf: 180,
    description: "This is the third product",
  },
  {
    id: 4,
    title: "Product 4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJG6WgHA6RhpG42QC80K6I6kifKejhwF3H15K-LMeq3viktcI9Z-AbdfFw69ep5MuE7c&usqp=CAU",
    rating: 4,
    price: 150,
    instatedOf: 200,
    description: "This is the fourth product",
  },
];
function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // fetch data
  useEffect(() => {
    setLoading(true);
    //call api
    setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {/* <Products products={products} /> */}
      {loading && <p>Loading...</p>}
      {!loading && products && <Products products={products} />}
    </>
  );
}

export default App;
