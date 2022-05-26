import React, { useContext } from "react";
import Product from "../Product/Product";
import "./Products.css";
import MyContext from "../../MyContext";

function Products({ products_products }) {
  // console.log("products_products:");
  // console.log(products_products);

  const [cartArr, , , , , , ,] = useContext(MyContext);

  const cartProductNumItems = (id) => {
    let numItems = 0;
    if (cartArr.length > 0) {
      let cartProduct = null;
      cartArr
        .filter((product) => product.id === id)
        .map((item) => {
          cartProduct = item;
          return true;
        });
      if (cartProduct !== null) {
        numItems = cartProduct.numItems;
        //console.log(cartProduct);
      }
    }
    if (numItems > 0) console.log(numItems);
    return numItems;
  };

  return (
    <section title="Products" className="Products">
      {products_products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.description}
          src={product.image}
          product_info={product.title}
          price={product.price}
          numItems={cartProductNumItems(product.id)}
        />
      ))}
    </section>
  );
}

export default Products;
