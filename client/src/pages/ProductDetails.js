import { useContext } from "react";
import { useParams } from "react-router-dom";
import AddReductItemCart from "../components/AddReductItemCart//AddReductItemCart";
import MyContext from "../MyContext";

function ProductDetails() {
  const [productsArr, , , , , , , , , , ,] = useContext(MyContext);
  const { _id } = useParams();
  let product;
  productsArr
    .filter((item) => item._id === _id)
    .map((myProduct) => (product = myProduct));
  // console.log("_id", _id);
  // console.log("product", product);
  // console.log("productsArr", productsArr);

  return (
    <div title={product?.title} className="Product-card">
      <h1>Product Details</h1>
      <br />
      <br />
      <h3>ID Number: {_id}</h3>
      <div className="Product-image">
        <img
          alt="Shop Item"
          src={product?.image}
          style={{
            width: "500px",
            height: "500px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        />
      </div>
      <div className="Product-info">
        <h5>{"title: " + product?.title}</h5>
        <h5>{"description: " + product?.description}</h5>
        <h5>{"category: " + product?.category}</h5>
        <h5>
          {"rating: " +
            "rate: " +
            product?.rating?.rate +
            " count: " +
            product?.rating?.count}
        </h5>
        <h6 style={{ marginBottom: "5px" }}>${product?.price}</h6>
        <div style={{ display: "inline-block" }}>
          <AddReductItemCart _id={_id} quantity={product?.quantity} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
