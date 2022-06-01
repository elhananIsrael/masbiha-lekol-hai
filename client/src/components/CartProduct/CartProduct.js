import "./CartProduct.css";
import AddReductItemCart from "../AddReductItemCart/AddReductItemCart";

function CartProduct({ _id, title, src, cartItem_info, price, quantity }) {
  /*console.log("header_products:");
    console.log(header_products);
    console.log("header_categories:");
    console.log(header_categories);*/
  //let quantity = 0;
  console.log(quantity);
  return (
    <div title={title} className="CartProduct-card">
      <div className="CartProduct-image">
        <img alt="Cart Item" src={src} />
      </div>
      <div className="CartProduct-info">
        <h5 style={{ lineHeight: "100%" }}>{cartItem_info}</h5>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h5 style={{ marginLeft: "auto" }}>${price}</h5>
          {/* <br style={{ marginBottom: "5px" }} /> */}

          <AddReductItemCart _id={_id} marginRight="auto" quantity={quantity} />
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
