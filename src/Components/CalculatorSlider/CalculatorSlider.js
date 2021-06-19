import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
    resultValue: {
        fontSize: '25px',
        fontWeight: 'bold'
    }
});

function valuetext(value) {
    return `${value}°C`;
}

export default function CalculatorSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };

    return (
        <>
            <Typography component="h1" className={classes.resultValue}>
                ${(value * 1000)}
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
                step={5}
            />
        </>
    );
}
