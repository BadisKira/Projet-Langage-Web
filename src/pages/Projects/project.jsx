import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
const Project = ({ id = 1 }) => {
  const [project, setProject] = React.useState({});
  const navigate = useNavigate();
  return (
    <Card elevation={5} sx={{ borderRadius: "20px" }}>
      <CardContent
        sx={{ cursor: "pointer", position: "relative" }}
        onClick={() => {
          // composant qui verfie que tout est bien
          navigate(`/project/${id}`);
        }}
      >
        <LockOutlinedIcon
          sx={{ fontSize: 18, position: "absolute", right: 10 }}
        />

        <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
          15/11/2022
        </Typography>
        <Typography variant="h6" component="div">
          Project !!
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Hammadache Badis
        </Typography>

        <Typography sx={{ fontSize: 11 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
