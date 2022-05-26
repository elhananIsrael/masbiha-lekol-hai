import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReductItemCart from "../components/AddReductItemCart//AddReductItemCart";
import MyContext from "../MyContext";

function ProductDetails() {
  const [cartArr, , , , , , ,] = useContext(MyContext);
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: "",
  });

  const cartProductNumItems = (myId) => {
    let numItems = 0;
    if (cartArr.length > 0) {
      let cartProduct = null;
      cartArr
        .filter((item) => item.id === myId)
        .map((myProduct) => {
          cartProduct = myProduct;
          return true;
        });
      if (cartProduct !== null) {
        numItems = cartProduct.numItems;
      }
    }
    // if (numItems > 0) console.log(numItems);
    return numItems;
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((productInfo) => {
        setProduct({
          id: productInfo?.id,
          title: productInfo?.title,
          price: productInfo?.price,
          description: productInfo?.description,
          category: productInfo?.category,
          image: productInfo?.image,
          rating: productInfo?.rating,
        });
      });
  }, []);
  return (
    <div title={product?.title} className="Product-card">
      <h1>Product Details</h1>
      <br />
      <br />
      <h3>ID Number: {id}</h3>
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
          <AddReductItemCart
            id={parseInt(id)}
            numItems={cartProductNumItems(parseInt(id))}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
