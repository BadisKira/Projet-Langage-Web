import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import KanbanHeader from "./KanbanHeader";
import KanbanTable from "./KanbanTable";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetOneKanbanQuery,
  useGetPublicKanbansQuery,
} from "../../features/kanban/KanbanApiSlice";
import Loading from "../../components/Loading";
import { useState } from "react";

// Verify if i'm allowed in this project

const Kanban = () => {
  const { id } = useParams();
  const {
    data: kanbans,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetPublicKanbansQuery(Number(id));
  const navigate = useNavigate();

  const kanban = kanbans ? kanbans.filter((kanban) => kanban.id == id)[0] : {};

  // React.useEffect(() => {
  //   if (isPrivate) {
  //     const userId =
  //       JSON.parse(localStorage.getItem("user")) &&
  //       JSON.parse(localStorage.getItem("user")).id;

  //     if (!userIds.includes(userId) && !creatorId == userId) navigate("/");
  //   }
  // }, []);
  console.log(isSuccess);
  console.log(kanban);

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
          {!isSuccess ? (
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
                id={kanban.id}
                nameK={kanban.name}
                idCreator={kanban.creatorId || "patrick"}
                privacy={kanban.isPrivate || "eer"}
                dateCreation={kanban.dateLimit}
                description={kanban.description}
              />

              <KanbanTable
                creatorId={kanban.creatorId}
                isPrivate={kanban.isPrivate}
                tasksList={kanban.taskLists}
                userIds={kanban.userIds}
              />
            </>
          )}
        </>
      )}
    </Stack>
  );
};

export default Kanban;
