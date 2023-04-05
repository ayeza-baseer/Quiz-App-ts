import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { GetLoginUser } from "../Services/LoginUser";
import { loginSuccess } from "../features/login/loginSlice";


interface LoginValues {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .min(10)
      .required("Email is required"),
    password: Yup.string().required("Required"),
  });
  const initialValues: LoginValues = { email: "", password: "" };

  const onSubmit = async (
    values: LoginValues,
    { setSubmitting, restForm }: any
  ) => {
    let userResponse = await GetLoginUser(values);
    if (userResponse) {
      const data=userResponse.data;
      console.log(data,"response")
      dispatch(loginSuccess(data[0]));
      navigate("/quiz");
    } else {
      alert("The email or password is incorrect");
    }
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={2}
      alignItems="center"
      height="100%"
      minHeight="100vh"
      sx={{ margin: 0 }}
    >
      <Box
        bgcolor="#FFFFFF"
        width="30%"
        sx={{
          py: 6,
          px: 6,
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ color: "#673ab7", fontWeight: 600, fontSize: "1.25rem" }}
        >
          Hi, Welcome Back
        </Typography>
        <Typography
          sx={{
            color: "#121926",
            fontWeight: 600,
            fontSize: "0.875rem",
            mt: "30px",
            lineHeight: 1.75,
          }}
        >
          Sign In with Email Address
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl
                sx={{ marginTop: "30px" }}
                fullWidth
                error={Boolean(touched.email && errors.email)}
              >
                <InputLabel htmlFor="outlined-adornment-email-login">
                  Email Address / Username
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-login"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  label="Email Address / Username"
                  inputProps={{}}
                />

                {touched.email && errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl
                sx={{ marginTop: "30px" }}
                fullWidth
                error={Boolean(touched.password && errors.password)}
              >
                <InputLabel htmlFor="outlined-adornment-password-login">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  inputProps={{}}
                />
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-login"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>

              <Stack
                sx={{ marginTop: "30px" }}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
              >
                <FormControlLabel
                  control={<Checkbox name="checked" color="primary" />}
                  label="Remember me"
                />
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  sx={{ textDecoration: "none", cursor: "pointer" }}
                >
                  Forgot Password?
                </Typography>
              </Stack>
              <Box sx={{ marginTop: "30px" }}>
                <Button
                  disableElevation
                  fullWidth
                  disabled={isSubmitting}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Sign in
                </Button>
              </Box>
            </form>
          )}
        </Formik>

        <Box sx={{ marginTop: "30px" }}>
          <Typography
            component={Link}
            to="/register"
            variant="subtitle1"
            sx={{ textDecoration: "none", color: "black" }}
          >
            Don't have an account?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
