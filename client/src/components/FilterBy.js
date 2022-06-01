import TextField from "@mui/material/TextField";

function FilterBy({ filterBy_categories, setFilterBy_categories }) {
  return (
    <TextField
      select
      sx={{ marginRight: "10px" }}
      size="small"
      label="Filter By:"
      onChange={(e) => {
        setFilterBy_categories(e.target.value);
      }}
      SelectProps={{
        native: true,
      }}
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
