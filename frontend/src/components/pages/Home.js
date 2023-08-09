import React from 'react';
import PlantCard from '../PlantCard';
import './Home.css'

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
        care_instructions: "Thrives in various light conditions and prefers evenly moist soil.",
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

function Home() {
    const listItems = plants.map(plant =>
        <PlantCard />
    );

    return (
        <div>
            <div className='hero-container'>
                <h1>Exchange your plants now!</h1>
                <p>What are you waiting for?</p>
            </div>
            <PlantCard />
            {listItems}
        </div>
    )
}

export default Home;