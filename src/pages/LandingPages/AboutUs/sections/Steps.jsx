import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import macbook from "assets/images/macbook.png";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import React from "react";
import { Icon, Stack, Typography } from "@mui/material";
import c1 from "../../../../assets/images/c2.png"
import offer from "../../../../assets/images/offer.png"
import eligblity from "../../../../assets/images/eligblity.png"
import approval from "../../../../assets/images/approval.png"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import MuiDialogBox from "components/MuiDialogBox/MuiDialogBox";
import LoanCalculator from "components/TFSlider/LoanCalculator";

function Steps() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('xl');
    return (
        <>
            <MuiDialogBox
                open={open}
                setOpen={setOpen}
                fullWidth={fullWidth}
                setFullWidth={setFullWidth}
                maxWidth={maxWidth}
                setMaxWidth={setMaxWidth}
                component={<LoanCalculator />}
                title={"Loan Calculator"}
            />
            <MKBox component="section" pt={0} my={0}>
                <Container>

                    <MKTypography variant="h1" color="forestgreen" sx={{ textAlign: "center", fontWeight: "700", color: "forestgreen" }} mt={10} mb={1}>
                        Get Instant Personal Loans
                    </MKTypography>
                    <Grid container alignItems="center">

                        <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 2 } }}>
                            <MKTypography variant="h3" my={1} sx={{ color: "forestgreen" }}>
                                Simple 3-Step Process
                            </MKTypography>
                            <Stack>
                                <MKBox display="flex" alignItems="center" p={2} mt={2}>
                                    <MKBox
                                        width="3rem"
                                        height="3rem"
                                        variant="gradient"
                                        bgColor="white"
                                        color="white"
                                        coloredShadow="info"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        borderRadius="xl"
                                    >
                                        <img src={offer} alt="" style={{ height: "2.5rem" }} />
                                    </MKBox>
                                    <MKTypography variant="body2" color="text" pl={2} sx={{ fontWeight: "700" }}>
                                        Compare & Choose the Best Offer
                                        <br />
                                        <MKTypography variant="body2" color="text" pl={0}>
                                            Attractive rates starting from 10.25% pa and EMIs.
                                        </MKTypography>
                                    </MKTypography>

                                </MKBox>
                                <MKBox display="flex" alignItems="center" p={2}>
                                    <MKBox
                                        width="3rem"
                                        height="3rem"
                                        variant="gradient"
                                        bgColor="white"
                                        color="white"
                                        coloredShadow="info"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        borderRadius="xl"
                                    >
                                        <img src={eligblity} alt="" style={{ height: "2.5rem" }} />
                                    </MKBox>
                                    <MKTypography variant="body2" color="text" pl={2} sx={{ fontWeight: "700" }}>
                                        Check Loan Amount Eligibility
                                        <MKTypography variant="body2" color="text" pl={0}>
                                            Eligibility criteria for an Instant Loan is Age, Salary & Residence.
                                        </MKTypography>
                                    </MKTypography>
                                </MKBox>
                                <MKBox display="flex" alignItems="center" p={2}>
                                    <MKBox
                                        width="3rem"
                                        height="3rem"
                                        variant="gradient"
                                        bgColor="white"
                                        color="white"
                                        coloredShadow="info"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        borderRadius="xl"
                                    >
                                        <img src={approval} alt="" style={{ height: "2.5rem" }} />
                                    </MKBox>
                                    <MKTypography variant="body2" color="text" pl={2} sx={{ fontWeight: "700" }}>
                                        Know your Approval Chances
                                        <MKTypography variant="body2" color="text" pl={0}>
                                            Approval time as low as 1 minute.
                                        </MKTypography>
                                    </MKTypography>

                                </MKBox>


                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={5} lg={6}>
                            <MKBox position="relative">
                                <MKBox component="img" src={c1} alt="macbook" width="80%" />
                            </MKBox>

                        </Grid>
                        <Grid xs={12} md={12} lg={12} display={"flex"} justifyContent={"center"}>
                            <MKButton
                                variant="gradient"
                                size="small"
                                color="success"
                                style={{ margin: "2%" }}
                                component={Link}
                                to={"/pages/authentication/sign-in"}
                            >
                                Check Elegiblity
                            </MKButton>
                            <MKButton variant="gradient" size="small" color="success" style={{ margin: "2%" }}
                                onClick={() => {

                                    setOpen(true)
                                }}
                            >
                                Calculate Loan
                            </MKButton>

                        </Grid>
                    </Grid>
                </Container>
            </MKBox>
        </>
    );
}

export default Steps;
