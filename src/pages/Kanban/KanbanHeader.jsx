import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const KanbanHeader = ({
  name = "The best project",
  creator = "Badis Hammadache",
}) => {
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
      <Typography variant="h5" comp="h2" fontWeight={"bold"} mr={2}>
        {name}
      </Typography>
      <Typography variant="subtitle1" comp="h4" mr={2}>
        {creator}
      </Typography>
      <Typography variant="subtitle1" comp="h4" fontWeight={"bold"} mr={2}>
        Created The : lun 17 Nov 2022
      </Typography>
      <Typography marginLeft={"auto"} marginRight={3}>
        Prive ou public
      </Typography>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default KanbanHeader;
