import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { decreaseCount, increaseCount, removeProduct, toggleItemRemoved } from "../../../store/cart/cart.slice";
interface CartItemProps {
  product: CartItem;
}
const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
const CartProduct: FC<CartItemProps> = ({ product }) => {
    const [count, setCount] = useState(product.quantity)
   const dispatch = useAppDispatch()
   const handleRemove = () => {
      dispatch(removeProduct(product))
      dispatch(toggleItemRemoved(true))
   }
   const increase = () => {
      setCount((count) => count + 1)
      dispatch(increaseCount(product))
   }
   const decrease = () => {
      if (count > 1) {
         setCount((count) => count - 1)
         dispatch(decreaseCount(product))
      }
   }
  return (
    <Box marginBottom={2} padding={1} sx={{ border: 1, borderColor: "grey.400" }}>
      <Stack
        direction="row"
      >
        <img
          src={product.product.image}
          alt=""
          width={78}
          height={78}
        />
        <Typography style={{ fontWeight: "bold", padding: 5 }}>
          {product.product.title}
        </Typography>
      </Stack>

      <Stack
        paddingLeft={{ xs: 0, md: 12 }}
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" fontWeight={"bold"}>
          Số lượng:{" "}
          <Button
            size="small"
            variant="outlined"
            onClick={increase}
            style={{
              maxWidth: "1em",
              maxHeight: "1em",
              minWidth: "1em",
              minHeight: "1em",
            }}
          >
            +
          </Button>
          <TextField
            sx={{ input: { height: 1 } }}
            value={count}
            variant="standard"
            size="small"
            InputProps={{
              disableUnderline: true,
            }}
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              maxWidth: "1.125em",
            }}
          />
          <Button
            size="small"
            variant="outlined"
            onClick={decrease}
            style={{
              maxWidth: "1em",
              maxHeight: "1em",
              minWidth: "1em",
              minHeight: "1em",
            }}
          >
            -
          </Button>
        </Typography>
        <Typography variant="body1" align="right" fontWeight={"bold"}>
          {formatter.format(product.product.price * count)}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="end">
        <Button onClick={handleRemove} size="small" variant="outlined" startIcon={<DeleteIcon />}>
          Xoá
        </Button>
      </Stack>
    </Box>
  );
};
export default CartProduct;