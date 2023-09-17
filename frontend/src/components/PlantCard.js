import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Inquirybutton from './Inquirybutton';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minWidth: 100,
        margin: '1rem',
    },
    media: {
        height: 140,
    },
}));

export default function PlantCard(props) {
    const classes = useStyles();
    return (
        <Card
            classes={{
                root: classes.root,
            }}
        >
            <CardMedia

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
                    Care Instructions - Watering:{' '}
                    {props.product.careInstruction?.watering}, Frequency:{' '}
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
            <CardActions style={{ justifyContent: 'center' }}>
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
