import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import ProfileInfos from "./ProfileInfos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import InvitationsList from "./InvitationsList";
import ProjectsList from "./ProjectList";
import Container from "@mui/material/Container"

import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetParticipedKanbansQuery,
  useGetUserKanbansQuery,
  useRefuseInvitationMutation,
  useGetInvitationsQuery,
  useAcceptInvitationMutation
} from "../../features/profile/profileApiSlice";

function TabPanel(props) {

  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    if ((id != JSON.parse(localStorage.getItem("user")).id))
      navigate("/");
  }, [])
  const dispatch = useDispatch();


  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box
          sx={{
            display: "flex",
            py: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { id } = useParams();

  return (
    <Container maxWidth={"md"}
      sx={{

        display: "flex",
        flexDirection: "column",
        marginY: '50px',
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} >
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{
            paddingTop: "3vh",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tab icon={<AccountCircleRoundedIcon />} label="My  profil" />

          <Tab
            icon={<AssignmentTurnedInRoundedIcon />}
            label="My projects"
          />
          <Tab icon={<FavoriteIcon />} label="My invitations" />
        </Tabs>
      </Box>
      <Box >
        <TabPanel value={value} index={0}>
          <ProfileInfos idUser={id} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ProjectsList idUser={id} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <InvitationsList idUser={id} />
        </TabPanel>
      </Box>
    </Container>
  );
}
