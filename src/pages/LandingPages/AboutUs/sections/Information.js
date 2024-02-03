/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import SliderScreen from "examples/Cards/BlogCards/EmiCalculator/SliderScreen";
import loanicon from "../../../../assets/images/loan.png"
import instant from "../../../../assets/images/instant.png"
import fastMoney from "../../../../assets/images/cd.png"
import low from "../../../../assets/images/low.png"
import fast from "../../../../assets/images/fast.png"

function Information() {
  return (
    <MKBox component="section" py={3} mt={5}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon={fastMoney}
                    title="Easy to Apply"
                    description="Applying for a loan with Turbofinn AI is quick and straightforward. Say goodbye to endless paperwork and long waiting times. Our user-friendly online application ensures a seamless experience"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon={fast}
                    title="Fast Disbursal"
                    description="We understand the importance of timely financial assistance. Our advanced technology allows us to process applications swiftly, getting funds into your account when you need them the most."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon={low}
                    title="Low EMIs & Intrest Rate"
                    description="Enjoy competitive and transparent interest rates tailored to suit your financial needs. At TurboFinn AI, we believe in fair and affordable lending to help you achieve your goals without breaking the bank"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
              
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon={instant}
                    color="success"
                    title="Personalized Loan Offers "
                    description="Unlike traditional one-size-fits-all loan offerings, We provides personalized loan based on borrower's credit history, income, employment status, and financial goals."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5} sx={{ ml: "auto", mt: { xs: 1, lg: 0 } }}>
            <SliderScreen
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Get instant free cibil score"
              description="Obtain a copy of your credit report and check your credit score. A higher credit score generally improves your chances of getting approved for a loan and may also affect the interest rate you receive."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "success",
                label: "Check Yours",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
