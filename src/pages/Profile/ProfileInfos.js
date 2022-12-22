import { React, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LogoutIcon from "@mui/icons-material/Logout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

import ModifyForm from "./ModifyForm";
import { logOut } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileInfos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const clientData = useSelector(state => state.client);
  const clientData = { nom: "Lamriou", prenom: "Celena", phone: "05123269", idClient: '15', "email": "Hammadache@badis.com" }

  return (
    <Box
      sx={{
        width: "90%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container my={2}>
        <Grid item sm={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Box
              component="div"
              my={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                className="pulseAvatar"
                sx={{
                  bgcolor: "#3a78c9",
                  width: { xs: 70, sm: 80 },
                  height: { xs: 70, sm: 80 },
                  fontSize: { xs: 26, sm: 32 },
                }}
              >
                {clientData.nom[0]}
                {clientData.prenom[0]}
              </Avatar>

              <Box mx={2}>
                <Typography variant="h5">
                  {clientData.nom} {clientData.prenom}
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  color="secondary.contrastText"
                >
                  {clientData.idclient}
                </Typography>
              </Box>
            </Box>


            <Button
              size="large"
              variant="text"
              sx={{ color: "#CF2F2F", width: "45%" }}
              startIcon={<LogoutIcon />}
              onClick={() => {
                dispatch(logOut());
                localStorage.removeItem('user');
                navigate('/');
              }}
            >
              Deconnexion
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              id="modifyProfileHeader"
            >
              <Typography color="primary">Modifier Mon profil</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ModifyForm />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileInfos;
