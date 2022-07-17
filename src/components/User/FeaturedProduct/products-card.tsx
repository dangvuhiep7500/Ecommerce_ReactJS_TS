import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Fab,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { FC, useEffect, useRef, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckIcon from '@mui/icons-material/Check';
import { addProduct, ItemAdded, toggleItemAdded } from "../../../store/cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
interface Props {
  product: IProduct
}
const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
const Product: FC<Props> = ({
  product
}) => {
  const navigate = useNavigate()
  // const [count, setCount] = useState(1)
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef<number>();
 
  const addToCart = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 800);
    }
    setTimeout(() =>{
    dispatch(addProduct({product, quantity: 1 }));
    dispatch(toggleItemAdded(true));
    navigate(`/cart`)
    },1300)
  };
  console.log(addToCart);
  const navigateToProduct = () => {
    navigate(`/products/${product._id}`)
 }

  return (
    <Card sx={{  margin: 0.95 }} className="CardProduct">
      <Link onClick={navigateToProduct} underline="none" color="black" >
        <CardMedia
        className="CardProduct_img"
          component="img"
          image={product.image}
          alt={product.image}
          
        />
        <Typography  className="CardProduct_title" style={{ fontWeight: "bold",  }}>
          {product.title}
        </Typography>
      </Link>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          variant="body1"
          style={{
            color: "red",
            padding: 5,
            paddingBottom: 10,
            fontWeight: "bold",
          }}
        >
          {formatter.format(product.price)}
        </Typography>
        <Box sx={{ position: 'relative' }}>
        <IconButton color="error" onClick={addToCart}>
        {success ? <CheckIcon /> :  <ShoppingCartIcon />}
        </IconButton>
        {loading && (
          <CircularProgress
            size={31}
            sx={{
              color: "red",
              position: 'absolute',
              top: 3,
              left: 4,
              zIndex: 1,
            }}
          />
        )}
        </Box>
      </Stack>
    </Card>
  );
};

export default Product;
