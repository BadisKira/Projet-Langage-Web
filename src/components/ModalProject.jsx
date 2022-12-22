import { Paper, Popover, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";

import { useAddKanbanMutation } from "../features/kanban/KanbanApiSlice";

const LittelPaper = ({ label, deleteCol }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        padding: "5px",
        margin: "10px 5px",
        height: "30px",
      }}
    >
      {label !== "Stories" && label !== "Terminées" && (
        <ClearIcon
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "-5px",
            right: "-5px",
            fontSize: "12px",
            background: "rgba(0,0,0,.2)",
            borderRadius: "50%",
          }}
          onClick={() => deleteCol(label)}
        />
      )}
      {label}
    </Paper>
  );
};

const ModalProject = ({ open, setOpen }) => {
  const [addKanban, isLoading] = useAddKanbanMutation();

  const [projectInfo, setProjectInfo] = useState({
    creatorId: 3,
    name: "",
    isPrivate: true,
    description: "",
    creationDate: new Date(),
    dateLimit: "",
    taskLists: [
      { tasks: null, title: "Stories" },
      { tasks: null, title: "Terminées" },
    ],
    userIds: [],
  });

  const handleClick = async () => {
    try {
      await addKanban(projectInfo);
    } catch (error) {
      alert();
    }
  };

  const [newCol, setNewCol] = useState("");
  const handleChange = (e) => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
  };

  const deleteCol = (label) => {
    setProjectInfo({
      ...projectInfo,
      taskLists: projectInfo.taskLists.filter((col) => col.title !== label),
    });
  };

  const handleAddCol = () => {
    console.log(newCol);
    if (
      newCol === "" ||
      projectInfo.taskLists.includes({ title: newCol, tasks: null })
    )
      return;

    setProjectInfo({
      ...projectInfo,
      taskLists: [...projectInfo.taskLists, { title: newCol, tasks: null }],
    });
    setNewCol("");
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Popover
      id="btnProject"
      open={open}
      onClose={handleClose}
      anchorEl={document.querySelector(".project-btn")}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box
        display="flex"
        flexDirection={"column"}
        rowGap={1}
        padding={3}
        width="400px"
      >
        <TextField
          type="text"
          size="small"
          placeholder="Project Name"
          name="name"
          onChange={handleChange}
          value={projectInfo.name}
        />

        <TextField
          type="text"
          size="small"
          placeholder="Project Description"
          name="description"
          onChange={handleChange}
          value={projectInfo.description}
        />

        <FormControlLabel
          control={
            <Switch
              name="isPrivate"
              onChange={handleChange}
              value={projectInfo.isPrivate}
            />
          }
          label="private"
        />

        <TextField
          type={"date"}
          size="small"
          name="dateLimit"
          onChange={handleChange}
          value={projectInfo.dateLimit}
          placeholder="Date limit"
          fullWidth
        />

        <TextField
          placeholder="add a new col"
          size="small"
          value={newCol}
          onChange={(e) => {
            setNewCol(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleAddCol}>
                <Button>add</Button>
              </InputAdornment>
            ),
          }}
        />
        <Grid container display={"flex"} minHeight="75px">
          {projectInfo.taskLists.map((col) => (
            <Grid key={col.title}>
              <LittelPaper label={col.title} deleteCol={deleteCol} />{" "}
            </Grid>
          ))}
        </Grid>

        <Button
          onClick={handleClick}
          sx={{
            color: "white",
            background: "rgba(0,0,0,.3)",
            "&:hover": { background: "rgba(0,0,0,.35)" },
          }}
        >
          {" "}
          Create Project{" "}
        </Button>
      </Box>
    </Popover>
  );
};

export default ModalProject;
