import React from "react";
import { Stack, Box, Container, Grid, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const iconsStyle = {
  fontSize: "1.5rem",
  margin: "10px",
};
const Footer = () => {
  return (
    <Stack bgcolor="rgba(0,0,0,.1)" marginTop={2}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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
        </Box>
        <Grid container columnSpacing={3} padding={2}>
          <Grid item xs={12} lg={4}>
            <Typography variant="h3" component={"h2"}>
              Frello
            </Typography>
            <Typography variant="subtitle1" component={"h4"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              voluptatem unde similique vitae, illo iusto.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            flexDirection="column"
            alignItems={{ sx: "start", md: "center" }}
            paddingTop={1}
          >
            <Typography variant="h5" component={"h2"} mb={2}>
              Useful Links
            </Typography>
            <ul>
              <li>
                <Link> Link number one hero</Link>
              </li>
              <li>
                <Link> Link number To hero </Link>
              </li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            display={"flex"}
            flexDirection="column"
            alignItems={{ sx: "start", md: "center" }}
            paddingTop={1}
          >
            <Typography variant="h5" component={"h2"} mb={2}>
              Contact-Us
            </Typography>
            <ul>
              <li>
                <Link> Hammadache Badis</Link>
              </li>
              <li>
                <Link> Berkay Karakaya </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
