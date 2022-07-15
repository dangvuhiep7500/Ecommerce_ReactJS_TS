import {
  Box,
  Container,
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  Pagination,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import Product from "../FeaturedProduct/products-card";
import usePagination from "../FeaturedProduct2/Pagination";

const CategoryDetail: FC = () => {
  const { isLoading, filteredProducts } = useAppSelector(
    (state) => state.productsReducer
  );
  const [page, setPage] = useState(1);
  const PER_PAGE = 25;
  const pageCount = Math.ceil(filteredProducts.length / PER_PAGE);
  const _DATA = usePagination(filteredProducts, PER_PAGE);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    _DATA.jump(value);
  };
  const { slug } = useParams();
  const { categories } = useAppSelector((state) => state.categoriesReducer);
  const cate = categories.filter((cate) => cate.slug === String(slug))[0];
  const subcate = categories.filter(
    (cate) => cate.children.filter((sub) => sub.slug === String(slug))[0]
  );

  console.log(subcate);

  if (cate) {
    return (
      <Container maxWidth="lg">
        <Typography variant="h4">{cate.categoryName}</Typography>
        <Box sx={{ mb: 4 }}>
          <Grid container>
            {_DATA.currentData().map((product: IProduct) => {
              return cate._id === product.categoryId ? (
                <Product key={product._id} product={product} />
              ) : null;
            })}
          </Grid>
          {pageCount > 1 && (
            <Pagination
              style={{ display: "flex", justifyContent: "center" }}
              onChange={handleChange}
              count={pageCount}
              variant="outlined"
              shape="rounded"
              page={page}
            />
          )}
        </Box>
      </Container>
    );
  } else if (subcate) {
    return (
      <Container maxWidth="lg">
        {subcate.map((sub) =>
          sub.children.map((subcate) => {
            return subcate.slug === String(slug) ? (
              <Box key={subcate._id} sx={{ mb: 4 }}>
              <Typography  variant="h4">{subcate.categoryName}</Typography>
                <Grid container>
                  {_DATA.currentData().map((product: IProduct) => {
                    return subcate._id === product.categoryId ? (
                      <Product key={product._id} product={product} />
                    ) : null;
                  })}
                </Grid>
                {pageCount > 1 && (
                  <Pagination
                    style={{ display: "flex", justifyContent: "center" }}
                    onChange={handleChange}
                    count={pageCount}
                    variant="outlined"
                    shape="rounded"
                    page={page}
                  />
                )}
              </Box>
            ) : null;
          })
        )}
      </Container>
    );
  } else {
    return (
      <Container maxWidth="lg">
        <div className={"product"}>
          <div className={"productWrapper"}>
            <Skeleton variant="rectangular" width={500} height={500} />
            <div className={"productDescription"}>
              <Typography variant={"h1"} className={"productTitle"}>
                <Skeleton />
              </Typography>
              <div className={"productText"}>
                <Skeleton />
                <Skeleton />
              </div>
              <div className={"productPrice"}>
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
};
export default CategoryDetail;
