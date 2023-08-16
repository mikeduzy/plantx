import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PlantCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
      // image="/static/images/cards/contemplative-reptile.jpg"
      // title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Plantname: {props.name}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>Description:</b> {props.description}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>Care Instructions:</b> {props.care_instructions}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>Origin:</b> {props.origin}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>Sunlight:</b> {props.sunlight}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>Watering:</b> {props.watering}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Swap</Button>
        <Button size="small">Sell</Button>
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