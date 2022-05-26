// import { makeStyles } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

function FilterBy({ filterBy_categories, app_filterProducts }) {
  //console.log("filterBy_categories:");
  //console.log(filterBy_categories);

  return (
    // <div title="FilterBy" className="Sort-collection-sort">
    //   <label>Filter by:</label>
    //   <select
    //     onChange={(e) => {
    //       app_filterProducts(e.target.value);
    //       console.log("Changed Option");
    //     }}
    //   >
    //     <option key="all" value="all">
    //       all
    //     </option>
    //     {filterBy_categories.map((category) => (
    //       <option key={category} value={category}>
    //         {category}
    //       </option>
    //     ))}
    //   </select>
    // </div>

    <TextField
      // id="outlined-select-currency-native"
      select
      sx={{ marginRight: "10px" }}
      // endAdornment
      // InputAdornment
      size="small"
      // shrink={true}
      label="Filter By:"
      // value={currency}
      onChange={(e) => {
        app_filterProducts(e.target.value);
        //       console.log("Changed Option");
      }}
      SelectProps={{
        native: true,
      }}
      // helperText="Please select your currency"
      variant="outlined"
    >
      <option key="all" value="all">
        all
      </option>
      {filterBy_categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </TextField>
  );
}

export default FilterBy;
