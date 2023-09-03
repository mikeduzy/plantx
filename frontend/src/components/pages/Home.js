import React from "react";
import PlantCard from "../PlantCard";
import "./Home.css";
//import { styled } from "@mui/material/styles"; //BK09/03: error thats why i commented this out
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const plants = [
  {
    name: "Rose",
    scientific_name: "Rosa",
    family: "Rosaceae",
    description: "A classic flowering shrub with a wide range of colors.",
    care_instructions: "Requires well-drained soil and regular watering.",
    origin: "Various",
    sunlight: "Full sun",
    watering: "Regular",
  },
  {
    name: "Lavender",
    scientific_name: "Lavandula",
    family: "Lamiaceae",
    description: "A fragrant herb known for its calming properties.",
    care_instructions: "Prefers well-drained soil and full sunlight.",
    origin: "Mediterranean region",
    sunlight: "Full sun",
    watering: "Moderate",
  },
  // ... Continue with more plant examples ...
  {
    name: "Spider Plant",
    scientific_name: "Chlorophytum comosum",
    family: "Asparagaceae",
    description: "An easy-to-care-for indoor plant with arching leaves.",
    care_instructions:
      "Thrives in various light conditions and prefers evenly moist soil.",
    origin: "Southern Africa",
    sunlight: "Indirect light to low light",
    watering: "Moderate",
  },
  {
    name: "Bamboo",
    scientific_name: "Bambusoideae",
    family: "Poaceae",
    description: "A fast-growing grass with numerous uses and varieties.",
    care_instructions: "Requires well-draining soil and regular watering.",
    origin: "Various",
    sunlight: "Full sun to part shade",
    watering: "Regular",
  },
];

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

function Home() {
  const listItems = plants.map((plant) => (
    <Paper>
      <PlantCard
        name={plant.name}
        description={plant.description}
        care_instructions={plant.care_instructions}
        origin={plant.origin}
        sunlight={plant.sunlight}
        watering={plant.watering}
      />
    </Paper>
  ));

  return (
    <div>
      <div className="hero-container">
        <h1>Exchange your plants now!</h1>
      </div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {listItems}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
