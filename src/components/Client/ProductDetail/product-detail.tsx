import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useParams } from "react-router-dom";
import ProductDetailsView from "./product-detail-view";
import { useAppSelector } from "../../../hooks";
import { Container, Skeleton, Typography } from "@mui/material";

const ProductDetail: React.FC = () => {
  const { productId } = useParams();
  const { products } = useAppSelector((state) => state.productsReducer);
  const product = products.filter(
    (product) => product._id === String(productId)
  )[0];
  if (product) {
    return <ProductDetailsView product={product} />;
  } else {
    return (
      <Container maxWidth="lg">
      <div className={"product"}>
        <div className={"productWrapper"}>
          <Skeleton variant="rectangular" width={568} height={568} />
          <div className={"productDescription"}>
            <Typography className={"productTitle"}>
              <Skeleton />
            </Typography>
            <div className={"productText"}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
            <div className={"productPrice"}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
      </Container>
    );
  }
};

export default ProductDetail;
