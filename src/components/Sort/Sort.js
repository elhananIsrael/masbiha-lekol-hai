import "./Sort.css";
import FilterBy from "../FilterBy";
import SortBy from "../SortBy";
import FilterByPrice from "../FilterByPrice";

function Sort({ sort_products, sort_categories, app_filterProducts }) {
  /*console.log("sort_products:");
  console.log(sort_products);
  console.log("sort_categories:");
  console.log(sort_categories);*/

  return (
    <div title="Sort" className="Sort">
      <FilterBy
        filterBy_categories={sort_categories}
        app_filterProducts={app_filterProducts}
      />
      <SortBy />
      <FilterByPrice />
    </div>
  );
}

export default Sort;
