import React from "react";
import { Box, Fade, CircularProgress } from "@mui/material";

const Loading = ({ loading }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade
        in={loading}
        style={{
          transitionDelay: loading ? "100ms" : "0ms",
        }}
        unmountOnExit
      >
        <CircularProgress size={"50px"} />
      </Fade>
    </Box>
  );
};

export default Loading;
