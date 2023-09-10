import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import FilterCategories from "../FilterForm";
import { CategoryList } from "../FilterForm";
import Inquirybutton from "../Inquirybutton";

// component
const ProductCard = ({ product }) => {
  return (
    //card
    <Card>
      <CardContent>
        <div>Plant Name: {product.plantName}</div>

        <div>Description: {product.description}</div>

        <div>Condition: {product.condition}</div>

        <div>Plant Size: {product.plantSize}</div>

        <div>Origin: {product.origin}</div>

        <div>
          Care Instructions - Watering: {product.careInstruction.watering},
          Frequency: {product.careInstruction.wateringFrequency}
        </div>

        <div>Profile Name: {product.profileName}</div>

        <div>Location: {product.location}</div>

        <div>Sell or Swap: {product.sellOrSwap}</div>

        {product.price !== null && <div>Price: {product.price}</div>}

        {product.swapFor !== null && <div>Swap for: {product.swapFor}</div>}
      </CardContent>
      <Inquirybutton />
    </Card>
  );
};

// Market component
const Market = () => {
  const [productData, setProductData] = useState("");
  const [selectCategory, setSelectCategory] = useState(null);
  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectCategory(value);

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

  return (
    <div>
      <div>
        <span>Category</span>
        <FilterCategories
          options={CategoryList}
          value={selectCategory}
          selectedToggle={handleSelectCategory}
        />
      </div>
      {productData.length > 0 ? (
        // Map through the product data and render each product card
        productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      ) : (
        // Show a loading message while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Market;
