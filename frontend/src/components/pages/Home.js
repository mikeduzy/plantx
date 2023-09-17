import React, { useState, useEffect } from 'react';

import PlantCard from '../PlantCard';
import axios from 'axios';
import './Home.css';
//import { styled } from "@mui/material/styles"; //BK09/03: error thats why i commented this out
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Inquirybutton from '../Inquirybutton';

function Home() {
    const [productData, setProductData] = useState('');
    const [selectCategory, setSelectCategory] = useState(null);
    const handleSelectCategory = (event, value) =>
        !value ? null : setSelectCategory(value);

    //  fetch data
    useEffect(() => {
        axios
            .all([
                axios.get('http://localhost:4000/Plants'),
                axios.get('http://localhost:4000/Plantlisting'),
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
                            plants.find(
                                (plant) => plant.name === item.planttypename
                            )?.description || '',
                        condition: item.condition,
                        plantSize: item.size,
                        origin:
                            plants.find(
                                (plant) => plant.name === item.planttypename
                            )?.location || '',
                        careInstruction: {
                            watering:
                                plants.find(
                                    (plant) => plant.name === item.planttypename
                                )?.water_requirement || '',
                            wateringFrequency:
                                plants.find(
                                    (plant) => plant.name === item.planttypename
                                )?.watering_frequency || '',
                        },
                        profileName: item.name,
                        location: item.location,
                        sellOrSwap: item.sellorswap,
                        price: item.price || null,
                        swapFor: item.swapoffer || null,
                    }));

                    // Update the state with the formatted product data
                    setProductData(products.splice(0, 4));
                })
            )
            .catch((error) => {
                // Handle errors if data fetching fails
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <div className="hero-container">
                <h1>Exchange your plants now!</h1>
            </div>
            <Box sx={{ width: '100%' }}>
                <Grid
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    m={1}
                    p={1}
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
        </div>
    );
}

// // Home component
// const Home = () => {
//   return (
//     <div>
//       <div>
//         <span>Category</span>
//         <FilterCategories
//           options={CategoryList}
//           value={selectCategory}
//           selectedToggle={handleSelectCategory}
//         />
//       </div>
//       */
//       {productData.length > 0 ? (
//         // Map through the product data and render each product card
//         productData.map((product, index) => (
//           <PlantCard key={index} product={product} />
//         ))
//       ) : (
//         // Show a loading message while data is being fetched
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

export default Home;
