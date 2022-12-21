import { Paper, Popover, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";

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
  const [projectInfo, setProjectInfo] = useState({
    idCreator: "",
    projectName: "",
    privacy: true,
    cols: ["Stories", "Terminées"],
  });

  const [newCol, setNewCol] = useState("");
  const handleChange = (e) => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
  };

  const deleteCol = (label) => {
    setProjectInfo({
      ...projectInfo,
      cols: projectInfo.cols.filter((col) => col !== label),
    });
  };

  const handleAddCol = () => {
    console.log(newCol);
    if (newCol === "" || projectInfo.cols.includes(newCol)) return;
    setProjectInfo({ ...projectInfo, cols: [...projectInfo.cols, newCol] });
    setNewCol("");
  };
  const handleClick = () => {};
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
      <Box display="flex" flexDirection={"column"} padding={3} width="400px">
        <TextField
          type="text"
          size="small"
          placeholder="Project Name"
          name="projectName"
          onChange={handleChange}
          value={projectInfo.projectName}
        />
        <FormControlLabel
          control={
            <Switch
              name="privacy"
              onChange={handleChange}
              value={projectInfo.privacy}
            />
          }
          label="private"
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
          {projectInfo.cols.map((col) => (
            <Grid key={col}>
              <LittelPaper label={col} deleteCol={deleteCol} />{" "}
            </Grid>
          ))}
        </Grid>

        <Button>Create Project </Button>
      </Box>
    </Popover>
  );
};

export default ModalProject;
