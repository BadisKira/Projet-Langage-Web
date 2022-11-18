import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Task = ({ name, desc = "" }) => {
  return (
    <Paper elevation={5} sx={{ display: "flex", margin: "10px" }}>
      <Box
        sx={{ flex: 11, paddingLeft: "5px", "&:hover": { cursor: "pointer" } }}
      >
        <Typography variant="subtitle1" comp="p">
          {name}
        </Typography>
        <Typography variant="subtitle2" comp="p">
          {desc}
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <IconButton
          onClick={() => {
            console.log("open modal");
          }}
        >
          <ModeEditIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Task;
