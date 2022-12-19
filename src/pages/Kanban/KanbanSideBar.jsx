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
  idCreator,
  dateCreation,
  id,
  privacy,
}) => {
  const amICreator = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum,
          nostrum amet ratione magnam in alias non perferendis omnis velit.
          Distinctio dolore harum officia, tempora vitae sequi laborum
          repellendus amet!
        </Typography>
        {/* Invite a person  */}

        {amICreator && (
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

        {/* End invitation */}

        {/**Trie  ?????? */}
        <Box
          display={"flex"}
          flexDirection="column"
          alignItems={"start"}
          marginY={3}
          paddingBottom={3}
        >
          <Typography variant="h6" comp="p">
            Sort By
          </Typography>
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="Order A-z"
            labelPlacement="start"
          />
          <FormControlLabel
            value={"dd"}
            control={<TextField type={"date"} sx={{ marginLeft: "5px" }} />}
            label="date limit  "
            labelPlacement="start"
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
            sort
          </Button>
        </Box>
        {/**END Tri  */}
      </Box>
    </SideBar>
  );
};

export default KanbanSideBar;
