import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import KanbanHeader from "./KanbanHeader";
import KanbanTable from "./KanbanTable";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneKanbanQuery } from "../../features/kanban/KanbanApiSlice";
import Loading from "../../components/Loading";

// Verify if i'm allowed in this project

const Kanban = ({
  id,
  creatorId,
  dateLimit,
  isPrivate,
  name,
  description,
  userIds,
}) => {
  // const { id } = useParams();
  // const {
  //   data: kanban,
  //   isLoading,
  //   isError,
  //   error,
  // } = useGetOneKanbanQuery(Number(id));
  const navigate = useNavigate();
  const isLoading = false;
  const isError = false;
  const kanban = [{}];

  React.useEffect(() => {
    if (isPrivate) {
      const userId =
        JSON.parse(localStorage.getItem("user")) &&
        JSON.parse(localStorage.getItem("user")).id;

      if (!userIds.includes(userId) && !creatorId == userId) navigate("/");
    }
  }, []);

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
                id={id}
                nameK={name}
                idCreator={creatorId || "patrick"}
                privacy={isPrivate || "eer"}
                dateCreation={dateLimit}
              />

              {/* <KanbanTable taskLists={taskLists} userIds={userIds} /> */}
            </>
          )}
        </>
      )}
    </Stack>
  );
};

export default Kanban;
