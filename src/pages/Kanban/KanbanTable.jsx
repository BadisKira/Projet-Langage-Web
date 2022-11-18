import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Col from "../../components/Col";
import Typography from "@mui/material/Typography";

const KanbanTable = () => {
  return (
    <Box
      display={"flex"}
      alignItems="start"
      sx={{
        paddingBottom: "25px",
        height: " calc(100vh - 115px)",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "0.5rem",
          height: "0.7rem",
        },
        "&::-webkit-scrollbar-track": {},
        "&::-webkit-scrollbar-thumb": {
          scrollPaddingBottom: "10px",

          backgroundColor: "rgba(0,0,0,.2)",
        },
      }}
    >
      <Col name="column 1" />
      <Col name="column 1" />
      <Col name="column 1" />
      <Col name="column 1" />
      <Col name="column 1" />
      <Col name="column 1" />
      <Col name="column 1" />
      <Col name="column 1" />
      <Col name="column 1" />
    </Box>
  );
};

export default KanbanTable;
