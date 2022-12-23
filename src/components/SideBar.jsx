import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

const SideBar = ({ children, openSideBar = false, setOpenSideBar }) => {
  const [anchor] = React.useState("left");
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenSideBar(!openSideBar);
  };
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={openSideBar}
      onClose={toggleDrawer(anchor, false)}
      onOpen={setOpenSideBar}
    >
      {children}
    </SwipeableDrawer>
  );
};

export default SideBar;
