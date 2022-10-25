import { Box, Container, Grid, Pagination } from "@mui/material";
import { FC, useEffect, useState } from "react";
import FeaturedTittle from "../FeaturedProduct/featuredTittle";
import Product from "../FeaturedProduct/products-card";
import usePagination from "./Pagination";
import { useAppSelector } from "../../../hooks";

const FeaturedProduct2: FC = () => {
  const { isLoading, filteredProducts } = useAppSelector(
    (state) => state.productsReducer
  );
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const pageCount = Math.ceil(filteredProducts.length / PER_PAGE);
  const _DATA = usePagination(filteredProducts, PER_PAGE);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    _DATA.jump(value);
  };

  return (
    <div className="container">
      <Container sx={{ mb: 2 }}>
        <FeaturedTittle title="Tất cả sản phẩm" />
        {isLoading ? (
          <div className="col-3">
            <div className="snippet" data-title=".dot-pulse">
              <div className="stage">
                <div className="dot-pulse"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
              <Grid container className="container_products">
                {_DATA.currentData().map((product: IProduct) => (
                  <Product key={product._id} product={product} />
                ))}
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
          </>
        )}
      </Container>
    </div>
  );
};

export default FeaturedProduct2;
