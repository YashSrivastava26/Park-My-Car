import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./login.css";
import { Api } from "../../Api/Axios";
import { useDataLayerValue } from "../../Datalayer/DataLayer";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [loginDetails, setLoginDetails] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginDetails((state) => ({ ...state, [e.target.id]: e.target.value }));
  };

  const {
    state,
    changeLoginState,
    startLoading,
    stopLoading,
    showSuccess,
    showError,
  } = useDataLayerValue();

  const handleSubmit = async (e) => {
    e.preventDefault();
    startLoading();
    await Api.post("/auth/login", loginDetails)
      .then((res) => {
        const token = res.data.token;
        const userData = res.data.user;
        changeLoginState(userData, token);
        showSuccess("Login successful");
      })
      .catch((err) => {
        showError(err?.response?.data?.error?.message);
      });
    stopLoading();
  };

  useEffect(() => {
    if (state.loggedIn) {
      navigate(-1);
    }
  }, [state]);

  return (
    <div className="loginContainer">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "blue" }}>icon</Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => handleChange(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => handleChange(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
