import { useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
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

function Home({ productsArr, allCategories, setFilterBy_categories }) {
  const h1Ref = useRef(null);
  useEffect(() => {
    console.log("HOME");
    setFilterBy_categories("all");

    if ((h1Ref !== undefined || h1Ref !== null) && h1Ref.current)
      h1Ref.current.firstChild.data += ` - Good ${myDate()}!`;
  }, []);
  return (
    <>
      {productsArr.length > 0 && allCategories.length > 0 ? (
        <>
          <Header
            header_categories={allCategories}
            setFilterBy_categories={setFilterBy_categories}
          >
            I am Children of Header!
          </Header>
          <Products />
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
