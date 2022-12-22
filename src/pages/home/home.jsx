import React from "react";
import { Box, Grid, Container, Stack, Typography, Button } from "@mui/material";
import ImageLog from "../../assets/images/imageLog.jpg";

const reviews = [
  {
    id: 1,
    name: "Celena",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Aouaouche",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Kamal",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Jean",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "Kitta",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    name: "Kong",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 7,
    name: "Farid",
    review:
      "Lorem ipsum dolor sit amet consectetur consectetur adipisicingadipisicing elit.",
  },
  {
    id: 8,
    name: "boulin",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicingconsectetur adipisicingconsectetur adipisicing elit.",
  },
  {
    id: 9,
    name: "zwerg",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Home = () => {
  return (
    <Container>
      <Grid container columnSpacing={{ xs: 1, md: 2, lg: 4 }} my={5}>
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
                background: "rgba(0,0,0,.3)",
                "&:hover": { background: "rgba(0,0,0,.35)" },
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
              height: "400px",
              width: "auto",
              maxWidth: "100%",
            }}
            src={ImageLog}
            alt="Image icon"
          />
        </Grid>
      </Grid>

      {/**THE SECOND PART OF THIS FUCKING  */}

      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection="column"
        marginTop={5}
      >
        <Typography variant="h3" component={"h2"} my={5}>
          Our Best reviews{" "}
        </Typography>
        <Grid container>
          {reviews.map(({ id, name, review }) => {
            return (
              <Grid item key={id} xs={6} md={4}>
                <Stack
                  sx={{
                    width: "80%",
                    margin: "15px auto",
                    borderRadius: "15px 0px 15px 0px",
                    padding: "10px",
                    background: "rgba(0,0,0,.3)",
                    boxShadow:
                      " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                  }}
                >
                  <Typography
                    textAlign={"center"}
                    variant="body1"
                    component={"h2"}
                  >
                    {name} :
                  </Typography>
                  <Typography variant="subtitle2" component={"p"}>
                    "{review}"
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
