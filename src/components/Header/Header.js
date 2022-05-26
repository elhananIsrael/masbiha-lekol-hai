import "./Header.css";
import H1 from "../H1";
import Sort from "../Sort/Sort";

function Header({
  header_products,
  header_categories,
  app_filterProducts,
  children,
}) {
  /*console.log("header_products:");
  console.log(header_products);
  console.log("header_categories:");
  console.log(header_categories);*/
  console.log(children);

  return (
    <nav title="Header" className="Header-product-filter">
      <H1 />
      <Sort
        sort_products={header_products}
        sort_categories={header_categories}
        app_filterProducts={app_filterProducts}
      />
    </nav>
  );
}

export default Header;
