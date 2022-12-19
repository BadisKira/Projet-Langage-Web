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
  //const clientData = useSelector(state => state.client);
  const [clientInfo, setClientInfo] = useState({ nom: "Lamriou", prenom: "Celena", phone: "05123269", idClient: '15', "email": "Hammadache@badis.com" });
  const clientData = { nom: "Lamriou", prenom: "Celena", phone: "05123269", idClient: '15', "email": "Hammadache@badis.com" }

  const navigate = useNavigate();
  const [emailBase, setEmailBase] = useState({ emailBase: "" });

  // useEffect(() => {
  //   setClientInfo(clientData);
  //   setEmailBase(clientData.email);
  // }, [clientData]);

  const handelChangeClientInfo = (e) => {
    setClientInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handelSClickUpdate = (e) => {
    e.preventDefault();
    //dispatch(updateClient({ ...clientInfo, emailBase: emailBase })).then(res => {
    //navigate('/login');

    //})
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
            value={clientInfo.nom}
            size="small"
            name="nom"
            required
            fullWidth
            id="NomModifier"
            label="Nom"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handelChangeClientInfo}
            value={clientInfo.prenom}
            size="small"
            required
            fullWidth
            id="PrenomModifier"
            label="Prénom"
            name="prenom"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handelChangeClientInfo}
            value={clientInfo.email}
            size="small"
            required
            fullWidth
            id="emailModifier"
            label="Adresse E-mail"
            name="email"
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handelChangeClientInfo}
            value={clientInfo.phone}
            size="small"
            required
            fullWidth
            name="phone"
            label="Numéro de téléphone"
            type="tel"
            id="NumTelModifier"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handelChangeClientInfo}
            value={clientInfo.password}
            size="small"
            required
            fullWidth
            name="MDP"
            label="password"
            id="passwordModifier"
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "#263a49", width: "50%" }}
        onClick={handelSClickUpdate}
      >
        Enregistrer
      </Button>
    </Box>
  );
}

export default ModifyForm;
