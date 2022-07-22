import React, { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAppSelector } from "../../../hooks";
import { orderProduct } from "../../../store/order/order.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
interface FormInputs {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  };
  customer: string;
  email: string;
  phoneNumber: number;
  note: string;
  parentId: string;
  address: string;
  status: string;
}
const CheckOut: FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: any) => {
    setChecked(event.currentTarget.checked);
  };
  const cart = useAppSelector((state) => state.cartReducer);
  //order
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitForm = async (data: any) => {
    try {
      await dispatch(orderProduct(data));
      // navigate("/");
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
      <Box onSubmit={handleSubmit(submitForm)} component="form">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                style={{ borderBottom: "1px solid rgb(200, 200, 200)" }}
              >
                <Typography sx={{ mb: 1 }} variant="h6">
                  THÔNG TIN KHÁCH HÀNG
                </Typography>
                <Typography className="text-note" variant="caption">
                  Trường bắt buộc
                </Typography>
                <Stack
                  sx={{ mt: 2, mb: 2, justifyContent: "space-between" }}
                  direction="row"
                  alignItems="center"
                  gap={2}
                  color="black"
                >
                  <Typography
                    className="text-checkout"
                    gutterBottom
                    component="div"
                    variant="body2"
                  >
                    Họ tên quý khách
                  </Typography>
                  <TextField
                    size="small"
                    autoComplete="given-name"
                    id="custormer"
                    defaultValue={"dang"}
                    placeholder="Nhập tên khách hàng"
                    style={{ width: 600, backgroundColor: "#e0e0e0" }}
                    {...register("customer", {
                      required: "*Vui lòng tên khách hàng",
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="custormer"
                    as="p"
                    style={{ color: "red" }}
                  />
                </Stack>
                <Stack
                  sx={{ mb: 2, justifyContent: "space-between" }}
                  direction="row"
                  alignItems="center"
                  gap={2}
                  color="black"
                >
                  <Typography
                    className="text-checkout"
                    gutterBottom
                    component="div"
                    variant="body2"
                  >
                    Địa chỉ email
                  </Typography>
                  <TextField
                    size="small"
                    autoComplete="given-name"
                    id="email"
                    type="email"
                    defaultValue={"dang@gmail.com"}
                    placeholder="Nhập email"
                    style={{ width: 600, backgroundColor: "#e0e0e0" }}
                    {...register("email", {
                      required: "*Vui lòng nhập Email",
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    as="p"
                    style={{ color: "red" }}
                  />
                </Stack>
                <Stack
                  sx={{ mb: 2, justifyContent: "space-between" }}
                  direction="row"
                  alignItems="center"
                  gap={2}
                  color="black"
                >
                  <Typography
                    className="text-checkout"
                    gutterBottom
                    component="div"
                    variant="body2"
                  >
                    Số điện thoại
                  </Typography>
                  <TextField
                    size="small"
                    autoComplete="given-name"
                    id="phoneNumber"
                    type="number"
                    defaultValue={"0123456486"}
                    placeholder="Nhập số điện thoại"
                    style={{ width: 600, backgroundColor: "#e0e0e0" }}
                    {...register("phoneNumber", {
                      required: "*Vui lòng nhập tên",
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="phoneNumber"
                    as="p"
                    style={{ color: "red" }}
                  />
                </Stack>
                <Stack
                  sx={{ mb: 5, justifyContent: "space-between" }}
                  direction="row"
                  alignItems="center"
                  gap={2}
                  color="black"
                >
                  <Typography
                    className="text-checkout"
                    gutterBottom
                    component="div"
                    variant="body2"
                  >
                    Địa chỉ thường trú
                  </Typography>
                  <TextField
                    size="small"
                    autoComplete="given-name"
                    id="address"
                    defaultValue={"abczxc"}
                    placeholder="Nhập địa chỉ"
                    style={{ width: 600, backgroundColor: "#e0e0e0" }}
                    {...register("address", {
                      required: "*Vui lòng nhập địa chỉ",
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="address"
                    as="p"
                    style={{ color: "red" }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ mb: 1 }} variant="h6">
                  THÔNG TIN GIAO HÀNG
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      onChange={handleChange}
                    />
                  }
                  label={
                    <Typography fontWeight={"bold"}>
                      Sử dụng thông tin khách hàng để giao hàng
                    </Typography>
                  }
                />
                <br />
                <Typography className="text-note" variant="caption">
                  Trường bắt buộc
                </Typography>
                {!checked && (
                  <>
                    <Stack
                      sx={{ mt: 2, mb: 2, justifyContent: "space-between" }}
                      direction="row"
                      alignItems="center"
                      gap={2}
                      color="black"
                    >
                      <Typography
                        className="text-checkout"
                        gutterBottom
                        component="div"
                        variant="body2"
                      >
                        Họ tên người nhận
                      </Typography>
                      <TextField
                        size="small"
                        autoComplete="given-name"
                        id="custormer"
                        placeholder="Nhập tên người nhận"
                        style={{ width: 600, backgroundColor: "#e0e0e0" }}
                        {...register("customer", {
                          required: "*Vui lòng nhập người nhận",
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="custormer"
                        as="p"
                        style={{ color: "red" }}
                      />
                    </Stack>
                    <Stack
                      sx={{ mb: 2, justifyContent: "space-between" }}
                      direction="row"
                      alignItems="center"
                      gap={2}
                      color="black"
                    >
                      <Typography
                        className="text-checkout"
                        gutterBottom
                        component="div"
                        variant="body2"
                      >
                        Số điện thoại
                      </Typography>
                      <TextField
                        size="small"
                        autoComplete="given-name"
                        id="phoneNumber"
                        type="number"
                        defaultValue={"123456798"}
                        placeholder="Nhập số điện thoại"
                        style={{ width: 600, backgroundColor: "#e0e0e0" }}
                        {...register("phoneNumber", {
                          required: "*Vui lòng nhập số điện thoại",
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="phoneNumber"
                        as="p"
                        style={{ color: "red" }}
                      />
                    </Stack>
                    <Stack
                      sx={{ mb: 2, justifyContent: "space-between" }}
                      direction="row"
                      alignItems="center"
                      gap={2}
                      color="black"
                    >
                      <Typography
                        className="text-checkout"
                        gutterBottom
                        component="div"
                        variant="body2"
                      >
                        Địa chỉ giao hàng
                      </Typography>
                      <TextField
                        size="small"
                        autoComplete="given-name"
                        id="address"
                        placeholder="Nhập địa chỉ giao hàng"
                        style={{ width: 600, backgroundColor: "#e0e0e0" }}
                        {...register("address", {
                          required: "*Vui lòng nhập tên",
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="address"
                        as="p"
                        style={{ color: "red" }}
                      />
                    </Stack>
                  </>
                )}

                <Stack
                  sx={{ mb: 5, justifyContent: "space-between" }}
                  direction="row"
                  alignItems="center"
                  gap={2}
                  color="black"
                >
                  <Typography gutterBottom component="div" variant="body2">
                    Ghi chú
                  </Typography>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Nhập ghi chú"
                    {...register("note")}
                    style={{ width: 595, backgroundColor: "#e0e0e0" }}
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
              <Box
                style={{ borderBottom: "1px solid rgb(200, 200, 200)" }}
                paddingBottom={2}
              >
                <Typography variant="h6">THÔNG TIN GIỎ HÀNG</Typography>
                <Stack
                  direction="row"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="body1">Số lượng sản phẩm</Typography>
                  <Typography variant="body1" color={"blue"}>
                    {cart.totalQuantity}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="body1">Tổng chi phí</Typography>
                  <Typography variant="body1" color={"red"}>
                    {formatter.format(cart.totalSum)}
                  </Typography>
                </Stack>
                <Typography variant="inherit" fontSize={13} align="right">
                  Đã bao gồm VAT (nếu có)
                </Typography>
              </Box>
              <Box paddingTop={3}>
                {cart.cartItems.map((item) => {
                  return (
                    <Box paddingBottom={2}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "#005ec4" }}
                      >
                        {item.product.title}
                      </Typography>
                      <Stack
                        direction="row"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Stack>
                            <Typography variant="body1">
                              Số lượng:
                              {/* <InputLabel  {...register("note")} sx={{color: "red"}}>{item.quantity}</InputLabel> */}
                              <span
                                style={{ color: "blue" }}
                                >
                                {item.quantity}
                              </span>
                            </Typography>
                            {/* <TextField
                              size="small"
                              autoComplete="given-name"
                              id="note"
                              defaultValue={item.quantity}
                              placeholder="Nhập số điện thoại"
                              style={{ width: 200, backgroundColor: "#e0e0e0" }}
                              {...register("phoneNumber")}
                            />
                            <TextField
                              size="small"
                              autoComplete="given-name"
                              id="note"
                              defaultValue={item.product.price}
                              placeholder="Nhập số điện thoại"
                              style={{ width: 200, backgroundColor: "#e0e0e0" }}
                              // {...register(`${products.productId}`)}
                            /> */}
                          </Stack>
                        </Box>
                        <Box>
                          <Typography
                            variant="body1"
                            align="right"
                            fontWeight={"bold"}
                          >
                            {formatter.format(
                              item.product.price * item.quantity
                            )}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  );
                })}
              </Box>
              <Box paddingTop={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  size="large"
                >
                  Xác nhận mua hàng
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default CheckOut;
