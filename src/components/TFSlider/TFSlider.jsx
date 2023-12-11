import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import CommonUtils from "../../Utils/CommonUtils"
import Switch from '@mui/material/Switch';
import { FormControlLabel, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Barchart from "../../components/Highcharts/BarChart"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 10,
    width: "100%",
    markLabel: {
        fontSize: '4px', // Adjust the font size as needed
    },
    '& .MuiSlider-track': {
        border: 'none',
        height: 8
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
        backgroundColor: '#52af77',
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

const amount = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 200000,
        label: '2L',
    },
    {
        value: 400000,
        label: '4L',
    },
    {
        value: 600000,
        label: '6L',
    },
    {
        value: 800000,
        label: '8L',
    },
    {
        value: 1000000,
        label: '10L',
    },
];

const intrestRate = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 12,
        label: '12',
    },
    {
        value: 18,
        label: '18',
    },
    {
        value: 24,
        label: '24',
    },
    {
        value: 30,
        label: '30',
    },
];

const tenure = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 60,
        label: '60',
    },
    {
        value: 120,
        label: '120',
    },
    {
        value: 180,
        label: '180',
    },
    {
        value: 240,
        label: '240',
    },
    {
        value: 300,
        label: '300',
    },
];






export default function TFSlider(props) {
    const [value, setvalue] = React.useState(0);
    console.log("slider Value", value)
    return (
        <>
            <Grid container spacing={1} mt={10}>
                <Grid item lg={6} xl={6} md={6} xs={12} sm={12} p={5} >
                    <Barchart />
                </Grid>
                <Grid item lg={6} xl={6} md={6} xs={12} sm={12} p={5}>

                    <Box sx={{ width: "100%", height: "20%" }}>
                        <Box sx={{ m: 3 }} />
                        <Typography fontSize={"0.8rem"} gutterBottom>{"Loan Amount"}
                            <span style={{ fontSize: "0.8rem", marginLeft: "2%" }}>: {CommonUtils.toIndianCurrency(props.loanAmount)}</span>
                        </Typography>
                        <PrettoSlider
                            valueLabelDisplay="off"
                            aria-label="pretto slider"
                            defaultValue={200000}
                            marks={amount}
                            min={0}
                            // value={value}
                            max={1000000}
                            onChange={(e) => { props.setloanAmount(e.target.value) }}
                        />

                    </Box>
                    <Box sx={{ width: "100%", height: "20%" }}>
                        <Box sx={{ m: 3 }} />
                        <Typography gutterBottom fontSize={"0.8rem"} >{"Intrest Rate"}
                            <span style={{ fontSize: "0.8rem", marginLeft: "2%" }}>: {props.intrestRate}%</span>
                        </Typography>
                        <PrettoSlider
                            valueLabelDisplay="off"
                            aria-label="pretto slider"
                            defaultValue={20}
                            marks={intrestRate}
                            min={0}
                            // value={value}
                            max={30}
                            onChange={(e) => { props.setintrestRate(e.target.value) }}
                        />

                    </Box>
                    <Box sx={{ width: "100%", height: "20%" }}>
                        <Box sx={{ m: 3 }} />

                        <Typography gutterBottom fontSize={"0.8rem"} >{"Loan Tenure"}
                            <span style={{ fontSize: "0.8rem", marginLeft: "2%" }}>: {props.tenure} months</span>
                        </Typography>


                        <PrettoSlider
                            valueLabelDisplay="off"
                            aria-label="pretto slider"
                            defaultValue={180}
                            marks={tenure}
                            min={0}
                            // value={value}
                            max={300}
                            onChange={(e) => { props.settenure(e.target.value) }}
                        />

                    </Box>

                </Grid>

            </Grid>
        </>
    );
}