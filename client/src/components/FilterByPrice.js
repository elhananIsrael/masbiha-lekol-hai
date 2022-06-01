import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import MyContext from "../MyContext";
import { useContext, useEffect, useState } from "react";
function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="bottom" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

// function valuetext(value) {
//   return `$${value}`;
// }
// let beforeChange = null;

function FilterByPrice() {
  //   const classes = useStyles();
  const [, , , , , [minPrice, maxPrice], , , setPricesRangeLocal, , , , , ,] =
    useContext(MyContext);
  // console.log([minPrice, maxPrice]);
  // console.log([minPriceLocal, maxPriceLocal]);
  const [currentValue, setCurrentValue] = useState([minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    setCurrentValue([...newValue]);
    setPricesRangeLocal([...newValue]);
  };

  useEffect(() => {
    // console.log([minPrice, maxPrice]);
    setCurrentValue([minPrice, maxPrice]);

    ///////////////////////
    setPricesRangeLocal([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  return (
    <Box sx={{ width: 125, marginLeft: "10px" }}>
      <Typography gutterBottom>Filter By Price</Typography>
      <AirbnbSlider
        value={currentValue}
        onChange={handleChange}
        // onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay="auto"
        max={maxPrice}
        min={minPrice}
        components={{
          // ValueLabel: ValueLabelComponent,
          Thumb: AirbnbThumbComponent,
        }}
        disableSwap
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        // defaultValue={[minPrice, maxPrice]}
      />

      {/* </div> */}
    </Box>

    // {/* </ThemeProvider> */}
  );
}

export default FilterByPrice;
