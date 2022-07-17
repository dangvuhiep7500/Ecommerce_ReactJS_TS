import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import CartProduct from "../CartProduct/cart-product";
import { clearCart, removeProduct } from "../../../store/cart/cart.slice";
import { useNavigate } from "react-router-dom";
const Data = [
  "✔ Hỗ trợ trả góp 0%, trả trước 0đ",
  "✔ Hoàn tiền 200% khi phát hiện hàng giả",
  "✔ Giao hàng nhanh 3H nội thành Hà Nội",
  "✔ Giao hàng từ 5 - 7 ngày toàn quốc",
  "✔ Đội ngũ kĩ thuật hỗ trợ online 7/7",
];
const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
const Cart: FC = () => {
  const { isOpen, cartItems, isEmpty, totalSum, itemRemoved ,totalQuantity} = useAppSelector(
    (state) => state.cartReducer
  );
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleRemoveCart = () => {
    dispatch(clearCart())
 }
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h6">THÔNG TIN SẢN PHẨM</Typography>
          {isEmpty ? (
            <div className={"emptyCart"}>Bạn đang không có sản phẩm nào trong giỏ hàng.</div>
          ) : (
            cartItems.map((item) => (
              <CartProduct key={item.product._id} product={item} />
            ))
          )}
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
                {totalQuantity}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="body1">Tổng chi phí</Typography>
              <Typography variant="body1" color={"red"}>
              {formatter.format(totalSum)}
          
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
            <Box paddingTop={2}>
              <Button onClick={handleRemoveCart} variant="contained" color="error" fullWidth size="large">
                Xoá giỏ hàng
              </Button>
            </Box>
            <Box paddingTop={2}>
              <Button onClick={() => navigate("/")}variant="outlined" color="primary" fullWidth size="large">
                Xem sản phẩm khác
              </Button>
            </Box>
          </Box>
          <Box padding={3}>
            {Data.map((item, index) => (
              <Typography
                variant="body1"
                gutterBottom
                component="div"
                key={index}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Cart;
