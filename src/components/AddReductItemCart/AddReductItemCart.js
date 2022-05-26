import "./AddReductItemCart.css";
import CartItemAdd from "../Cart/icons/add-to-basket-3042.png";
import CartItemReduct from "../Cart/icons/shopping-cart-3043.png";
import { useContext } from "react";
import MyContext from "../../MyContext";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function AddReductItemCart({ id, marginRight, numItems }) {
  /*console.log("header_products:");
    console.log(header_products);
    console.log("header_categories:");
    console.log(header_categories);*/
  const [, , , , AddCartItem, removeCartItem, , ,] = useContext(MyContext);
  //console.log(id);
  //console.log(numItems);
  //let numItems = 0;
  return (
    <ButtonGroup
      size="small"
      variant="outlined"
      aria-label="outlined button group"
    >
      <Button
        onClick={() => {
          {
            removeCartItem(id);
            //       //console.log(numItems);
          }
        }}
      >
        <RemoveIcon fontSize="small" />
      </Button>

      <Button disabled sx={{ p: 0, width: "auto" }}>
        <Typography
          sx={{ color: "#757575", fontSize: 14, fontWeight: "small", m: 0 }}
          variant="caption"
          display="block"
        >
          {numItems}
        </Typography>
      </Button>

      <Button
        onClick={() => {
          AddCartItem(id);
          //       // console.log("AddCartItem");
          //       // console.log(numItems);
          //
        }}
      >
        <AddIcon fontSize="small" />
      </Button>
    </ButtonGroup>
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "row",
    //     width: "fit-content",
    //     marginRight: marginRight,
    //   }}
    // >
    //   <button
    //     onClick={() => {
    //       removeCartItem(id);
    //       //console.log(numItems);
    //     }}
    //   >
    //     <img
    //       alt="Cart Item Reduct"
    //       src={CartItemReduct}
    //       height={20}
    //       width={20}
    //     />
    //   </button>
    //   <h5 style={{ marginRight: "5px", marginLeft: "5px" }}>{numItems}</h5>

    //   <button
    //     onClick={() => {
    //       AddCartItem(id);
    //       // console.log("AddCartItem");
    //       // console.log(numItems);
    //     }}
    //   >
    //     <img alt="Cart Item Add" src={CartItemAdd} height={20} width={20} />
    //   </button>
    // </div>
  );
}
export default AddReductItemCart;
