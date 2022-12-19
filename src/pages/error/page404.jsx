import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Page404 = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>ERROR 404 , page not found</Typography>
    </Box>
  );
};

export default Page404;
