import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, ListItemAvatar, Typography } from "@mui/material";
// import { Avatar, Badge, ListItemAvatar, Typography } from "@mui/material";

import MyContext from "../MyContext";
// import CartProduct from "./CartProduct/CartProduct";
import AddReductItemCart from "./AddReductItemCart/AddReductItemCart";
import { useContext, useState } from "react";

const MyCartDrawer = () => {
  const [cartArr, , , , , , ,] = useContext(MyContext);
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      //   onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        sx={{ width: "100%", maxWidth: "360", bgcolor: "background.paper" }}
      >
        {cartArr.length > 0 &&
          cartArr.map((cartItem) => (
            <ListItem alignItems="flex-start" key={cartItem.id}>
              <ListItemAvatar>
                {/* <Avatar
                  alt="Remy Sharp"
                  src={cartItem.image}
                  variant="rounded"
                  sx={{ width: "50px", height: "50px" }}
                /> */}
                {/* <div> */}
                <img
                  alt="Cart Item"
                  src={cartItem.image}
                  // style={{ width: "40px", paddingRight: "20px" }}
                  style={{
                    // paddingLeft: "5px",
                    paddingRight: "5px",
                    width: "50px",
                    height: "50px",
                  }}
                />
                {/* </div> */}
              </ListItemAvatar>
              <div style={{ flexDirection: "column" }}>
                <ListItemText
                  primary={cartItem.title}
                  // secondary={

                  // }
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ display: "inline", alignSelf: "left" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    ${cartItem.price}
                  </Typography>
                  <br style={{ marginBottom: "5px" }} />
                  <AddReductItemCart
                    id={cartItem.id}
                    //   marginRight="auto"
                    numItems={cartItem.numItems}
                  />
                </Box>
              </div>
            </ListItem>
            //   <Divider variant="inset" component="li" />

            //   <CartProduct
            //     key={cartItem.id}
            //     id={cartItem.id}
            //     title={cartItem.description}
            //     src={cartItem.image}
            //     cartItem_info={cartItem.title}
            //     price={cartItem.price}
            //     numItems={cartItem.numItems}
            //   />
          ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 0 }}>
      {/* <MenuItem> */}
      <Button
        fontSize="inherit"
        size="large"
        aria-label="show My Cart"
        color="inherit"
        onClick={toggleDrawer(true)}
      >
        <p>MY CART</p>
        {cartArr.length > 0 ? (
          <>
            <Badge badgeContent={cartArr.length} color="error">
              <ShoppingCartIcon />
            </Badge>
            <br />
            <br />
            <br />
          </>
        ) : (
          <ShoppingCartOutlinedIcon />
        )}
      </Button>
      <Drawer
        //   anchor={}
        open={drawerState}
        onClose={toggleDrawer(false)}
      >
        <div>
          <p
            style={{
              textAlign: "center",
              color: "green",
              marginBottom: "5px",
            }}
          >
            MY CART
          </p>
        </div>
        <Divider />

        {list()}
      </Drawer>
      {/* </MenuItem> */}
    </Box>
  );
};

export default MyCartDrawer;
