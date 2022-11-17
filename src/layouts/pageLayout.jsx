import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Stack } from "@mui/material";
const PageLayout = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection="column"
      justifyContent={"space-between"}
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Stack>
  );
};

export default PageLayout;
