import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
        row: {
            '&:last-child td:last-child': {
                backgroundColor: 'red',
            }
        } 
});

function createData(name, bookingPrice, bookingPriceDtravel) {
    return { name, bookingPrice, bookingPriceDtravel };
}

export default function CalculatorTable(props) {
    const classes = useStyles();
    let { value } = props;
    let grossBooking = value * 1000
    let commaGrossBooking = grossBooking.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    let pf1 = value * 1000 * (20 / 100)
    let commaPf1 = pf1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    let pf2 = value * 1000 * (7.5 / 100)
    let commaPf2 = pf2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    let netMonthlyRev1 = value * 1000 - value * 1000 * (20 / 100)
    let commaNetMonthlyRev1 = netMonthlyRev1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    let netMonthlyRev2 = value * 1000 - value * 1000 * (7.5 / 100)
    let commaNetMonthlyRev2 = netMonthlyRev2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    let savingDtravel = (value * 1000 - value * 1000 * (7.5 / 100)) - (value * 1000 - value * 1000 * (20 / 100))
    let commaSavingDtravel = savingDtravel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const rows = [
        createData('Gross Bookings', `$${commaGrossBooking}`, `$${commaGrossBooking}`),
        createData('Platform Fees', `-(${commaPf1})`, `-(${commaPf2})`),
        createData('Net Monthly Revenue', `$${commaNetMonthlyRev1}`, `$${commaNetMonthlyRev2}`),
        createData('Savings With Dtravel', '', `+$${commaSavingDtravel}`),
    ];
    return (
        <TableContainer component={Paper} className={classes.table}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Other Platforms</TableCell>
                        <TableCell align="right">Dtravel</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row) => (
                        <TableRow key={row.name} className={classes.row}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.bookingPrice}</TableCell>
                            <TableCell className={classes.cell} align="right">{row.bookingPriceDtravel}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}