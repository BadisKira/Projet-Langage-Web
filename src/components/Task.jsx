import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";

const Task = ({
  name,
  desc = "",
  dateLimit = "19/11/2023",
  userName = "Badis Hammadache",
  importance = "red",
}) => {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        margin: "10px",
        borderTopColor: { importance },
        borderTop: "1px",
      }}
    >
      <Box
        sx={{ flex: 11, paddingLeft: "5px", "&:hover": { cursor: "pointer" } }}
      >
        <Typography variant="subtitle1" comp="p">
          {name}
        </Typography>
        <Typography variant="caption" comp="p">
          Date Limit : {dateLimit}
        </Typography>{" "}
        <br />
        <Typography variant="caption" comp="p">
          {userName}
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
