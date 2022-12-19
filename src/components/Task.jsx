import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";

import { Draggable } from "react-beautiful-dnd";

const Task = ({
  id,
  nameT,
  index,
  descriptionT,
  nameCol,
  idCol,
  dateLimit,
  username,
  importance,
}) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          elevation={7}
          sx={{
            display: "flex",
            margin: "10px",
            borderTopColor: { importance },
            borderTop: "1px",
            marginTop: "5px",
          }}
        >
          <Box
            sx={{
              flex: 11,
              paddingLeft: "5px",
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Typography variant="subtitle1" comp="p">
              {nameT}
            </Typography>
            <Typography variant="caption" comp="p">
              Date Limit : {dateLimit}
            </Typography>{" "}
            <br />
            <Typography variant="caption" comp="p">
              {username}
            </Typography>
            <Typography variant="subtitle2" comp="p">
              {descriptionT}
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
            <IconButton onClick={() => {}}>
              <ModeEditIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Draggable>
  );
};

export default Task;
