import { Link } from "react-router-dom";
import AddReductItemCart from "../AddReductItemCart/AddReductItemCart";
import "./Product.css";

function Product({ id, title, src, product_info, price, numItems }) {
  return (
    <div title={title} className="Product-card">
      <div className="Product-image">
        <img alt="Shop Item" src={src} />
      </div>
      <div className="Product-info">
        <Link
          to={`/products/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5>{product_info}</h5>
        </Link>
        <h6 style={{ marginBottom: "5px" }}>${price}</h6>
        <div style={{ display: "inline-block" }}>
          <AddReductItemCart id={id} numItems={numItems} />
        </div>
      </div>
    </div>
  );
}

export default Product;
