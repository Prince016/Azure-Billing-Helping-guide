// import React from 'react'
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Billing Info
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const [Language, setLanguage] = useState("");
  var [SignIn, setSignIn] = useState("SignIn");
  // var [billo,setBillo] = useState('Billo');
  const [add, setAdd] = useState("Add");
  const [show, setShow] = useState("Show");
  const [email, setemail] = useState("Email Address");
  const [password, setpassword] = useState("Password");
  const [remember, setremember] = useState("Remember me");
  const [forgot, setForgot] = useState("Forgot password");
  const [account, setAccount] = useState("Don't have an account?SignUp");
  const [copy, setCopy] = useState("Copyright © Billing Info 2023.");

  // const [Language, setLanguage] = useState('');
  // const [Language, setLanguage] = useState('');
  var Account = "Don't have an account? Sign Up";
  // var SignIn = "SigIn";

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const response = await fetch(`http://localhost:8080/api/v1/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
    });
    const json = await response.json();

    console.log(json);
    console.log("tod check test--------------", json.success);
    if (json.email == data.get("email")) {
      navigate("/add");
      localStorage.setItem("userEmail", data.get("email"));
    } else {
      alert("Enter Valid Credentials");
      // localStorage.setItem("authToken",json.authToken)
    }
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
    // console.log(Language);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random?Crypto)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {SignIn}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={email}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={password}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={remember}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {SignIn}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {forgot}
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {Account}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />

              <FormControl
                fullWidth
                style={{
                  width: "20%",
                  textAlign: "center",
                  marginLeft: "200px",
                  marginTop: "20px",
                }}
              >
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Language}
                  label="Language"
                  onChange={handleChange}
                >
                  <MenuItem
                    value="English"
                    onClick={() => {
                      setSignIn("SignIn");
                      setemail("Email Address")
                      setpassword("Password")
                      setremember("Remember me")
                      setForgot("Forgot password")
                      setAccount("Don't have an account?SignUp")
                      setCopy("Copyright © Billing Info 2023.")
                    }}
                  >
                    English
                  </MenuItem>
                  <MenuItem
                    value="French"
                    onClick={() => {
                      setSignIn("S'identifier");
                      setemail("Adresse e-mail")
                      setpassword("Mot de passe")
                      setremember("Souviens-toi de moi")
                      setForgot("Mot de passe oublié")
                      setAccount("Vous n'avez pas de compte ?  Inscrivez-vous")
                      setCopy("Copyright © Informations de facturation 2023.")
                    }}
                  >
                    French
                  </MenuItem>
                  <MenuItem
                    value="German"
                    onClick={() => {
                      setSignIn("Anmelden");
                      setemail("E-Mail-Addresse")
                      setpassword("Passwort")
                      setremember("Mich erinnern")
                      setForgot("Passwort vergessen")
                      setAccount("Sie haben noch kein Konto? Melden Sie sich an")
                      setCopy("Copyright © Rechnungsinformationen 2023.")
                    }}
                  >
                    German
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
