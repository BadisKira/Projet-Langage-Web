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
        // position: "absolute",
        // top: "50%",
        // left: "50%",
        // transform: "translate(-50% ,-50%)",
        // width: "100%",
        // height: "100%",
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
