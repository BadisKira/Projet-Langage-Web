import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import { TransitionGroup } from "react-transition-group";

import Task from "./Task.jsx";

const Tasks = [
  { id: 1, name: "Name 1 ", desc: "" },
  { id: 2, name: "Name 2", desc: "lorem lorem lorem " },
  { id: 3, name: "Name 3 ", desc: "lorem lorem lorem lorem " },
];
const Col = ({ name }) => {
  const [tasks, setTasks] = React.useState(Tasks);
  return (
    <Box
      sx={{
        maxWidth: "400px",
        background: "rgba(0,0,0,0.2)",
        borderRadius: "5px",
        padding: "10px",
        width: "300px",
        minWidth: "280px",
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
        <Stack>
          <TransitionGroup>
            {tasks.map((task) => (
              <Collapse key={Task.id}>
                <Task name={task.name} desc={task.desc} />
              </Collapse>
            ))}
          </TransitionGroup>
        </Stack>
        <Button
          onClick={() => {
            setTasks([
              ...tasks,
              { id: 4, name: "Name 3 ", desc: "lorem lorem lorem lorem " },
            ]);
            console.log(tasks);
          }}
        >
          Add a new Task +{" "}
        </Button>
      </Stack>
    </Box>
  );
};

export default Col;
