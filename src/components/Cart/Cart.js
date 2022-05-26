import "./Cart.css";
import CartProduct from "../CartProduct/CartProduct";
import MyContext from "../../MyContext";
import { useContext } from "react";

function Cart({ wid }) {
  /*console.log("header_products:");
  console.log(header_products);
  console.log("header_categories:");
  console.log(header_categories);*/
  const [cartArr, , , , , , ,] = useContext(MyContext);
  console.log("CART: cart arr:");
  console.log(cartArr);
  return (
    <div className="Cart" style={{ width: wid }}>
      <div>
        <p style={{ textAlign: "center", color: "green", marginBottom: "5px" }}>
          MY CART
        </p>
      </div>
      {cartArr.length > 0 &&
        cartArr.map((cartItem) => (
          <CartProduct
            key={cartItem.id}
            id={cartItem.id}
            title={cartItem.description}
            src={cartItem.image}
            cartItem_info={cartItem.title}
            price={cartItem.price}
            numItems={cartItem.numItems}
          />
        ))}
    </div>
  );
}

export default Cart;
