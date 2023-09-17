import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Inquirybutton from "./Inquirybutton";

export default function PlantCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        // image="/static/images/cards/contemplative-reptile.jpg"
        // title="green iguana"
      />
      <CardContent>
        <div>Plant Name: {props.product.plantName}</div>

        <div>Description: {props.product.description}</div>

        <div>Condition: {props.product.condition}</div>

        <div>Plant Size: {props.product.plantSize}</div>

        <div>Origin: {props.product.origin}</div>

        <div>
          Care Instructions - Watering:{" "}
          {props.product.careInstruction?.watering}, Frequency:{" "}
          {props.product.careInstruction?.wateringFrequency}
        </div>

        <div>Profile Name: {props.product.profileName}</div>

        <div>Location: {props.product.location}</div>

        <div>Sell or Swap: {props.product.sellOrSwap}</div>

        {props.product.price !== null && (
          <div>Price: {props.product.price}</div>
        )}

        {props.product.swapFor !== null && (
          <div>Swap for: {props.product.swapFor}</div>
        )}
      </CardContent>
      <CardActions>
        <Inquirybutton />
      </CardActions>
    </Card>
  );
}

// import React from 'react';
// import CardItem from './CardItem';
// import './Cards.css';

// function Cards() {
//     return (
//         <div className='cards'>
//             <h1>Orchidee</h1>
//             <div className='cards_container'>
//                 <div className='cards_wrapper'>
//                     <ul className='cards_items'>
//                         <CardItem />
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cards
