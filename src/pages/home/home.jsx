import React from "react";
import { Box, Grid, Container, Stack, Typography, Button } from "@mui/material";
import ImageLog from "../../assets/images/imageLog.jpg";

const Home = () => {
  return (
    <Container>
      <Grid container columnSpacing={{ xs: 1, md: 2, lg: 4 }}>
        <Grid item xs={12} md={5} lg={6} sx={{}}>
          <Stack
            sx={{
              height: "100%",
            }}
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
          >
            <Typography variant="h3" component={"h2"} sx={{}}>
              Move fast, stay aligned,
              <br />
              and build better - together
            </Typography>
            <Typography variant="subtitle1" component={"h4"}>
              The #1 software development tool used by agile teams
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "150px",
                textTransform: "capitalize",
                textAlign: "center",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              Come with us
            </Button>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              height: "500px",
              width: "auto",
            }}
            src={ImageLog}
            alt="Image icon"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
