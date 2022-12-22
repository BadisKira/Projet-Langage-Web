import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import KanbanHeader from "./KanbanHeader";
import KanbanTable from "./KanbanTable";
import { Navigate, useParams } from "react-router-dom";
import { useGetOneKanbanQuery } from "../../features/kanban/KanbanApiSlice";
import Loading from "../../components/Loading";

// Verify if i'm allowed in this project

const Kanban = () => {
  const { id } = useParams();
  // const {
  //   data: kanban,
  //   isLoading,
  //   isError,
  //   error,
  // } = useGetOneKanbanQuery(Number(id));
  const isLoading = false;
  const isError = false;
  const kanban = [{}];
  return (
    <Stack
      sx={{
        height: "calc(100vh - 50px)",
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isError ? (
            <Box
              sx={{
                width: "100%",
                height: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3"> No, Kanban</Typography>
            </Box>
          ) : (
            <>
              <KanbanHeader
                id={id || 9}
                nameK={kanban[0].nameK || "ee"}
                idCreator={kanban[0].idCreator || "patrick"}
                privacy={kanban[0].privacy || "eer"}
                dateCreation={kanban[0].dateCreation || "17-10-2029"}
              />

              <KanbanTable id={Number(id)} />
            </>
          )}
        </>
      )}
    </Stack>
  );
};

export default Kanban;
