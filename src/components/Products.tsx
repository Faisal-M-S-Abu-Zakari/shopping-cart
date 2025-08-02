import type { Product } from "../types/product";
import star from "../assets/icons/star.png";
const Products = ({ products }: { products: Product[] }) => {
  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>
            Price:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
          <p>
            InstedOf:{" "}
            <span style={{ color: "red", textDecoration: "line-through" }}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.instatedOf)}
            </span>
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            Rating:
            {/* i will create array of length product.rating and map through it */}
            {Array.from({ length: product.rating }).map((_, index) => (
              <img key={index} src={star} alt="rating" width={20} height={20} />
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Products;
