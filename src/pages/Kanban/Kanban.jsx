import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Col from "../../components/Col";
import { Typography } from "@mui/material";
import KanbanHeader from "./KanbanHeader";
import KanbanTable from "./KanbanTable";
const Kanban = () => {
  return (
    <Stack
      sx={{
        height: "calc(100vh - 50px)",
      }}
    >
      <KanbanHeader />
      <KanbanTable />
    </Stack>
  );
};

export default Kanban;
