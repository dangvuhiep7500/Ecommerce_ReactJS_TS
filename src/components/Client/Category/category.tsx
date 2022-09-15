import { useState, useEffect, FC } from "react";
import { Grid, Container, Box } from "@mui/material";
import Slider from "react-slick";
import { useAppSelector } from "../../../hooks";
import CategoryItem from "./categoryItem";

const Category: FC = () => {
  const settings = {
    className: "slider",
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 800,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  };
  const Value = [
    {
      img: "https://www.tncstore.vn/image/catalog/banner/2021/Slide/WEB%20-%20OFFICIAL%20STORE%202%20-%20ACER.jpg",
      des: "",
    },
    {
      img: "https://www.tncstore.vn/image/catalog/banner/2021/Th%C3%A1ng%204/nzxt-store-2.jpg",
      des: "",
    },
    {
      img: "https://www.tncstore.vn/image/catalog/banner/2021/Thang%201/WEB%20-%20OFFICIAL%20STORE%202%20-%20LG.jpg",
      des: "",
    },
    {
      img: "https://www.tncstore.vn/image/catalog/banner/2021/thang%2011/WEB%20-%20OFFICIAL%20STORE%202%20-%20VIEWSONIC.jpg",
      des: "",
    },
  ];
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoriesReducer
  );

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={2} className="category">
          <Box>
            <ul className="menu" >
              {categories.map((cate) => {
                return <CategoryItem key={cate._id} category={cate} />;
              })}
            </ul>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box className="trending">
              <Slider {...settings}>
                {Value.map((item, i) => {
                  return (
                    <div key={i} className="trending_top">
                      <Slider {...settings}>
                        <div>
                          <img className="trending_img"
                            src={`${item.img}`}
                          />
                        </div>
                      </Slider>
                    </div>
                  );
                })}
              </Slider>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Category;
