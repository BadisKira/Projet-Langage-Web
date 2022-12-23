import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KanbanSideBar from "./KanbanSideBar";

const KanbanHeader = ({
  nameK,
  idCreator,
  dateCreation,
  privacy,
  id,
  description,
}) => {
  const [openSideBar, setOpenSideBar] = React.useState(false);
  return (
    <Box
      sx={{
        background: "rgba(0,0,0,.1)",
        width: "100%",
        height: "45px",
        display: "flex",
        alignItems: "center",
        padding: "0px 10px",
      }}
    >
      <IconButton
        onClick={() => {
          setOpenSideBar(true);
        }}
      >
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
      <KanbanSideBar
        nameK={nameK}
        idCreator={idCreator}
        dateCreation={dateCreation}
        id={id}
        description={description}
        privacy={privacy}
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      />
    </Box>
  );
};

export default KanbanHeader;
