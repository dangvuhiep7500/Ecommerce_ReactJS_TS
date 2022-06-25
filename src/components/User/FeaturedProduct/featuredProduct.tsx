import { Container } from "@mui/material";
import React, { FC } from "react";
import Slider from "react-slick";
import FeaturedTittle from "./featuredTittle";
import Product from "./products";
const FeaturedProduct: FC = () => {
  var settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Value = [
    {
      _id: "1",
      img: "https://product.hstatic.net/1000284798/product/i5_12100f__8g_500w_gtx1050ti_72a7d791f0ab412fb9fdb9e7b0a50deb_large.png",
      des: "Cấu hình i3 12100F/ H610M / 8G RAM/ SSD 120G/ 500W/ GTX1050ti",
      price: 12500000,
    },
    {
      _id: "2",
      img: "https://product.hstatic.net/1000284798/product/i5_12100f__8g_500w_gt_1030_4g_c80ffb4cb641406f833c6e0537897d47_large.png",
      des: "Cấu hình i3 12100F/ H610M / 8G RAM/ SSD 120G/ 500W/ GT1030 4G",
      price: 10500000,
    },
    {
      _id: "3",
      img: "https://product.hstatic.net/1000284798/product/i5_12100f__8g_650w_rtx_3050_cad24f6b38944d749f539edb7cdbe7c2_large.png",
      des: "Cấu hình i3 12100F/ H610M / 16G RAM/ SSD 240G/ 650W/ RTX3050",
      price: 18300000,
    },
    {
      _id: "4",
      img: "https://product.hstatic.net/1000284798/product/i5_12100f__8g_650w_rtx_2060_583c9968dcbc4367a142cd320f90a820_large.png",
      des: "Cấu hình i3 12100F/ H610M / 16G RAM/ SSD 240G/ 650W/ RTX2060",
      price: 18250000,
    },
    {
      _id: "5",
      img: "https://product.hstatic.net/1000284798/product/i5_12100f__8g_500w_gtx1660_7509fa818f21438b9d5bcafe9e1be0c5_large.png",
      des: "Cấu hình i3 12100F/ H610M / 16G RAM/ SSD 120G/ 500W/ GTX1660",
      price: 17000000,
    },
    {
      _id: "6",
      img: "https://product.hstatic.net/1000284798/product/i5_12100f__8g_500w_gtx1660_7509fa818f21438b9d5bcafe9e1be0c5_large.png",
      des: "Cấu hình i3 12100F/ H610M / 16G RAM/ SSD 120G/ 500W/ GTX1660",
      price: 17000000,
    },
  ];
  return (
    <Container maxWidth="lg" sx={{ mb: 2 }}>
      <FeaturedTittle title="PC DV - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC" />
      <Slider {...settings}>
        {Value.map((item) => {
          return (
            <Product key={item.des} id={item._id} img={item.img} des={item.des} price={item.price} />
          );
        })}
      </Slider>
    </Container>
  );
};

export default FeaturedProduct;
