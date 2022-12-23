import React from "react";
import { Box } from "@mui/material";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { updateClient } from '../../redux/clientSlice';
import { useNavigate } from "react-router-dom";

function ModifyForm() {
  const dispatch = useDispatch();

  const [clientInfo, setClientInfo] = useState(JSON.parse(localStorage.getItem("user")));

  const navigate = useNavigate();


  const handelChangeClientInfo = (e) => {
    setClientInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handelSClickUpdate = (e) => {
    e.preventDefault();
  }
  return (
    <Box
      component="form"
      noValidate
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handelChangeClientInfo}
            value={clientInfo.firstName || ""}
            size="small"
            name="nom"
            required
            fullWidth
            id="NomModifier"
            label="firstName"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handelChangeClientInfo}
            value={clientInfo.lastName || ""}
            size="small"
            required
            fullWidth
            id="PrenomModifier"
            label="Last Name"
            name="lastName"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handelChangeClientInfo}
            value={clientInfo.username}
            size="small"
            required
            fullWidth
            label="User Name"
            name="username"
            type="username"
          />
        </Grid>

      </Grid>
      <Button
        variant="contained"
        sx={{
          mt: 3, mb: 2, backgroundColor: "rgba(0,0,0,.3) ", "&:hover": {
            backgroundColor: "rgba(0,0,0,.35)"
          }, width: "50%"
        }}
        onClick={handelSClickUpdate}
      >
        Enregistrer
      </Button>
    </Box>
  );
}

export default ModifyForm;
