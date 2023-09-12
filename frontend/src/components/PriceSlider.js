import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles({
    root: {
        width: '100%',
        padding: '0 15px',
    },
    rail: {
        color: `rgba(0, 0, 0, 0.36)`,
    },
});

const PriceSlider = ({ value, changePrice }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={changePrice}
                valueLabelDisplay="on"
                min={1}
                max={100}
                classes={{
                    rail: classes.rail,
                }}
            />
        </div>
    );
};

export default PriceSlider;
