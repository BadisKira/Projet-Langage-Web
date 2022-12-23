import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useModifyTaskMutation,
} from "../features/tasks/TaskSliceApi";

import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";

const ModelTask = ({
  openModalTask,
  setOpenModalTask,
  idCol,
  title,
  taskInfo = null,
  users = [],
}) => {
  const [addTask, isLoading, isError, isSuccess] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [modifyTask] = useModifyTaskMutation();

  const [mode, setMode] = useState(taskInfo == null ? 0 : 1); // 0 create task 1 update task
  const [task, setTask] = React.useState({
    id: "",
    nameT: "",
    descriptionT: "",
    username: "",
    dateLimit: new Date(),
    title: title,
    idCol: idCol,
  });
  const handelChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handelClose = () => {
    setOpenModalTask(false);
    setTask({
      nameT: taskInfo.nameT || "",
      descriptionT: taskInfo.descriptionT || "",
      username: taskInfo.username || "",
      dateLimit: taskInfo.dateLimit || null,
      title: title,
      idCol: idCol,
    });
  };
  const handleClick = async () => {
    console.log(task);
    try {
      if (mode == 0) await addTask(task);
      else if (mode == 1) await modifyTask(task);
      handelClose();
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      handelClose();
    } catch (error) {
      alert("error");
    }
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
              name={"nameT"}
              value={task.nameT}
            />
            <TextField
              onChange={handelChange}
              size="small"
              type="text"
              multiline
              rows={3}
              maxRows={3}
              label="Description"
              value={task.descriptionT}
              name="descriptionT"
            />
          </Box>

          <Stack rowGap={2} mt={2}>
            <Select
              onChange={handelChange}
              label="Task's user"
              size="small"
              value={task.username}
              name="username"
            >
              {users.map((user, index) => {
                <MenuItem key={index} value={user.userId}>
                  {user.username}
                </MenuItem>;
              })}
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
        <Button marginRight={2} onClick={handleClick}>
          Apply
        </Button>
        <Button
          sx={{
            marginLeft: "5px",
          }}
          onClick={handelClose}
        >
          Close{" "}
        </Button>
        {mode == 1 && (
          <Button
            sx={{
              background: "red",
              color: "white",
              marginLeft: "5px",
              "&:hover": { background: "red" },
            }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModelTask;
