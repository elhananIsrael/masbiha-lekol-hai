import PropTypes from "prop-types";
// import { createStyles, withStyles, makeStyles } from "@mui/styles/";
import { styled } from "@mui/material/styles";
// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
// import { useState } from "react";
import MyContext from "../MyContext";
import { useContext, useEffect, useState } from "react";
// import { Theme } from "@mui/material/styles";

// const theme = createTheme();
// // const defaultTheme = createTheme();

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       width: 300 + theme.spacing(3) * 2,
//     },
//     margin: {
//       height: theme.spacing(3),
//     },
//   })
// );

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
  const [, , , , , , [minPrice, maxPrice], app_filterByPrices] =
    useContext(MyContext);
  // console.log(maxPrice);
  const [currentValue, setCurrentValue] = useState([minPrice, maxPrice]);
  // const [myMax, setMyMax] = useState(maxPrice);
  // const [myMin, setMyMin] = useState(minPrice);

  const handleChange = (event, newValue) => {
    console.log([...newValue]);
    // console.log(beforeChange);

    /* if (!beforeChange) {
      beforeChange = [...currentValue];
    }

    if (beforeChange[0] !== newValue[0] && beforeChange[1] !== newValue[1]) {
      return;
    }*/
    setCurrentValue([...newValue]);
    app_filterByPrices([...newValue]);
  };

  useEffect(() => {
    console.log([minPrice, maxPrice]);
    setCurrentValue([minPrice, maxPrice]);
    app_filterByPrices([minPrice, maxPrice]);
    console.log("update once or two times current value");
  }, [minPrice, maxPrice]);
  // useEffect(
  //   (myMin, myMax) => {
  //     setCurrentValue([minPriceBorder, maxPriceBorder]);
  //     console.log("update once or two times current value");
  //   },
  //   [minPriceBorder, maxPriceBorder]
  // );

  // const handleChangeCommitted = () => {
  //   console.log("sdfsdfa");
  //   beforeChange = null;
  // };

  // const myRange = () => {
  //   return [minPrice, maxPrice];
  // };
  return (
    // <ThemeProvider theme={theme}>
    //   {/* // <div className={classes.root}>  */}

    <Box sx={{ width: 125, marginLeft: "10px" }}>
      {/* <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      /> */}
      {/* <div style={{ width: "125px", marginLeft: "10px" }}> */}
      <Typography gutterBottom>Filter By Price</Typography>
      <AirbnbSlider
        //    getAriaLabel={() => 'Temperature range'}
        // aria-label="sdfsdf"
        // title="jhghkj"
        value={currentValue}
        onChange={handleChange}
        // onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
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
