import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Col from "../../components/Col";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Loading from "../../components/Loading";
import { Droppable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";

import { IconButton, TextField } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";

const KanbanTable = ({ tasksList, userIds, isPrivate, creatorId }) => {
  const [nameCol, setNameCol] = React.useState("");
  const [cols, setCols] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    setCols(tasksList);
    console.log(tasksList);
  }, []);

  const onDragEnd = (result) => {
    /* if (!JSON.parse(localStorage.getItem("user"))) return;
    const userId = JSON.parse(localStorage.getItem("user")).id;
    if (isPrivate && (!userIds.includes(userId) || userId != creatorId)) return; */

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    let sourceList = cols.filter((col) => col.id == source.droppableId)[0];
    let destinationList = cols.filter(
      (col) => col.id == destination.droppableId
    )[0];

    let draggingTask = sourceList.tasks.filter(
      (task) => task.id == draggableId
    )[0];

    if (source.droppableId == destination.droppableId) {
      sourceList.tasks.splice(source.index, 1);
      destinationList.tasks.splice(destination.index, 0, draggingTask);
    } else {
      sourceList.tasks.splice(source.index, 1);
      destinationList.tasks.splice(destination.index, 0, draggingTask);

      // ajouter la requete qui modifie la colonne de la task
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
        {cols.length == 0 ? (
          <Loading />
        ) : (
          <>
            {cols.map((col) => (
              <Col key={col.id} idKanban={id} {...col} />
            ))}
          </>
        )}
      </Box>
    </DragDropContext>
  );
};

export default KanbanTable;
