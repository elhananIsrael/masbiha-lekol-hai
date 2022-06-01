import "./Cart.css";
import CartProduct from "../CartProduct/CartProduct";
import MyContext from "../../MyContext";
import { useContext } from "react";

function Cart({ wid }) {
  /*console.log("header_products:");
  console.log(header_products);
  console.log("header_categories:");
  console.log(header_categories);*/
  const [productsArr, , cartLength, , , , , , , , , , , ,] =
    useContext(MyContext);
  return (
    <div className="Cart" style={{ width: wid }}>
      <div>
        <p style={{ textAlign: "center", color: "green", marginBottom: "5px" }}>
          MY CART
        </p>
      </div>
      {cartLength > 0 &&
        productsArr
          .filter((product) => product.quantity > 0)
          .map((cartItem) => (
            <CartProduct
              key={cartItem._id}
              _id={cartItem._id}
              title={cartItem.description}
              src={cartItem.image}
              cartItem_info={cartItem.title}
              price={cartItem.price}
              quantity={cartItem.quantity}
            />
          ))}
    </div>
  );
}

export default Cart;
