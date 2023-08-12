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

  const handleChange = (event) => {
    setAge(event.target.value);
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
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder="Size"
        />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
      <Button variant="contained">Text</Button>
    </div>
  );
};

export default Insertpage;
