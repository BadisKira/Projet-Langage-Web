import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Stack } from "@mui/material";
const KanbanLayout = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection="column"
      sx={{
        height: "100vh",
      }}
    >
      <Navbar />
      <Outlet />
    </Stack>
  );
};

export default KanbanLayout;
