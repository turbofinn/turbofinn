import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Barchart from "../../components/Highcharts/BarChart"
import { Box, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import cd from "../../assets/images/test.png"



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const PrettoSlider = styled(Slider)({
    color: '#228b22',
    height: 10,
    width: "100%",
    markLabel: {
        fontSize: '4px', // Adjust the font size as needed
    },
    '& .MuiSlider-track': {
        border: 'none',
        height: 8,
        background: "#228b22"
    },
    '& .MuiSlider-marks': {
        fontSize: "0.8rem"
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',

        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 2.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#228b22"',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(10000);
    const [interestRate, setInterestRate] = useState(10);
    const [loanTenure, setLoanTenure] = useState(100);
    const [monthlyEMI, setMonthlyEMI] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [principalAmount, setPrincipalAmount] = useState(0);

    useEffect(() => {
        const principalAmount = parseFloat(loanAmount) || 0;
        const rateOfInterest = (parseFloat(interestRate) || 0) / 100 / 12; // Monthly interest rate
        const numberOfPayments = parseFloat(loanTenure) || 1;

        // EMI calculation formula
        const emi =
            (principalAmount * rateOfInterest) /
            (1 - Math.pow(1 + rateOfInterest, -numberOfPayments));

        const totalInterestAmount = numberOfPayments * emi - principalAmount;
        const totalPaymentAmount = numberOfPayments * emi;

        setMonthlyEMI(isNaN(emi) ? 0 : emi.toFixed(2));
        setTotalInterest(isNaN(totalInterestAmount) ? 0 : totalInterestAmount.toFixed(2));
        setTotalPayment(isNaN(totalPaymentAmount) ? 0 : totalPaymentAmount.toFixed(2));
        setPrincipalAmount(principalAmount.toFixed(2));
    }, [loanAmount, interestRate, loanTenure]);

    // Function to format numbers to Indian Rupees
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
        }).format(amount);
    };

    return (
        <Grid container spacing={2} justifyContent="center" my={10}>
            {/* For desktop and mobile view */}
            <Grid item xs={12} md={6}>
                <Card
                    elevation={3} // Slight shadow
                    style={{
                        backgroundColor: '#fff', // White background color
                        color: '#344767', // Text color
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif', // Font family
                        padding: '20px',
                        margin: '20px',
                        borderRadius: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <h4 style={{ margin: '0 0 20px' }}>Loan Calculator</h4>
                    <div style={{ width: '100%' }}>
                        <Typography gutterBottom style={{ margin: '10px 0' }}>
                            Loan Amount: {formatCurrency(loanAmount)}
                        </Typography>
                        <PrettoSlider
                            valueLabelDisplay="off"
                            aria-label="pretto slider"
                            defaultValue={200000}
                            step={1000}
                            min={0}
                            // value={value}
                            max={1000000}
                            onChange={(_, value) => setLoanAmount(value)}
                        />
                    </div>
                    <div style={{ width: '100%' }}>
                        <Typography gutterBottom style={{ margin: '10px 0' }}>
                            Interest Rate: {interestRate}%
                        </Typography>
                        <PrettoSlider
                            valueLabelDisplay="off"
                            aria-label="pretto slider"
                            defaultValue={20}
                            step={0.1}
                            min={0}
                            // value={value}
                            max={30}
                            onChange={(_, value) => setInterestRate(value)}
                        />
                    </div>
                    <div style={{ width: '100%' }}>
                        <Typography gutterBottom style={{ margin: '10px 0' }}>
                            Loan Tenure: {loanTenure} Months
                        </Typography>
                        <PrettoSlider
                            valueLabelDisplay="off"
                            aria-label="pretto slider"
                            defaultValue={200}
                            min={0}
                            // value={value}
                            max={360}
                            onChange={(_, value) => setLoanTenure(value)}
                        />
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    // Slight shadow
                    style={{
                        backgroundColor: '#fff', // White background color
                        color: '#344767', // Text color
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif', // Font family
                        padding: '20px',
                        margin: '20px',
                        borderRadius: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ width: '100%' }}>
                        <Barchart totalInterest={totalInterest} totalPrincipal={principalAmount} />
                        <Card >
                            <TableContainer component={Paper}>
                                <Table size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" style={{ fontSize: "0.9rem", fontWeight: "600" }}>Monthly EMI</TableCell>
                                            <TableCell align="center" style={{ fontSize: "0.9rem", fontWeight: "600" }}>Total Payment</TableCell>
                                            <TableCell align="center" style={{ fontSize: "0.9rem", fontWeight: "600" }}> Principal Amount</TableCell>
                                            <TableCell align="center" style={{ fontSize: "0.9rem", fontWeight: "600" }}>Total Interest</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center" style={{ fontSize: "0.8rem", fontWeight: "500" }}>{formatCurrency(monthlyEMI)}</TableCell>
                                            <TableCell align="center" style={{ fontSize: "0.8rem", fontWeight: "500" }}>{formatCurrency(totalPayment)}</TableCell>
                                            <TableCell align="center" style={{ fontSize: "0.8rem", fontWeight: "500" }}>{formatCurrency(principalAmount)}</TableCell>
                                            <TableCell align="center" style={{ fontSize: "0.8rem", fontWeight: "500" }}>{formatCurrency(totalInterest)}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>

                        </Card>
                    </div>
                </Card>
            </Grid>
        </Grid>
    );
};

export default LoanCalculator;
