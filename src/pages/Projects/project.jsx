import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
const Project = ({
  id,
  creatorId,
  dateLimit,
  isPrivate,
  name,
  description,
  userIds,
}) => {
  console.log("propos =>");
  const [project, setProject] = React.useState({});
  const userId = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user")).id
    : null;
  const navigate = useNavigate();
  return (
    <Card elevation={5} sx={{ borderRadius: "20px" }}>
      <CardContent
        sx={{ cursor: "pointer", position: "relative" }}
        onClick={() => {
          // composant qui verfie que tout est bien
          if (isPrivate == true) {
            if (userIds.includes(userId) || userId == creatorId) {
              navigate(`/project/${id}`);
            } else return;
          }
          if (isPrivate == false || isPrivate == null)
            navigate(`/project/${id}`);
        }}
      >
        {isPrivate ? (
          <LockOutlinedIcon
            sx={{ fontSize: 18, position: "absolute", right: 10 }}
          />
        ) : (
          <LockOpenIcon
            sx={{ fontSize: 18, position: "absolute", right: 10 }}
          />
        )}

        <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
          {dateLimit}
        </Typography>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {creatorId}
        </Typography>

        <Typography sx={{ fontSize: 11 }}>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
