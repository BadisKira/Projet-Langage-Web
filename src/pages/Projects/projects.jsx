import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useMediaQuery, Container } from "@mui/material";
import SideBar from "../../components/SideBar";
import ContentSidebar from "./contentSidebar";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Project from "./project";
const Projects = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"));
  const [openSideBar, setOpenSideBar] = React.useState(false);
  return (
    <Container maxWidth={"xl"} sx={{ marginTop: "20px" }}>
      {mediaQuery && (
        <Box>
          {" "}
          je suis la boxe elle meme{" "}
          <Button onClick={() => setOpenSideBar(true)}>
            clique ici mon reuf
          </Button>{" "}
        </Box>
      )}
      <Grid container>
        {mediaQuery ? (
          <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}>
            <ContentSidebar />
          </SideBar>
        ) : (
          <>
            <Grid item xs={0} sm={4} md={4} lg={3}>
              <Stack>
                <ContentSidebar />
              </Stack>
            </Grid>
          </>
        )}

        <Grid item xs={12} sm={8} md={8} lg={9} paddingLeft={2}>
          <Typography
            variant="h3"
            comp="h2"
            borderBottom={"1px solid rgba(0,0,0,.5)"}
          >
            The Projects
          </Typography>
          <Grid
            container
            alignItems={"center"}
            columnSpacing={4}
            rowSpacing={3}
          >
            {["p", "f", "cul", "mo", "lp", "a", "z", "q", "r", "m"].map((l) => (
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Project />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
