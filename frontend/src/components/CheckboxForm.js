import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
    root: {
        '&$checked': {
            color: '#000',
        },
    },
    checked: {},
    wrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 0,
    },
    label: {
        fontSize: '.8rem',
    },
});

const CheckboxCategory = ({ changeChecked, light }) => {
  //uses for styling Material UI Elements
    const classes = useStyles();
    const { checked, label, id } = light;
    return (
        <div>
            <FormControlLabel
                classes={{
                    label: classes.label,
                    root: classes.wrap,
                }}
                control={
                    <Checkbox
                        classes={{
                            checked: classes.checked,
                            root: classes.root,
                        }}
                        size="small"
                        checked={checked}
                        onChange={() => changeChecked(id)}
                    />
                }
                label={label}
            />
        </div>
    );
};

export default CheckboxCategory;
