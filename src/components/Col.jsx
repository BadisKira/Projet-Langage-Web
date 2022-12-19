import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import { TransitionGroup } from "react-transition-group";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Task from "./Task.jsx";
import ModelTask from "./ModelTask.jsx";
import { useDeleteColMutation } from "../features/cols/ColApiSlice.js";
import { Droppable } from "react-beautiful-dnd";
import { useGetTasksQuery } from "../features/tasks/TaskSliceApi";
import { addNewCol } from "../features/cols/ColSlice.js";
import { useDispatch, useSelector } from "react-redux";
const Col = ({ nameCol, id, idKanban }) => {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetTasksQuery(id);

  const [openModalTask, setOpenModalTask] = React.useState(false);
  const [deleteCol] = useDeleteColMutation();
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   if (isSuccess) {
  //     console.log("disptach add new col");
  //     dispatch(addNewCol({ id: id, nameCol: nameCol, tasks }));
  //   }
  // }, [tasks]);

  return (
    <>
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
          overflowY: "auto",
          margin: "10px",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: "0.5rem",
          },
          "&::-webkit-scrollbar-track": {},
          "&::-webkit-scrollbar-thumb": {
            scrollPaddingBottom: "10px",
            backgroundColor: "rgba(0,0,0,.2)",
          },
        }}
      >
        <Stack>
          <Typography variant="h6" comp="h3" sx={{ marginBottom: "10px" }}>
            {nameCol}
          </Typography>
          <Button
            onClick={() => {
              setOpenModalTask(true);
            }}
          >
            Add a new Task +{" "}
          </Button>
          <Droppable droppableId={String(id)}>
            {(provided) => (
              <Stack ref={provided.innerRef} {...provided.droppableProps}>
                <TransitionGroup>
                  {isSuccess &&
                    tasks.map((task, index) => (
                      <Collapse key={task.nameT}>
                        <Task {...task} id={task.id} index={index} />
                      </Collapse>
                    ))}
                </TransitionGroup>
                {provided.placeholder}
              </Stack>
            )}
          </Droppable>
        </Stack>
        <IconButton
          onClick={async () => {
            // verifier que la colonne n'est pas vide
            if (isSuccess && tasks.length == 0) {
              await deleteCol(id);
            } else {
              alert("Move all tasks");
            }
          }}
          size="small"
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            cursor: "pointer",
          }}
        >
          <ClearIcon fontSize="1.1rem" />
        </IconButton>
      </Box>
      <ModelTask
        idCol={id}
        nameCol={nameCol}
        setOpenModalTask={setOpenModalTask}
        openModalTask={openModalTask}
      />
    </>
  );
};

export default Col;
