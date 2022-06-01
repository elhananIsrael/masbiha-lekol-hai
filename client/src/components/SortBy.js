import TextField from "@mui/material/TextField";
import { useContext } from "react";
import MyContext from "../MyContext";

function SortBy() {
  const [, , , , , , , , , , setSortBy] = useContext(MyContext);

  return (
    <TextField
      select
      sx={{ marginRight: "10px" }}
      size="small"
      label="Sort By:"
      onChange={(e) => {
        console.log(e.target.value);
        setSortBy(e.target.value);
      }}
      SelectProps={{
        native: true,
      }}
      variant="outlined"
    >
      <option value="sortAlphabeticallyAZ">Alphabetically, A-Z</option>
      <option value="sortAlphabeticallyZA">Alphabetically, Z-A</option>
      <option value="sortPriceLowToHigh">Price, low to high</option>
      <option value="sortPriceHighToLow">Price, high to low</option>
      <option value="sortBestSelling">Best Selling</option>
      <option value="sortFeatured">Featured</option>
      {/* <option value="/">Date, new to old</option> */}
      {/* <option value="/">Date, old to new</option> */}
      {/* <option key="all" value="all">
        all
      </option> */}
    </TextField>
  );
}

export default SortBy;
