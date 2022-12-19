import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Col from "../../components/Col";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Loading from "../../components/Loading";
import { Droppable } from "react-beautiful-dnd";
import {
  useAddNewColMutation,
  useGetColsFromKanbanQuery,
} from "../../features/cols/ColApiSlice";
import { IconButton, TextField } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";
import { useGetTasksQuery } from "../../features/tasks/TaskSliceApi";
const KanbanTable = ({ id }) => {
  const [nameCol, setNameCol] = React.useState("");
  const {
    data: cols,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetColsFromKanbanQuery(id);

  const [addNewCol] = useAddNewColMutation();
  /*
  const onDragEnd = (result) => {
    // TaskSlice : y'aura juste ses informatons ou je ne sais pas mais peute etre aussi ca ???
    // Colslice : chaque col aura un nom , id , idKanban , et une liste de taches
    // Kanbans Project : idKanban , idCreator , [id users ] , dateLimit..............

    const { destination, source, draggableId } = result;
    //console.log(destination);
    console.log("destination", destination);
    console.log("source", source);
    console.log("draggableId", draggableId);

    // const { data: tasks } = useGetTasksQuery(source.droppableId);

    const sourceList = cols[source.droppableId - 1]; // c'est la colonne source ?
    const destinationList = cols[destination.droppableId - 1]; // c'est la colonne destination ?

    const draggingTask = source.index;

    if (!destination) {
      return;
    }

    if (source.draggableId == destination.draggableId) {
      // same col
      //sourceList.splice(source.index, 1);
      //destinationList.splice(destination.index, 0, draggingCard);
    }
  };
  */

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    //console.log("destination", destination, "source", source, draggableId);
    console.log(result);
    if (!destination) {
      return;
    }

    const sourceList = cols[source.droppableId];
    const destinationList = cols[destination.droppableId];

    const draggingCard = sourceList[source.index];

    /* const draggingCard = sourceList.cards.filter(   c'est le souci 
      (card) => card.id === draggableId
    )[0];*/

    // if (source.droppableId === destination.droppableId) {
    //   sourceList.cards.splice(source.index, 1);
    //   destinationList.cards.splice(destination.index, 0, draggingCard);
    //   const newSate = {
    //     ...data,
    //     lists: {
    //       ...data.lists,
    //       [sourceList.id]: destinationList,
    //     },
    //   };
    //   setData(newSate);
    // } else {
    //   sourceList.cards.splice(source.index, 1);
    //   destinationList.cards.splice(destination.index, 0, draggingCard);
    // faire le requete qui fait la modification du state de l'etat
    //   const newState = {
    //     ...data,
    //     lists: {
    //       ...data.lists,
    //       [sourceList.id]: sourceList,
    //       [destinationList.id]: destinationList,
    //     },
    //   };
    //   setData(newState);
    // }
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
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {isError == true ? (
              <h1> JE SUIS UN ERREUR {error} </h1>
            ) : (
              <>
                {cols.map((col) => (
                  <Col key={col.id} {...col} />
                ))}
              </>
            )}
          </>
        )}

        {/* CE QUE J'APPELLE UN COL ADD */}
        <Box
          sx={{
            maxWidth: "400px",
            background: "rgba(0,0,0,0.2)",
            borderRadius: "5px",
            padding: "10px",
            width: "250px",
            minWidth: "250px",
            height: "auto",
            maxHeight: "95%",
            margin: "10px",
          }}
        >
          <TextField
            type={"text"}
            variant="outlined"
            name="namecol"
            value={nameCol}
            onChange={(e) => {
              setNameCol(e.target.value);
            }}
            label="new Column"
            InputProps={{
              endAdornment: (
                <IconButton
                  position="end"
                  size="small"
                  onClick={async () => {
                    if (nameCol === "" || typeof nameCol === "undefined")
                      return;
                    try {
                      const dataCol = await addNewCol({
                        nameCol: nameCol,
                        idKanban: id,
                      });
                      setNameCol("");
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  <AddTaskIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
        {/**LA FIN DE CE QUE J'APPELLE UN COL ADD */}
      </Box>
    </DragDropContext>
  );
};

export default KanbanTable;
