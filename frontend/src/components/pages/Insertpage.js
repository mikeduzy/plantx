import React, { useState } from "react";
import TextField from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Insertpage = () => {
  const [age, setAge] = useState("");
  const [swaps, setSwaps] = useState("");
  const [showTextField, setShowTextField] = useState(false);
  const [showTextFieldSwap, setshowTextFieldSwap] = useState(false);
  const handleChanges = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSwaps(selectedValue);

    if (selectedValue === 22) {
      setShowTextField(true);
    } else {
      setShowTextField(false);
    }

    if (selectedValue === 11) {
      setshowTextFieldSwap(true);
    } else {
      setshowTextFieldSwap(false);
    }
  };

  return (
    <div>
      <Box sx={{ minWidth: 120, maxWidth: 400 }}>
        <TextField
          id="plantname"
          label="plantname"
          variant="outlined"
          placeholder="Name"
        />
        <br />
        <TextField
          id="moredetails"
          label="moredetails"
          variant="outlined"
          placeholder="More details"
        />
        <br />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder="Size"
        />
        <br />
        <br />
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Condition</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChanges}
          >
            <MenuItem value={10}>Happy Plant</MenuItem>
            <MenuItem value={20}>Needs a little bit love</MenuItem>
            <MenuItem value={30}>Needs much love</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="sellorswap">Sell or Swap</InputLabel>
          <Select
            labelId="sellorswap-label"
            id="sellorswap"
            value={swaps}
            label="sellorswap"
            onChange={handleChange}
          >
            <MenuItem value={11}>Swap</MenuItem>
            <MenuItem value={22}>Sell</MenuItem>
            <MenuItem value={33}>Give for free</MenuItem>
          </Select>
        </FormControl>
        {showTextField && (
          <TextField
            id="outlined-basic"
            label="Price" // Changed label to "Price"
            variant="outlined"
            placeholder="Price" // Changed placeholder to "Price"
            fullWidth
            style={{ marginTop: "20px" }}
          />
        )}

        {showTextFieldSwap && (
          <TextField
            id="outlined-basics"
            label="swapfor" // Changed label to "Price"
            variant="outlined"
            placeholder="Swap for..." // Changed placeholder to "Price"
            fullWidth
            style={{ marginTop: "20px" }}
          />
        )}
      </Box>
      <br />
      <br />
      <br />
      <br />
      <Button variant="contained">List your Plant now</Button>
    </div>
  );
};

export default Insertpage;
