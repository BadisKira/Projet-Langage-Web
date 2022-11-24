import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BalanceIcon from "@mui/icons-material/Balance";
import Image1 from "../../assets/images/Management.png";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { setCredentials } from "../../features/auth/authSlice";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false); //signup == inscrire && signin == authentifier
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      // S'inscrire
    } else {
      try {
        const userData = await login({
          username: form.username,
          password: form.password,
        }).unwrap();
      } catch (error) {}
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item xs={12} md={6}>
        <Stack
          alignItems="center"
          sx={{
            padding: "30px",
            height: "100%",
          }}
        >
          {/**LOGO ET TITRE  **/}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "50px",
            }}
          >
            <Link to="/">
              <BalanceIcon sx={{ fontSize: "4em", marginRight: "10px" }} />
            </Link>
            <Typography variant="h2" fontWeight={"bolder"} component="h2">
              <Link to="/">Frello </Link>
            </Typography>
          </Box>

          {/* LE FORMUALIRE  */}
          <Container
            maxWidth={"xs"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "white",
              minHeight: "500px",

              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
            }}
          >
            <form action="" method="post" onSubmit={handelSubmit}>
              <Stack direction={{ xs: "column" }} spacing={{ xs: 1, sm: 2 }}>
                {isSignUp && (
                  <>
                    <TextField
                      onChange={handleChange}
                      required
                      size="medium"
                      type={"text"}
                      placeholder="First Name"
                      name="firstName"
                    />
                    <TextField
                      onChange={handleChange}
                      required
                      size="medium"
                      type={"text"}
                      placeholder="Last Name"
                      name="lastName"
                    />
                  </>
                )}

                <TextField
                  onChange={handleChange}
                  required
                  size="medium"
                  type={"text"}
                  placeholder="username"
                  name="username"
                />

                <TextField
                  onChange={handleChange}
                  required
                  size="medium"
                  placeholder="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        sx={{ cursor: "pointer" }}
                        position="end"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  variant="contained"
                  size="large"
                  sx={{ textTransform: "capitalize" }}
                  type="submit"
                >
                  Send
                </Button>

                <Box>
                  {isSignUp ? (
                    <>
                      Do you have an account ?
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => {
                          setIsSignUp(false);
                        }}
                      >
                        Sign-up
                      </Button>
                    </>
                  ) : (
                    <>
                      You want to create an account for free
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => {
                          setIsSignUp(true);
                        }}
                      >
                        Sign-in
                      </Button>
                    </>
                  )}
                </Box>
              </Stack>
            </form>
          </Container>
        </Stack>
      </Grid>
      <Grid
        item
        md={6}
        display={{ xs: "none", md: "flex" }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <img
          style={{
            width: "90%",
            height: "auto",
          }}
          src={Image1}
          alt="Kanban illustation"
        />
      </Grid>
    </Grid>
  );
};
export default LoginPage;
