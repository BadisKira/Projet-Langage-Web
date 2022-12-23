import React from "react";
import SideBar from "../../components/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const KanbanSideBar = ({
  openSideBar = false,
  setOpenSideBar,
  nameK,
  description,
  idCreator,
  dateCreation,
  id,
  privacy,
  users = [
    { id: 1, username: "badis" },
    { id: 2, username: "karakaya" },
  ],
}) => {
  const amICreator = () => {
    const userId = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user")).id
      : null;
    console.log(userId);
    if (userId == null) return false;
    if (idCreator != userId) return false;
    return true;
  };
  return (
    <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}>
      <Box
        sx={{
          height: "100%",
          width: "320px",
          padding: "20px 15px 20px 15px",
        }}
      >
        <Typography variant="h4" comp="h1" marginBottom={3}>
          {nameK}
        </Typography>
        <Typography variant="body2" comp="h2">
          {privacy === 1 ? "private" : "public"} project
        </Typography>

        <Typography variant="h6" comp="h2" fontWeight={"bold"}>
          {" "}
        </Typography>
        <Typography variant="body2" comp="h2" fontWeight={"bold"}>
          {dateCreation}
        </Typography>

        <Typography variant="body2" comp="h2" marginTop={2}>
          {description}
        </Typography>
        {/* Invite a person  */}

        {amICreator() && (
          <Box
            display={"flex"}
            flexDirection="column"
            alignItems={"start"}
            marginY={4}
          >
            <TextField
              label="invité"
              variant="outlined"
              size="small"
              fullWidth
              placeholder="username"
            />
            <Button
              size="small"
              variant="contained"
              sx={{
                alignSelf: "end",
                marginTop: "5px",
                textTransform: "capitalize",
              }}
            >
              Invite
            </Button>
          </Box>
        )}

        <Box marginTop={2}>
          <Typography variant="h6">Participants : </Typography>

          {users.map((user, index) => (
            <Typography sx={{ marginTop: 1 }} key={index} variant="subtitle1">
              {user.username}
            </Typography>
          ))}
        </Box>
      </Box>
    </SideBar>
  );
};

export default KanbanSideBar;
