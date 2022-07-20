import React, { FC, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks";
import { userLogin } from "../../../store/auth/auth.actions";
import { ErrorMessage } from "@hookform/error-message";
import { clearState } from "../../../store/auth/auth.slice";
import { CircularProgress } from "@mui/material";
const Login: FC = () => {
  interface FormInputs {
    email: string;
    password: string;
  }
  const { isLoading, error, successLogin } = useAppSelector(
    (state) => state.authReducer
  );
  // const { register, handleSubmit } = useForm()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitForm = async (data: any) => {
    dispatch(userLogin(data));
  };
  useEffect(() => {
    if (successLogin) {
      navigate("/");
    }
  }, [successLogin, navigate]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();
  console.log(successLogin);

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginBottom: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" fontWeight={"bold"}>
            Đăng nhập
          </Typography>
        </Box>
        {error && (
          <Typography component="h1" variant="body1">
            *Tên đăng nhập hoặc mật khẩu sai
          </Typography>
        )}
        <Box
          onSubmit={handleSubmit(submitForm)}
          component="form"
          sx={{ mb: 3 }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="email"
            type="email"
            label="Email"
            autoComplete="email"
            autoFocus
            {...register("email", {
              required: "*Vui lòng nhập email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "*Sai định dạng email",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            as="p"
            style={{ color: "red" }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Mật khẩu"
            type="password"
            id="password"
            autoComplete="password"
            {...register("password", {
              required: "*Vui lòng nhập password",
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading && <CircularProgress size={20} color="inherit" />} &nbsp; Đăng Nhập
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Quên mật khẩu?
              </Link>
            </Grid>
            <Grid item>
              <Link
                className="custom-link"
                onClick={() => navigate("/register")}
                variant="body2"
              >
                {"Đăng ký"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default Login;
