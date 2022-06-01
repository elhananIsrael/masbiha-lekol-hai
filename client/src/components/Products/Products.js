import React, { useContext } from "react";
import Product from "../Product/Product";
import "./Products.css";
import MyContext from "../../MyContext";

function Products() {
  const [
    productsArr,
    ,
    ,
    ,
    ,
    ,
    [minPriceLocal, maxPriceLocal],
    filterBy_categories,
    ,
    sortBy,
    ,
  ] = useContext(MyContext);
  // console.log(sortBy);
  const mySort = (str) => {
    if (str === "sortAlphabeticallyAZ") return sortAlphabeticallyAZ;
    if (str === "sortAlphabeticallyZA") return sortAlphabeticallyZA;
    if (str === "sortPriceLowToHigh") return sortPriceLowToHigh;
    if (str === "sortPriceHighToLow") return sortPriceHighToLow;
    if (str === "sortBestSelling") return sortBestSelling;
    if (str === "sortFeatured") return sortFeatured;
    // if (str === "sortDateNnewToOld") return sortDateNnewToOld;
    // if (str === "sortDateOldToNew") return sortDateOldToNew;
  };
  const sortAlphabeticallyAZ = (a, b) => {
    return a.title > b.title ? 1 : -1;
  };
  const sortAlphabeticallyZA = (a, b) => {
    return b.title > a.title ? 1 : -1;
  };
  const sortPriceLowToHigh = (a, b) => {
    return a.price > b.price ? 1 : -1;
  };
  const sortPriceHighToLow = (a, b) => {
    return b.price > a.price ? 1 : -1;
  };
  const sortBestSelling = (a, b) => {
    return b.rating.count > a.rating.count ? 1 : -1;
  };
  const sortFeatured = (a, b) => {
    return b.rating.rate > a.rating.rate ? 1 : -1;
  };
  // const sortDateNnewToOld = (a, b) => {
  //   return a.date > b.date ? 1 : -1;
  // };
  // const sortDateOldToNew = (a, b) => {
  //   return b.date > a.date ? 1 : -1;
  // };

  return (
    <section title="Products" className="Products">
      {productsArr
        .filter(
          (product) =>
            (product.category === filterBy_categories ||
              filterBy_categories === "all") &&
            product.price >= minPriceLocal &&
            product.price <= maxPriceLocal
        )
        .sort(mySort(sortBy))
        .map((product) => (
          <Product
            key={product._id}
            _id={product._id}
            title={product.description}
            src={product.image}
            product_info={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
    </section>
  );
}

export default Products;
