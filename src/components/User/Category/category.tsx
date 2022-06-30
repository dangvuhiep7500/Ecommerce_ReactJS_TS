import { useState, useEffect, FC } from "react";
import {
  Grid,
  Container,
  Box,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import CategoryItem from "./categoryItem";
// interface CatProps{
//   _id: string;
//   categoryName: string;
//   categoryImage: string
// }
const Category: FC = () => {
  // const [category, setCategory] = useState<CatProps[]>([]);
  // useEffect(() => {
  //   axios.get("http://localhost:5000/categories/category").then((res) => {
  //     setCategory(res.data);
  //   });
  // }, []);
  // console.log(category);

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
  const { isLoading, filteredCategories } = useAppSelector(
    (state) => state.categoriesReducer
  );
  console.log(filteredCategories);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={2.3}>
          <Box>
            <List>
              {/* {category.map((cat, index) => {
                return (
                  <ListItem disablePadding key={index}  className="custom-item">
                    <ListItemButton>
                        <img src={cat.categoryImage} alt={cat.categoryImage} style={{width:20, height:18 , paddingRight:5}}/>
                      <ListItemText
                        disableTypography
                        primary={<Typography variant="body2">{cat.categoryName}</Typography>}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })} */}
              {filteredCategories.map((cate) => {
                return (
                  <CategoryItem key= {cate._id} category={cate} />
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={9.7}>
          <Box>
          <div className="trending">
            <Slider {...settings}>
              {Value.map((item, i) => {
                return (
                  <div key={i} className="trending-top">
                    <Slider {...settings}>
                      <div>
                        <img src={`${item.img}`} style={{ width: "inherit" }} />
                      </div>
                    </Slider>
                  </div>
                );
              })}
            </Slider>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Category;
