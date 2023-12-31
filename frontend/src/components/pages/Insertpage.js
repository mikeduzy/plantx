import React, { useState, useEffect } from "react";
import TextField from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Insertpage = () => {
  const [condition, setCondition] = useState("");
  const [swaps, setSwaps] = useState("");
  const [yourname, setYourname] = useState("");
  const [yourlocation, setYourlocation] = useState("");
  const [size, setSize] = useState("");
  const [plant, setPlant] = useState("");
  const [planttypes, setPlanttypes] = useState("");
  const [price, setPrice] = useState("");
  const [swapfor, setSwapfor] = useState("");
  const [open, setOpen] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/Plants")
      .then((response) => {
        const plantNames = response.data.map((plantType) => plantType.name);
        setPlanttypes(plantNames);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handlePlantChange = (event) => {
    setPlant(event.target.value);
  };

  const handleSwapChange = (event) => {
    const selectedValue = event.target.value;
    setSwaps(selectedValue);
  };

  const handleYournameChange = (event) => {
    setYourname(event.target.value);
  };

  const handleYourlocationChange = (event) => {
    setYourlocation(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSwapforChange = (event) => {
    setSwapfor(event.target.value);
  };

  const onclickonSubmit = (event) => {
    setOpen(true);
    const isPriceEmpty = price === "";
    const isSwapforEmpty = swapfor === "";

    if (
      condition !== "" &&
      swaps !== "" &&
      yourname !== "" &&
      yourlocation !== "" &&
      size !== "" &&
      plant !== ""
    ) {
      axios
        .post("http://localhost:4000/Plantlisting", {
          name: yourname,
          location: yourlocation,
          size: size,
          planttypename: plant,
          condition: condition,
          sellorswap: swaps,
          price: isPriceEmpty ? null : price,
          swapoffer: isSwapforEmpty ? null : swapfor,
        })
        .then((response) => {
          console.log("Plant added successfully:", response.data);

          setCondition("");
          setSwaps("");
          setYourname("");
          setYourlocation("");
          setSize("");
          setPlant("");
          setPrice("");
          setSwapfor("");
        })
        .catch((error) => {
          console.error("Error adding plant:", error);
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="insertcomp">
      <Box
        sx={{
          minWidth: 120,
          maxWidth: 400,
          margin: "0 auto",
          padding: "20px",
          textAlign: "center",
          linespacing: "30px",
          "& > *": {
            marginBottom: "10px",
          },
        }}
      >
        <h1>List your Plant</h1>
        <TextField
          id="yourname"
          label="yourname"
          variant="outlined"
          placeholder="Your Name"
          onChange={handleYournameChange}
          value={yourname}
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
            {planttypes.length > 0 &&
              planttypes.map((plantName) => (
                <MenuItem key={plantName} value={plantName}>
                  {plantName}
                </MenuItem>
              ))}
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
            <MenuItem value={"Happy Plant"}>Happy Plant</MenuItem>
            <MenuItem value={"Sad Plant"}>Sad Plant</MenuItem>
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
            value={price}
            onChange={handlePriceChange}
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
            value={swapfor}
            onChange={handleSwapforChange}
            fullWidth
            style={{ marginTop: "20px" }}
          />
        )}

        <Button variant="contained" onClick={onclickonSubmit}>
          List your Plant now
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Congrats, you list your Plant</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Visit our marketplace to find your ad
            </DialogContentText>
            <Button onClick={handleClose}>ok</Button>
          </DialogContent>
        </Dialog>
      </Box>
    </div>
  );
};

export default Insertpage;
