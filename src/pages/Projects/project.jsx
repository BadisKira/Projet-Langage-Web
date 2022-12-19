import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Project = ({ id = 1 }) => {
  const [project, setProject] = React.useState({});
  const navigate = useNavigate();
  return (
    <Card elevation={3}>
      <CardContent
        sx={{ cursor: "pointer" }}
        onClick={() => {
          navigate(`/project/${id}`);
        }}
      >
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          private
        </Typography>
        <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
          15/11/2022
        </Typography>
        <Typography variant="h6" component="div">
          Project Lpo de merde !!
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Hammadache Badis
        </Typography>

        <Typography sx={{ fontSize: 11 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci, fugit.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Adipisci, fugit.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
