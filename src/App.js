import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import MyContext from "./MyContext";
import MyAppBar from "./components/MyAppBar/MyAppBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const getAllCategories = (productsArray) => {
  const Categories = productsArray
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  return Categories;
};

const getPricesRange = (productsArray) => {
  const Prices = productsArray
    .map((p) => p.price)
    .filter((value, index, array) => array.indexOf(value) === index);
  let minPrice = Math.min(...Prices);
  let maxPrice = Math.max(...Prices);

  // console.log(
  //   "minPrice: " + Math.floor(minPrice) + " maxPrice: " + Math.ceil(maxPrice)
  // );
  return [Math.floor(minPrice), Math.ceil(maxPrice)];
};

let localPricesRange = [0, 100];

function App() {
  const [productsArrShow, setProductsArrShow] = useState([]);
  const [productsArr, setProductsArr] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [pricesRange, setPricesRange] = useState([0, 100]);
  // const [wid, setWid] = useState("0%");
  const [cartArr, setCartArr] = useState([]);
  const [filterBy_categories, setfilterBy_categories] = useState("all");

  // const toggleSidenav = () => {
  //   if (wid === "0%") setWid("25%");
  //   else setWid("0%");
  // };

  const getIndex = (arr, key) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === key) {
        return i;
      }
    }
    return -1; //to handle the case where the value doesn't exist
  };

  const AddCartItem = (id) => {
    let cartProduct = null;
    cartArr
      .filter((product) => product.id === id)
      .map((item) => {
        cartProduct = item;
        return true;
      });
    let cartProductIndex = null;
    if (cartProduct !== null) {
      cartProductIndex = getIndex(cartArr, id);
      console.log(cartProductIndex);
    }
    //console.log(cartArr);
    //console.log(cartProduct);
    if (cartArr.length === 0 || cartProduct === null) {
      // console.log(
      //   "ADD ITEM CART: cartArr.length === 0 || cartProduct === null"
      // );
      let product = null;
      productsArr
        .filter((product) => product.id === id)
        .map((item) => {
          // console.log(item);
          product = item;
          return true;
        });
      const newCartArr = [...cartArr, { ...product, numItems: 1 }];
      setCartArr(newCartArr);
      // console.log(newCartArr);
      // console.log(product);
      // console.log(cartArr);
    } else {
      // console.log("ADD ITEM CART: else");
      const newNumItems = cartProduct.numItems + 1;
      const newCartItem = { ...cartProduct, numItems: newNumItems };
      let newCartArr = [...cartArr];
      newCartArr[cartProductIndex] = newCartItem;
      setCartArr(newCartArr);
    }
    // console.log(cartArr);
  };

  const removeCartItem = (id) => {
    let cartProduct = null;
    cartArr
      .filter((product) => product.id === id)
      .map((item) => {
        cartProduct = item;
        return true;
      });
    let cartProductIndex = null;
    if (cartProduct !== null) {
      cartProductIndex = getIndex(cartArr, id);
      console.log(cartProductIndex);
    }
    if (cartProduct != null) {
      if (cartProduct.numItems > 1) {
        const newNumItems = cartProduct.numItems - 1;
        const newCartItem = { ...cartProduct, numItems: newNumItems };
        let newCartArr = [...cartArr];
        newCartArr[cartProductIndex] = newCartItem;
        setCartArr(newCartArr);
      } else {
        setCartArr(cartArr.filter((cartItem) => cartItem.id !== id));
      }
    }
  };

  //console.log("App: I was rendered!");

  useEffect(() => {
    // h1Ref.current.firstChild.data += ` - Good ${myDate()}!`;
    //console.log(h1Ref.current.firstChild.data);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        //  console.log("App_products:");
        // console.log(result);
        setProductsArr(result);
        setProductsArrShow(result);
        const tempAllCategories = getAllCategories(result);
        // console.log("App_categories:");
        /// console.log(tempAllCategories);
        setAllCategories(tempAllCategories);
        const tempPricesRange = getPricesRange(result);
        setPricesRange(tempPricesRange);
        localPricesRange = tempPricesRange;
        //console.log(localPricesRange);
        // getAllPrices(result);
      })
      .catch((error) => {
        console.log(error + "222");
      });
  }, []);

  const app_filterProducts = (filterBy) => {
    setfilterBy_categories(filterBy);
    let tempArrShow = productsArr;
    if (filterBy === "all") setProductsArrShow(productsArr);
    else {
      tempArrShow = productsArr.filter(
        (product) => product.category === filterBy
      );
      setProductsArrShow(tempArrShow);
    }
    ///////
    let [minPrice, maxPrice] = localPricesRange;
    const tempProductsArrShow = tempArrShow.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setProductsArrShow(tempProductsArrShow);
    ///////
  };

  const app_filterByPrices = ([minPrice, maxPrice]) => {
    let tempArrShow = productsArr;
    // console.log(filterBy_categories);
    if (filterBy_categories !== "all") {
      tempArrShow = productsArr.filter(
        (product) => product.category === filterBy_categories
      );
    }

    const tempProductsArrShow = tempArrShow.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setProductsArrShow(tempProductsArrShow);
    localPricesRange = [minPrice, maxPrice];
  };

  return (
    <Router>
      <MyContext.Provider
        value={[
          cartArr,
          setCartArr,
          productsArr,
          setProductsArr,
          AddCartItem,
          removeCartItem,
          pricesRange,
          app_filterByPrices,
        ]}
      >
        <MyAppBar />
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="myBody">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  productsArr={productsArr}
                  allCategories={allCategories}
                  productsArrShow={productsArrShow}
                  app_filterProducts={app_filterProducts}
                />
              }
            />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/users">
            <Users />
          </Route> */}
          </Routes>
        </div>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
