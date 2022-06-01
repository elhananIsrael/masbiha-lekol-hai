import "./Sort.css";
import FilterBy from "../FilterBy";
import SortBy from "../SortBy";
import FilterByPrice from "../FilterByPrice";

function Sort({ sort_categories, setFilterBy_categories }) {
  return (
    <div title="Sort" className="Sort">
      <FilterBy
        filterBy_categories={sort_categories}
        setFilterBy_categories={setFilterBy_categories}
      />
      <SortBy />
      <FilterByPrice />
    </div>
  );
}

export default Sort;
