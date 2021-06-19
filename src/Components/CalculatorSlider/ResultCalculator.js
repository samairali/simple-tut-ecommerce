import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import CalculatorTable from './CalculatorTable';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    // paper: {
    //     height: 140,
    //     width: 100,
    // },
    control: {
        padding: theme.spacing(2),
    },
    resultValue: {
        fontSize: '25px',
        fontWeight: 'bold'
    }
}));

export default function ResultCalculator() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    <Grid xs={12} lg={3} item>
                        <Typography component="h1" className={classes.resultValue}>
                            ${(value * 1000)}
                        </Typography>
                        <Slider
                            value={value}
                            onChange={handleChange}
                            aria-labelledby="range-slider"
                            step={5}
                        />
                    </Grid>
                    <Grid xs={12} lg={9} item>
                        <CalculatorTable value={value} />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}
