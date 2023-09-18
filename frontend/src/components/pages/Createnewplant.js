import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Createnewplant = () => {
  const [Plants, setPlants] = useState({
    name: "",
    size: "",
    location: "",
    light_requirement: "",
    description: "",
    water_requirement: "",
    watering_frequency: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlants((prevPlant) => ({
      ...prevPlant,
      [name]: value,
    }));
  };

  const onclickonSubmit = (event) => {
    if (Object.values(Plants).every((value) => value !== "")) {
      axios
        .post("http://localhost:4000/Plants", Plants)
        .then((response) => {
          console.log("Plant added successfully:", response.data);
          setPlants({
            name: "",
            size: "",
            location: "",
            light_requirement: "",
            description: "",
            water_requirement: "",
            watering_frequency: "",
          });
        })
        .catch((error) => {
          console.error("Error adding plant:", error);
        });
    }
  };

  return (
    <div>
      <Box
        sx={{
          minWidth: 120,
          maxWidth: 400,
          margin: "0 auto",
          padding: "20px",
          textAlign: "center",
          linespacing: "27px",

          "& > *": {
            marginBottom: "30px",
          },
        }}
      >
        <h1> Add Plant Information to our Database</h1>
        <TextField
          label="Name"
          name="name"
          value={Plants.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Size"
          name="size"
          value={Plants.size}
          onChange={handleInputChange}
        />
        <TextField
          label="Location"
          name="location"
          value={Plants.location}
          onChange={handleInputChange}
        />
        <TextField
          label="Light Requirement"
          name="light_requirement"
          value={Plants.light_requirement}
          onChange={handleInputChange}
        />
        <TextField
          label="Description"
          name="description"
          value={Plants.description}
          onChange={handleInputChange}
        />
        <TextField
          label="Water Requirement"
          name="water_requirement"
          value={Plants.water_requirement}
          onChange={handleInputChange}
        />
        <TextField
          label="Watering Frequency"
          name="watering_frequency"
          value={Plants.watering_frequency}
          onChange={handleInputChange}
        />
      </Box>
      <Button
        style={{ display: "block", margin: "0 auto" }}
        type="submit"
        variant="contained"
        onClick={onclickonSubmit}
      >
        Add Plant
      </Button>
    </div>
  );
};

export default Createnewplant;
