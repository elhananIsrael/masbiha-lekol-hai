import { useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
// import MyAppBar from "../components/MyAppBar/MyAppBar";
import Products from "../components/Products/Products";

const myDate = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Night";
  }
  return timeOfDay;
};

function Home({
  productsArr,
  allCategories,
  productsArrShow,
  app_filterProducts,
}) {
  //const [pricesRange, setPricesRange] = useState([0, 100]);
  const h1Ref = useRef(null);
  //console.log("I am HOME page");
  useEffect(() => {
    console.log("HOME");
    app_filterProducts("all");
    /// app_filterByPrices([minPrice, maxPrice]);
    // const { current } = h1Ref || {};
    // console.log(h1Ref);
    // console.log(current);
    if ((h1Ref !== undefined || h1Ref !== null) && h1Ref.current)
      h1Ref.current.firstChild.data += ` - Good ${myDate()}!`;
    //console.log(h1Ref.current.firstChild.data);
  }, []);
  return (
    <>
      {productsArr.length > 0 && allCategories.length > 0 ? (
        <>
          <Header
            header_products={productsArrShow}
            header_categories={allCategories}
            app_filterProducts={app_filterProducts}
            // toggleSidenav={toggleSidenav}
          >
            I am Children of Header!
          </Header>
          {/* <Cart wid={wid} /> */}
          <Products products_products={productsArrShow} />
        </>
      ) : (
        <>
          <h1 ref={h1Ref}>WELCOME!</h1>
          <Loader />
        </>
      )}
    </>
  );
}

export default Home;
