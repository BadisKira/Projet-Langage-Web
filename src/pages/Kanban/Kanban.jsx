import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import KanbanHeader from "./KanbanHeader";
import KanbanTable from "./KanbanTable";
import { Navigate, useParams } from "react-router-dom";
import { useGetOneKanbanQuery } from "../../features/kanban/KanbanApiSlice";
import Loading from "../../components/Loading";

// Verify if i'm allowed in this project

const Kanban = () => {
  const { id } = useParams();
  const {
    data: kanban,
    isLoading,
    isError,
    error,
  } = useGetOneKanbanQuery(Number(id));

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
            <h1>ERRROROROROR </h1>
          ) : (
            <>
              <KanbanHeader
                id={id}
                nameK={kanban[0].nameK}
                idCreator={kanban[0].idCreator}
                privacy={kanban[0].privacy}
                dateCreation={kanban[0].dateCreation}
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
