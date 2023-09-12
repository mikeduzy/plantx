import React, { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import CheckboxCategory from './CheckboxForm';
import Button from '@mui/material/Button';
import PriceSlider from './PriceSlider';
//options to choose categories
export const CategoryList = [
    { id: 1, value: 'Swap', label: 'swap' },
    { id: 1, value: 'Sell', label: 'sell' },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    toggle: {
        '&.Mui-selected': {
            background: '#000',
            color: '#fff',
        },
        '&.MuiToggleButton-root': {
            '&:hover': {
                background: '#000',
                color: '#fff',
            },
        },
    },
});
//options to choose how much light does your plant get
const FilterCategories = ({ options, value, selectToggle }) => {
    const [light, setLight] = useState([
        { id: 1, checked: false, label: 'Low' },
        { id: 2, checked: false, label: 'Medium' },
        { id: 3, checked: false, label: 'High' },
    ]);
    //option to choose how expensive does your plant should be
    const [selectedPrice, setSelectedPrice] = useState([1, 70]);
    const [showPriceSlider, setShowPriceSlider] = useState(false);

    //Price Filter
    // const minPrice = selectedPrice[0];
    // const maxPrice = selectedPrice[1];

    const handleShowPriceSlider = (value) =>
        value === 'Sell' ? setShowPriceSlider(true) : setShowPriceSlider(false);

    const handleChangeChecked = (id) => {
        const changeCheckedLight = light.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setLight(changeCheckedLight);
    };

    const handleChangePrice = (event, value) => {
        setSelectedPrice(value);
    };

    //uses for set colors for material UI elements
    const classes = useStyles();
    return (
        <>
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={selectToggle}
                className={classes.root}
            >
                {options.map((option) => (
                    <ToggleButton
                        className={classes.toggle}
                        key={option.id}
                        value={option.value}
                        onClick={() => handleShowPriceSlider(option.value)}
                    >
                        {option.label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            {showPriceSlider ? (
                <>
                    <span>What is the max price of your plant?</span>
                    <PriceSlider
                        value={selectedPrice}
                        changePrice={handleChangePrice}
                    />
                </>
            ) : null}
            <div>
                <span>How much light will your plant get?</span>
                {light.map((elem) => (
                    <CheckboxCategory
                        key={elem.id}
                        light={elem}
                        changeChecked={handleChangeChecked}
                    />
                ))}
            </div>
            <Button variant="contained">Submit</Button>
        </>
    );
};
export default FilterCategories;
