import "./Header.css";
import H1 from "../H1";
import Sort from "../Sort/Sort";

function Header({ header_categories, setFilterBy_categories, children }) {
  // console.log(children);

  return (
    <nav title="Header" className="Header-product-filter">
      <H1 />
      <Sort
        sort_categories={header_categories}
        setFilterBy_categories={setFilterBy_categories}
      />
    </nav>
  );
}

export default Header;
