import React, { FC, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Avatar, CircularProgress, Container } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from "react-redux";
import { userRegister } from "../../../store/auth/auth.actions";
import { useAppSelector } from "../../../hooks";
import { clearState } from "../../../store/auth/auth.slice";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const Register: FC = () => {
  interface FormInputs {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    password: string;
  }
  const { isLoading, error, successRegister } = useAppSelector(
    (state) => state.authReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();
  const submitForm = async (data: any) => {
    try {
      await dispatch(userRegister(data));
      // navigate('/login');
    } catch (e: any) {
      console.log(e);
    }
  };
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);
  useEffect(() => {
    if (successRegister) {
      navigate("/login");
    }
  }, [successRegister]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginBottom: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" fontWeight={"bold"}>
          ????ng k??
        </Typography>
      </Box>
      <Box onSubmit={handleSubmit(submitForm)} component="form" sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              fullWidth
              id="firstName"
              label="First Name"
              {...register("firstName", {
                required: "*Vui l??ng nh???p t??n",
              })}
              autoFocus
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              as="p"
              style={{ color: "red" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Last Name"
              {...register("lastName", {
                required: "*Vui l??ng nh???p h???",
              })}
              autoComplete="family-name"
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              as="p"
              style={{ color: "red" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              type="email"
              label="Email"
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: "*Vui l??ng nh???p email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "*Sai ?????nh d???ng email",
                },
              })}
            />
            {error && (
              <Typography component="h1" variant="body1">
                *T??n ????ng nh???p ???? c?? ng?????i d??ng
              </Typography>
            )}
            <ErrorMessage
              errors={errors}
              name="email"
              as="p"
              style={{ color: "red" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="M???t kh???u"
              type="password"
              id="password"
              autoComplete="password"
              {...register("password", {
                required: "*Vui l??ng nh???p password",
                minLength: {
                  value: 8,
                  message: "*This input must exceed 8 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              as="p"
              style={{ color: "red" }}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading}
          sx={{ mt: 3, mb: 2 }}
        >
          {isLoading && <CircularProgress size={20} color="inherit" />} &nbsp;
          ????ng k??
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link
              className="custom-link"
              onClick={() => navigate("/login")}
              variant="body2"
            >
              B???n ???? c?? t??i kho???n? ????ng nh???p
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Register;
