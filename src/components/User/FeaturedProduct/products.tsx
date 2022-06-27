import {
  Card,
  CardActionArea,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import React, { FC } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
type ProductProps = {
  id: string;
  img: string;
  title: string;
  price: number;
};
const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
const Product: FC<ProductProps> = ({ img, title, price,id }) => {
  return (
    <Card sx={{ width: 215, margin: 0.95 }}
    
    >
      <CardActionArea href={`/product/${id}`}>
        <CardMedia
          component="img"
          height="215"
          width="215"
          image={img}
          alt={img}
        />
        <Typography style={{ fontWeight: "bold", padding: 5 }}>
          {title}
        </Typography>
      </CardActionArea>
      <Stack direction="row" sx= {{ display: "flex",
        justifyContent: "space-between"}} >
      <Typography style={{ color: "red", padding: 5, paddingBottom:10 }}>
        {formatter.format(price)}
      </Typography>
      <IconButton color="error">
        <ShoppingCartIcon />
      </IconButton>
      </Stack>
    </Card>
  );
};

export default Product;
