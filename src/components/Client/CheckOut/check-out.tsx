import React, { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
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
import { clearCart } from "../../../store/cart/cart.slice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
interface FormInputs {
  userId: string;
  products: {
    product: IProduct;
    quantity: number;
  }[];
  customer: string;
  email: string;
  phoneNumber: number;
  address: string;
  customerReceiver: string;
  phoneReceiver: number;
  addressReceiver: string;
  totalQuantity: number;
  totalSum: number;
  note: string;
  status: string;
  payment: string;
}
const CheckOut: FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: any) => {
    setChecked(event.currentTarget.checked);
  };
  const cart = useAppSelector((state) => state.cartReducer);
  //order
  const itemCart = cart.cartItems;
  const totalQuantity = cart.totalQuantity;
  const totalSum = cart.totalSum;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      products: itemCart,
      totalQuantity: totalQuantity,
      totalSum: totalSum,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitForm = async (data: FormInputs) => {
    try {
      await dispatch(orderProduct(data));
      navigate("/");
      dispatch(clearCart());
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
                  TH??NG TIN KH??CH H??NG
                </Typography>
                <Typography className="text-note" variant="caption">
                  Tr?????ng b???t bu???c
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
                    H??? t??n qu?? kh??ch
                  </Typography>
                  <TextField
                    size="small"
                    autoComplete="given-name"
                    id="customer"
                    defaultValue={"dang"}
                    placeholder="Nh???p t??n kh??ch h??ng"
                    style={{ width: 600, backgroundColor: "#e0e0e0" }}
                    {...register("customer", {
                      required: "*Vui l??ng nh???p t??n kh??ch h??ng",
                    })}
                  />
                </Stack>
                <ErrorMessage
                  errors={errors}
                  name="customer"
                  as="p"
                  style={{ color: "red" }}
                />
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
                    ?????a ch??? email
                  </Typography>
                  <TextField
                    size="small"
                    autoComplete="given-name"
                    id="email"
                    type="email"
                    defaultValue={"dang@gmail.com"}
                    placeholder="Nh???p email"
                    style={{ width: 600, backgroundColor: "#e0e0e0" }}
                    {...register("email", {
                      required: "*Vui l??ng nh???p Email",
                    })}
                  />
                </Stack>
                <ErrorMessage
                  errors={errors}
                  name="email"
                  as="p"
                  style={{ color: "red" }}
                />
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
                    S??? ??i???n tho???i
                  </Typography>
                  <TextField
                    size="small"
                    autoComplete="given-name"
                    id="phoneNumber"
                    type="number"
                    defaultValue={"0123456486"}
                    placeholder="Nh???p s??? ??i???n tho???i"
                    style={{ width: 600, backgroundColor: "#e0e0e0" }}
                    {...register("phoneNumber", {
                      required: "*Vui l??ng nh???p s??? ??i???n tho???i",
                    })}
                  />
                </Stack>
                <ErrorMessage
                  errors={errors}
                  name="phoneNumber"
                  as="p"
                  style={{ color: "red" }}
                />
                <Box sx={{ paddingBottom: 3 }}>
                  <Stack
                    sx={{ justifyContent: "space-between" }}
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
                      ?????a ch??? th?????ng tr??
                    </Typography>
                    <TextField
                      size="small"
                      autoComplete="given-name"
                      id="address"
                      defaultValue={"abczxc"}
                      placeholder="Nh???p ?????a ch???"
                      style={{ width: 600, backgroundColor: "#e0e0e0" }}
                      {...register("address", {
                        required: "*Vui l??ng nh???p ?????a ch???",
                      })}
                    />
                  </Stack>
                  <ErrorMessage
                    errors={errors}
                    name="address"
                    as="p"
                    style={{ color: "red" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ mb: 1 }} variant="h6">
                  TH??NG TIN GIAO H??NG
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
                      S??? d???ng th??ng tin kh??ch h??ng ????? giao h??ng
                    </Typography>
                  }
                />
                <br />
                <Typography className="text-note" variant="caption">
                  Tr?????ng b???t bu???c
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
                        H??? t??n ng?????i nh???n
                      </Typography>
                      <TextField
                        size="small"
                        autoComplete="given-name"
                        id="customerReceiver"
                        // defaultValue={"Nguyen van a"}
                        placeholder="Nh???p t??n ng?????i nh???n"
                        style={{ width: 600, backgroundColor: "#e0e0e0" }}
                        {...register("customerReceiver", {
                          required: "*Vui l??ng nh???p ng?????i nh???n",
                        })}
                      />
                    </Stack>
                    <ErrorMessage
                      errors={errors}
                      name="customerReceiver"
                      as="p"
                      style={{ color: "red" }}
                    />
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
                        S??? ??i???n tho???i
                      </Typography>
                      <TextField
                        size="small"
                        autoComplete="given-name"
                        id="phoneReceiver"
                        type="number"
                        // defaultValue={"123456798"}
                        placeholder="Nh???p s??? ??i???n tho???i"
                        style={{ width: 600, backgroundColor: "#e0e0e0" }}
                        {...register("phoneReceiver", {
                          required: "*Vui l??ng nh???p s??? ??i???n tho???i",
                        })}
                      />
                    </Stack>
                    <ErrorMessage
                      errors={errors}
                      name="phoneReceiver"
                      as="p"
                      style={{ color: "red" }}
                    />
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
                        ?????a ch??? giao h??ng
                      </Typography>
                      <TextField
                        size="small"
                        autoComplete="given-name"
                        id="addressReceiver"
                        // defaultValue={"Bien Hoa - Dong Nai"}
                        placeholder="Nh???p ?????a ch??? giao h??ng"
                        style={{ width: 600, backgroundColor: "#e0e0e0" }}
                        {...register("addressReceiver", {
                          required: "*Vui l??ng nh???p t??n",
                        })}
                      />
                    </Stack>
                    <ErrorMessage
                      errors={errors}
                      name="addressReceiver"
                      as="p"
                      style={{ color: "red" }}
                    />
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
                    Ghi ch??
                  </Typography>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Nh???p ghi ch??"
                    {...register("note")}
                    style={{ width: 595, backgroundColor: "#e0e0e0" }}
                  />
                </Stack>
                <Typography sx={{ mb: 1 }} fontWeight={600} variant="h6">
                  PH????NG TH???C THANH TO??N
                </Typography>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Thanh to??n t???i n??i giao h??ng"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Thanh to??n t???i n??i giao h??ng"
                      control={<Radio />}
                      label={
                        <Typography fontWeight={500} variant="body1">
                          Thanh to??n t???i n??i giao h??ng
                        </Typography>
                      }
                      {...register("payment", { required: true })}
                    />
                    <FormControlLabel
                      value="Thanh to??n b???ng chuy???n kho???n"
                      control={<Radio />}
                      label={
                        <Typography fontWeight={500} variant="body1">
                          Thanh to??n b???ng chuy???n kho???n
                        </Typography>
                      }
                      {...register("payment", { required: true })}
                    />
                  </RadioGroup>
                </FormControl>
                <Box marginLeft={4} marginBottom={2}>
                <Typography fontWeight={500} variant="body1">
                  Ta??i nga??n ha??ng Techcombank <br/>
                </Typography>
                <Typography  variant="body1">
                 S??? t??i kho???n: 0123456789987 <br/>
                 Ch??? TK: Nguy???n V??n A.
                </Typography>
                </Box>
                <Box marginLeft={4}>
                <Typography fontWeight={500} variant="body1">
                  Ta??i nga??n ha??ng Techcombank <br/>
                </Typography>
                <Typography  variant="body1">
                 S??? t??i kho???n: 0123456789987 <br/>
                 Ch??? TK: Nguy???n V??n A.
                </Typography>
                </Box>
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
                <Typography variant="h6">TH??NG TIN GI??? H??NG</Typography>
                <Stack
                  direction="row"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="body1">S??? l?????ng s???n ph???m</Typography>
                  <Typography variant="body1" color={"blue"}>
                    {cart.totalQuantity}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="body1">T???ng chi ph??</Typography>
                  <Typography variant="body1" color={"red"}>
                    {formatter.format(cart.totalSum)}
                  </Typography>
                </Stack>
                <Typography variant="inherit" fontSize={13} align="right">
                  ???? bao g???m VAT (n???u c??)
                </Typography>
              </Box>
              <Box paddingTop={3}>
                {cart.cartItems.map((item, i) => {
                  return (
                    <Box paddingBottom={2}>
                      <span
                        style={{ fontWeight: 600, color: "#005ec4" }}
                        // {...register(`products.title`)}
                      >
                        {item.product.title}
                      </span>
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
                              S??? l?????ng:{" "}
                              <span
                                defaultValue={item.quantity}
                                style={{ color: "blue" }}
                              >
                                {item.quantity}
                              </span>
                            </Typography>
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
                  X??c nh???n mua h??ng
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
