import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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

function Steps() {
    return (
        <MKBox component="section" pt={0} my={0}>
            <Container>
                <Grid container alignItems="center">


                    <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                        <MKTypography variant="h3" my={1}>
                            How it works ?
                        </MKTypography>
                        <Stack>
                            <MKBox display="flex" alignItems="center" p={2}>
                                <MKBox
                                    width="3rem"
                                    height="3rem"
                                    variant="gradient"
                                    bgColor="info"
                                    color="white"
                                    coloredShadow="info"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    borderRadius="xl"
                                >
                                    <Icon fontSize="small">mediation</Icon>
                                </MKBox>
                                <MKTypography variant="body2" color="text" pl={2}>
                                    It becomes harder for us to give others a hand.
                                    <br />
                                    We get our heart broken by people we love.
                                </MKTypography>
                            </MKBox>
                            <MKBox display="flex" alignItems="center" p={2}>
                                <MKBox
                                    width="3rem"
                                    height="3rem"
                                    variant="gradient"
                                    bgColor="info"
                                    color="white"
                                    coloredShadow="info"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    borderRadius="xl"
                                >
                                    <Icon fontSize="small">settings_overscan</Icon>
                                </MKBox>
                                <MKTypography variant="body2" color="text" pl={2}>
                                    As we live, our hearts turn colder.
                                    <br />
                                    Cause pain is what we go through as we become older.
                                </MKTypography>
                            </MKBox>
                            <MKBox display="flex" alignItems="center" p={2}>
                                <MKBox
                                    width="3rem"
                                    height="3rem"
                                    variant="gradient"
                                    bgColor="info"
                                    color="white"
                                    coloredShadow="info"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    borderRadius="xl"
                                >
                                    <Icon fontSize="small">token</Icon>
                                </MKBox>
                                <MKTypography variant="body2" color="text" pl={2}>
                                    When we lose family over time.
                                    <br />
                                    What else could rust the heart more over time? Blackgold.
                                </MKTypography>
                            </MKBox>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={5} >
                        <MKBox position="relative">
                            <MKBox component="img" src={c1} alt="macbook" width="100%" />
                        </MKBox>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Steps;
