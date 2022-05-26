import TextField from "@mui/material/TextField";

function SortBy() {
  return (
    <TextField
      // id="outlined-select-currency-native"
      select
      sx={{ marginRight: "10px" }}
      // endAdornment
      // InputAdornment
      size="small"
      // shrink={true}
      label="Sort By:"
      // value={currency}
      onChange={(e) => {
        // app_filterProducts(e.target.value);
        //       console.log("Changed Option");
      }}
      SelectProps={{
        native: true,
      }}
      // helperText="Please select your currency"
      variant="outlined"
    >
      <option value="/">Featured</option>
      <option value="/">Best Selling</option>
      <option value="/">Alphabetically, A-Z</option>
      <option value="/">Alphabetically, Z-A</option>
      <option value="/">Price, low to high</option>
      <option value="/">Price, high to low</option>
      <option value="/">Date, new to old</option>
      <option value="/">Date, old to new</option>
      {/* <option key="all" value="all">
        all
      </option> */}
    </TextField>

    // <div title="SortBy" className="Sort-collection-sort">
    //   <label>Sort by:</label>
    //   <select>
    //     <option value="/">Featured</option>
    //     <option value="/">Best Selling</option>
    //     <option value="/">Alphabetically, A-Z</option>
    //     <option value="/">Alphabetically, Z-A</option>
    //     <option value="/">Price, low to high</option>
    //     <option value="/">Price, high to low</option>
    //     <option value="/">Date, new to old</option>
    //     <option value="/">Date, old to new</option>
    //   </select>
    // </div>
  );
}

export default SortBy;
