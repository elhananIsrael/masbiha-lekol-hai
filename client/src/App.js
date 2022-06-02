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

// let localPricesRange = [0, 100];

function App() {
  const [productsArr, setProductsArr] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipping, setShipping] = useState(9.99);
  const [allCategories, setAllCategories] = useState([]);
  const [pricesRange, setPricesRange] = useState([0, 100]);
  const [pricesRangeLocal, setPricesRangeLocal] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("sortAlphabeticallyAZ");
  const [filterBy_categories, setFilterBy_categories] = useState("all");

  const getIndex = (arr, key) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]._id === key) {
        return i;
      }
    }
    return -1; //to handle the case where the value doesn't exist
  };

  ////////////////////////////////////////
  const updateCart = (productsArr) => {
    // let tempCartArr = {};
    let tempCartLength = 0;
    let tempTotalPrice = 0;
    let tempShipping = 9.99;
    let tempTotal = 0;
    for (let index = 0; index < productsArr.length; index++) {
      if (productsArr[index].quantity > 0) {
        tempCartLength++;
        // tempCartArr = [...tempCartArr, productsArr[index]];
        tempTotalPrice += +(
          productsArr[index].quantity * productsArr[index].price
        ).toFixed(2);
      }
    }

    if (tempCartLength === 0) tempTotal = 0;
    else tempTotal = +(tempTotalPrice + tempShipping).toFixed(2);
    setTotalPrice(tempTotalPrice.toFixed(2));
    setShipping(tempShipping.toFixed(2));
    setTotal(tempTotal.toFixed(2));
    setCartLength(tempCartLength);
  };

  const getAllProductsFromServer = () => {
    fetch("/api/products")
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((productsFromDB) => {
        setProductsArr(productsFromDB);
        updateCart(productsFromDB);

        // setProductsArrShow(productsFromDB);
        const tempAllCategories = getAllCategories(productsFromDB);

        setAllCategories(tempAllCategories);
        const tempPricesRange = getPricesRange(productsFromDB);
        setPricesRange(tempPricesRange);
        setPricesRangeLocal(tempPricesRange);
        // localPricesRange = tempPricesRange;
      })
      .catch((error) => {
        console.log("fetch error", error);
      });
  };

  const addItemQuantity = (_id) => {
    let cartProduct = null;
    productsArr
      .filter((product) => product._id === _id)
      .map((item) => {
        cartProduct = item;
        return true;
      });
    let cartProductIndex = null;
    if (cartProduct !== null) {
      cartProductIndex = getIndex(productsArr, _id);
      const newQuantity = cartProduct.quantity + 1;
      const newCartItem = { ...cartProduct, quantity: newQuantity };
      let newCartArr = [...productsArr];
      newCartArr[cartProductIndex] = newCartItem;
      setProductsArr(newCartArr);
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity }),
      };
      fetch(`/api/products/${_id}`, options)
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((result) => {
          // console.log(result);
          updateCart(newCartArr);
        })
        .catch((error) => {
          console.log("fetch error", error);
        });
    }
  };

  const removeItemQuantity = (_id) => {
    let cartProduct = null;
    productsArr
      .filter((product) => product._id === _id)
      .map((item) => {
        cartProduct = item;
        return true;
      });
    let cartProductIndex = null;
    if (cartProduct !== null) {
      cartProductIndex = getIndex(productsArr, _id);
      // console.log(cartProductIndex);
    }
    if (cartProduct != null && cartProduct.quantity >= 1) {
      const newQuantity = cartProduct.quantity - 1;
      const newCartItem = { ...cartProduct, quantity: newQuantity };
      let newCartArr = [...productsArr];
      newCartArr[cartProductIndex] = newCartItem;
      setProductsArr(newCartArr);
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity }),
      };
      fetch(`/api/products/${_id}`, options)
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((result) => {
          // console.log(result);
          updateCart(newCartArr);
        })
        .catch((error) => {
          console.log("fetch error", error);
        });
    }
  };

  const removeProduct = (_id) => {
    fetch(`/api/products/${_id}`, { method: "DELETE" })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((result) => {
        let newCartArr = [...productsArr];
        setProductsArr(newCartArr.filter((product) => product._id !== _id));
        updateCart(newCartArr.filter((product) => product._id !== _id));
        if (newCartArr.filter((product) => product._id !== _id).length === 0) {
          setTimeout(getAllProductsFromServer, 5000);
        }
      })
      .catch((error) => {
        console.log("fetch error", error);
      });
  };

  useEffect(() => {
    getAllProductsFromServer();
  }, []);

  return (
    <Router>
      <MyContext.Provider
        value={[
          productsArr,
          setProductsArr,
          cartLength,
          addItemQuantity,
          removeItemQuantity,
          pricesRange,
          pricesRangeLocal,
          filterBy_categories,
          setPricesRangeLocal,
          sortBy,
          setSortBy,
          totalPrice,
          shipping,
          total,
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
                  setFilterBy_categories={setFilterBy_categories}
                />
              }
            />
            <Route
              path="/products/:_id"
              element={<ProductDetails productsArr={productsArr} />}
            />
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
