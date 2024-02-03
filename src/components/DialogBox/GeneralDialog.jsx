import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function GeneralDialog(props) {
    const toggleModal = () => props.setopen(!props.open);
    return (
        <MKBox component="section" py={6}>
            <Container>
                <Modal open={props.open} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
                    <Slide direction="down" in={props.open} timeout={500}>
                        <MKBox
                            position="relative"
                            width="1000px"
                            display="flex"
                            flexDirection="column"
                            borderRadius="xl"
                            bgColor="white"
                            shadow="xl"
                        >
                            <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                                <MKTypography variant="h5">{props.title}</MKTypography>
                                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
                            </MKBox>
                            <Divider sx={{ my: 0 }} />
                            <MKBox p={2}>
                                {props.component}
                            </MKBox>
                            <Divider sx={{ my: 0 }} />
                            <MKBox display="flex" justifyContent="space-between" p={1.5}>
                                <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                                    close
                                </MKButton>
                                <MKButton variant="gradient" color="info">
                                    save changes
                                </MKButton>
                            </MKBox>
                        </MKBox>
                    </Slide>
                </Modal>
            </Container>
        </MKBox>
    );
}

export default GeneralDialog;