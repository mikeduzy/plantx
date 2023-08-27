import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

  useEffect(() => {
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
  }, [Plants]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlants((prevPlant) => ({
      ...prevPlant,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
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
        <Button type="submit" variant="contained">
          Add Plant
        </Button>
      </form>
    </div>
  );
};

export default Createnewplant;
