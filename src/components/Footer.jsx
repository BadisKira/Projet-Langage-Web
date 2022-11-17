import React from "react";
import { Box, Container, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const iconsStyle = {
  fontSize: "1.2rem",
  margin: "0px 5px",
};
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        marginTop: 10,
        color: "white",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: "50px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={12} md={8}>
            TOUT LES DROITS SONT PRESEERVE
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex" }}
            justifyContent="flex-end"
            alignItems={"center"}
          >
            <a href="">
              <InstagramIcon sx={iconsStyle} />
            </a>
            <a href="">
              <TwitterIcon sx={iconsStyle} />
            </a>
            <a href="">
              <LinkedInIcon sx={iconsStyle} />
            </a>
            <a href="">
              <GitHubIcon sx={iconsStyle} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
