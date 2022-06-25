import { Container, Grid, List, ListItem } from "@mui/material";
import React, { FC } from "react";
import { productImages } from "../../../assets";
import ProductImagesSlider from "./productimage";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const Value = [
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn_73d5b3c3b48a4ba39b82cd72c13d50c7.jpg",
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn-1_014e4d7c374f4e308b4a7f7a599d7afe.jpg",
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn-2_2f68f91e0e5c40888e049cf66a11ee91.jpg",
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn-3_8195879b32534e3fbe9eff9ebc0262b4.jpg",
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn-4_49770abd5fb04059adb7a789f613571e.jpg",
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn-5_248c332d44d34832bd7fe53963518dae.jpg"
];
const ProductDetail: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 2 }}>
    <Grid container spacing={2} columns={16}>
      <Grid item xs={8}>
      <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
          <div
            style={{
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            <ProductImagesSlider images={Value} />
          </div>
          </div>
      </Grid>
      <Grid item xs={8}></Grid>
    </Grid>
    </Container>
  );
};

export default ProductDetail;
