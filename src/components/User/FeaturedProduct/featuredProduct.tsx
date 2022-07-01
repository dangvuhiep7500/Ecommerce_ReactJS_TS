import { Container } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { filterByCategory } from "../../../store/products/products.slice";
import Category from "../Category/category";
import FeaturedTittle from "./featuredTittle";
import Product from "./products-card";
interface prop {
  category: ICategory;
}
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

  const { filteredProducts } = useAppSelector((state) => state.productsReducer);

  const { filteredCategories } = useAppSelector(
    (state) => state.categoriesReducer
  );
    console.log(filteredCategories.filter((id) => id._id === "62b32e9af81144a535e03211"));

    const test = filteredCategories.find((id) => id._id === "62b32e9af81144a535e03211");
    console.log(test);
    

  return (
    <Container maxWidth="lg" sx={{ mb: 2 }}>
      {/* <FeaturedTittle title="PC DV - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC" /> */}
      <Slider {...settings}>
        {/* {Value.map((item) => {
          return (
            <Product key={item._id} id={item._id} img={item.img} title={item.des} price={item.price} />
          );
        })} */}
        {/* {filteredProducts.map((product) => {
          return categoryId === product.categoryId ? (
            <Product key={product._id} product={product} />
          ) : null;
        })} */}


      </Slider>
    </Container>
  );
};

export default FeaturedProduct;
