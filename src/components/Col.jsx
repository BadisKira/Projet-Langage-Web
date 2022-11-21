import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import { TransitionGroup } from "react-transition-group";

import Task from "./Task.jsx";
import ModelTask from "./ModelTask.jsx";

const Tasks = [];
const Col = ({ name }) => {
  const [tasks, setTasks] = React.useState(Tasks);
  const [task, setTask] = React.useState({
    name: "",
    desc: "",
    user: "",
    dateLimit: new Date(),
  });

  const [openModalTask, setOpenModalTask] = React.useState();
  return (
    <React.Fragment>
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
            {name}
          </Typography>
          <Button
            onClick={() => {
              setOpenModalTask(true);
              console.log(tasks);
            }}
          >
            Add a new Task +{" "}
          </Button>
          <Stack>
            <TransitionGroup>
              {tasks.map((task) => (
                <Collapse key={Task.id}>
                  <Task name={task.name} desc={task.desc} />
                </Collapse>
              ))}
            </TransitionGroup>
          </Stack>
        </Stack>
      </Box>
      <ModelTask
        setTasks={setTasks}
        task={task}
        setTask={setTask}
        tasks={tasks}
        setOpenModalTask={setOpenModalTask}
        openModalTask={openModalTask}
      />
    </React.Fragment>
  );
};

export default Col;
