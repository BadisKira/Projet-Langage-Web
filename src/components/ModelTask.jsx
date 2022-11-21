import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import React from "react";
import { Select, MenuItem } from "@mui/material";

const ModelTask = ({
  openModalTask,
  setOpenModalTask,
  task,
  setTask,
  setTasks,
  tasks,
}) => {
  const handelChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handelClose = () => {
    setOpenModalTask(false);
    setTask({
      name: "",
      desc: "",
      user: "",
      dateLimit: null,
    });
  };
  const handelAdd = () => {
    setTasks([...tasks, { id: tasks.length + 1, ...task }]);
    handelClose();
  };
  return (
    <Dialog open={openModalTask}>
      <DialogTitle
        height="45px"
        mb={2}
        display="flex"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Typography variant="h6" comp="h4">
          Add a new Task
        </Typography>
        <Box>
          <TextField type="color" size="small" />
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ height: "250px", width: "450px" }}>
          <Box
            display="flex"
            alignItems={"start"}
            justifyContent="space-between"
          >
            <TextField
              onChange={handelChange}
              size="small"
              type="text"
              label="task name"
              name={"name"}
              value={task.name}
            />
            <TextField
              onChange={handelChange}
              size="small"
              type="text"
              multiline
              rows={3}
              maxRows={3}
              label="Description"
              value={task.desc}
              name="desc"
            />
          </Box>

          <Stack rowGap={2} mt={2}>
            <Select
              onChange={handelChange}
              label="Task's user"
              size="small"
              value={task.user}
              name="user"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <TextField
              onChange={handelChange}
              size="small"
              type="date"
              value={task.dateLimit}
              name="dateLimit"
            />
          </Stack>
        </Box>
        <Button onClick={handelAdd}>Create the task</Button>
        <Button onClick={handelClose}>Close sa mere</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ModelTask;
