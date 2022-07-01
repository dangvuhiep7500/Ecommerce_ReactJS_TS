import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { FC, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addProduct, toggleItemAdded } from "../../../store/cart/cart.slice";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";
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

  const addToCart = () => {
    dispatch(addProduct({product, quantity: 1 }));
    dispatch(toggleItemAdded(true));
  };
  console.log(addToCart);
  const navigateToProduct = () => {
    navigate(`/products/${product._id}`)
 }

  return (
    <Card sx={{  margin: 0.95 }} className="CardProduct">
      <Link onClick={navigateToProduct} underline="none" color="black">
        <CardMedia
        className="CardProduct_img"
          component="img"
          image={product.image}
          alt={product.image}
        />
        <Typography  className="CardProduct_title" style={{ fontWeight: "bold",}}>
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
        <IconButton color="error" onClick={addToCart}>
          <ShoppingCartIcon />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default Product;
