import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles({
    root: {
        width: '100%',
        padding: '0 15px',
    },
    rail: {
        color: `rgba(104, 209, 152, 0.36)`,
    },
    track: {
        color: '#68d198',
    },
    thumb: {
        color: '#68d198',
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
                    track: classes.track,
                    thumb: classes.thumb,
                }}
            />
        </div>
    );
};

export default PriceSlider;
