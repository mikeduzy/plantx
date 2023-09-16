import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import axios from "axios";
import FilterCategories from "../FilterForm";
import { CategoryList } from "../FilterForm";
import Inquirybutton from "../Inquirybutton";
import PlantCard from "../PlantCard";

// component

// Market component
const Market = () => {
  const [productData, setProductData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectCategory, setSelectCategory] = useState(null);
  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectCategory(value);
  console.log(selectCategory);

  //  fetch data
  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:4000/Plants"),
        axios.get("http://localhost:4000/Plantlisting"),
      ])
      .then(
        axios.spread((plantsResponse, plantListingResponse) => {
          // Extract data from the responses
          const plants = plantsResponse.data;
          const plantListing = plantListingResponse.data;

          // Map the fetched data to a more readable product format
          const products = plantListing.map((item) => ({
            plantName: item.planttypename,
            description:
              plants.find((plant) => plant.name === item.planttypename)
                ?.description || "",
            condition: item.condition,
            plantSize: item.size,
            origin:
              plants.find((plant) => plant.name === item.planttypename)
                ?.location || "",
            careInstruction: {
              watering:
                plants.find((plant) => plant.name === item.planttypename)
                  ?.water_requirement || "",
              wateringFrequency:
                plants.find((plant) => plant.name === item.planttypename)
                  ?.watering_frequency || "",
            },
            profileName: item.name,
            location: item.location,
            sellOrSwap: item.sellorswap,
            price: item.price || null,
            swapFor: item.swapoffer || null,
          }));

          // Update the state with the formatted product data
          setProductData(products);
        })
      )
      .catch((error) => {
        // Handle errors if data fetching fails
        console.error("Error fetching data:", error);
      });
  }, []);
  // Filter products
  const filteredProducts = productData.filter((product) =>
    product.plantName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <span>Category</span>
        <FilterCategories
          options={CategoryList}
          selectedCategory={selectCategory}
          selectToggle={handleSelectCategory}
          productData={productData}
        />
      </div>
      <div>
        {/* Add a search bar */}
        <input
          type="text"
          placeholder="Search by Plant Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {productData.length > 0 ? (
              // Map through the product data and render each product card
              productData.map((product, index) => (
                <PlantCard key={index} product={product} />
              ))
            ) : (
              // Show a loading message while data is being fetched
              <p>Loading...</p>
            )}
          </Grid>
        </Box>

        {/* Render product cards */}
        {filteredProducts.length > 0 ? (
          // Map through the filtered product data and render each product card
          filteredProducts.map((product, index) => (
            <PlantCard key={index} product={product}></PlantCard>
          ))
        ) : (
          // Show a message if no matching products are found
          <p>No matching products found.</p>
        )}
      </div>
      {/* {productData.length > 0 ? (
                // Map through the product data and render each product card
                productData.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            ) : (
                // Show a loading message while data is being fetched
                <p>Loading...</p>
            )} */}
    </div>
  );
};

export default Market;
