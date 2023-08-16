import React, { useState, useEffect } from "react";
import TextField from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const Insertpage = () => {
  const [condition, setCondition] = useState("");
  const [swaps, setSwaps] = useState("");
  const [yourname, setyourname] = useState("");
  const [yourlocation, setyourlocation] = useState("");
  const [size, setsize] = useState("");
  const [plant, setplant] = useState("");
  const [planttypes, setplanttypes] = useState("");

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("https://api.npms.io/v2/search?q=react")
      .then((response) => setplanttypes(response.data.total));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handlePlantChange = (event) => {
    setplant(event.target.value);
  };

  const handleSwapChange = (event) => {
    const selectedValue = event.target.value;
    setSwaps(selectedValue);
  };

  const handleYournameChange = (event) => {
    setyourname(event.target.value);
  };

  const handleYourlocationChange = (event) => {
    setyourlocation(event.target.value);
  };

  const handleSizeChange = (event) => {
    setsize(event.target.value);
  };

  return (
    <div className="insertcomp">
      <Box sx={{ minWidth: 120, maxWidth: 400 }}>
        <TextField
          id="yourname"
          label="yourname"
          variant="outlined"
          placeholder="Your Name"
          value={yourname}
          onChange={handleYournameChange}
        />
        <br />
        <TextField
          id="yourlocation"
          label="yourlocation"
          variant="outlined"
          placeholder="Your Location"
          value={yourlocation}
          onChange={handleYourlocationChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder="Size"
          value={size}
          onChange={handleSizeChange}
        />

        <FormControl fullWidth>
          <InputLabel id="plant">Which Plant do you want to list?</InputLabel>
          <Select
            labelId="plant"
            id="plant"
            value={plant}
            label="plant"
            onChange={handlePlantChange}
          >
            <MenuItem value={"plant1"}>{planttypes}</MenuItem>
            <MenuItem value={"plant2"}>plant2</MenuItem>
            <MenuItem value={"plant3"}>plant3</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Condition</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={condition}
            label="Age"
            onChange={handleConditionChange}
          >
            <MenuItem value={10}>Happy Plant</MenuItem>
            <MenuItem value={20}>Needs a little bit love</MenuItem>
            <MenuItem value={30}>Needs much love</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="sellorswap">Sell or Swap</InputLabel>
          <Select
            labelId="sellorswap-label"
            id="sellorswap"
            value={swaps}
            label="sellorswap"
            onChange={handleSwapChange}
          >
            <MenuItem value={"swap"}>Swap</MenuItem>
            <MenuItem value={"sell"}>Sell</MenuItem>
            <MenuItem value={"forfree"}>Give for free</MenuItem>
          </Select>
        </FormControl>
        {swaps === "sell" && (
          <TextField
            id="outlined-basic"
            label="Price" // Changed label to "Price"
            variant="outlined"
            placeholder="Price" // Changed placeholder to "Price"
            fullWidth
            style={{ marginTop: "20px" }}
          />
        )}

        {swaps === "swap" && (
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

      <Button variant="contained">List your Plant now</Button>
    </div>
  );
};

export default Insertpage;
