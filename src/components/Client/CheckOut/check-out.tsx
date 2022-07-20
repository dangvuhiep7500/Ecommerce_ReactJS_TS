import React, { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
const CheckOut: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ mb: 1 }} variant="h6">
                THÔNG TIN KHÁCH HÀNG
              </Typography>
              <Typography variant="caption">* Trường bắt buộc</Typography>
              <Stack
                sx={{ mt: 2, mb: 2,justifyContent:"space-between" }}
                direction="row"
                alignItems="center"
                gap={2}
                color="black"
              >
                <Typography className="text-checkout" gutterBottom component="div" variant="body2">
                  Họ tên quý khách *
                </Typography>
                <TextField
                  size="small"
                  autoComplete="given-name"
                  id="Name"
                  placeholder="Nhập tên khách hàng"
                  style={{ width: 600, backgroundColor: "#e0e0e0" }}
                  {...register("Name", {
                    required: "*Vui lòng nhập tên",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="Name"
                  as="p"
                  style={{ color: "red" }}
                />
              </Stack>
              <Stack
                sx={{ mb: 2,justifyContent:"space-between" }}
                direction="row"
                alignItems="center"
                gap={2}
                color="black"
              >
                <Typography gutterBottom component="div" variant="body2">
                Địa chỉ email *
                </Typography>
                <TextField
                  size="small"
                  autoComplete="given-name"
                  id="email"
                  placeholder="Nhập email"
                  style={{ width: 600, backgroundColor: "#e0e0e0" }}
                  {...register("email", {
                    required: "*Vui lòng nhập Email",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="Name"
                  as="p"
                  style={{ color: "red" }}
                />
              </Stack>
              <Stack
                sx={{ mb: 2,justifyContent:"space-between" }}
                direction="row"
                alignItems="center"
                gap={2}
                color="black"
              >
                <Typography gutterBottom component="div" variant="body2">
                Số điện thoại *
                </Typography>
                <TextField
                  size="small"
                  autoComplete="given-name"
                  id="phone"
                  placeholder="Nhập số điện thoại"
                  style={{ width: 600, backgroundColor: "#e0e0e0" }}
                  {...register("phone", {
                    required: "*Vui lòng nhập tên",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="Name"
                  as="p"
                  style={{ color: "red" }}
                />
              </Stack>
              <Stack
                sx={{ mb: 2,justifyContent:"space-between"}}
                direction="row"
                alignItems="center"
                gap={2}
                color="black"
              >
                <Typography gutterBottom component="div" variant="body2">
                  Địa chỉ thường trú *
                </Typography>
                <TextField
                  size="small"
                  autoComplete="given-name"
                  id="address"
                  placeholder="Nhập địa chỉ"
                  style={{ width: 600, backgroundColor: "#e0e0e0" }}
                  {...register("address", {
                    required: "*Vui lòng nhập tên",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="Name"
                  as="p"
                  style={{ color: "red" }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              background: "#f0f3fc",
            }}
            padding={3}
          >
            <Typography variant="h6">THÔNG TIN GIỎ HÀNG</Typography>
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="body1">Số lượng sản phẩm</Typography>
              <Typography variant="body1" color={"blue"}>
                {/* {totalQuantity} */}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="body1">Tổng chi phí</Typography>
              <Typography variant="body1" color={"red"}>
                {/* {formatter.format(totalSum)} */}
              </Typography>
            </Stack>
            <Typography variant="inherit" fontSize={13} align="right">
              Đã bao gồm VAT (nếu có)
            </Typography>
            <Box paddingTop={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Xác nhận đơn hàng
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default CheckOut;
