import { Box, Container, Grid, Pagination } from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import FeaturedTittle from "../FeaturedProduct/featuredTittle";
import Product from "../FeaturedProduct/products-card";
import usePagination from "./Pagination";
import { useAppSelector } from "../../../hooks";

const FeaturedProduct2: FC = () => {
  const { isLoading, filteredProducts } = useAppSelector(
    (state) => state.productsReducer
  );
  console.log(filteredProducts)
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  // // const [product, setProduct] = useState<PropProduct[]>([]);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/products/")
  //     .then((res) => {
  //       // setProduct(res.data);
  //       dispatch(setProducts(res.data));
  //       setPosts(res.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error while fetching data : " + error);
  //     });
  // }, []);
  // const products = useSelector(
  //   (state: IState) => state.productReducer.products
  // );
  // const indexOfLastPost = page * PER_PAGE;

  // const indexOfFirstPost = indexOfLastPost - PER_PAGE;

  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageCount = Math.ceil(filteredProducts.length / PER_PAGE);
  const _DATA = usePagination(filteredProducts, PER_PAGE);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    _DATA.jump(value);
  };

  return (
    <Container maxWidth="lg" sx={{ mb: 2 }}>
      <FeaturedTittle title="LAPTOP GAMING BÁN CHẠY" />
      <Box sx={{ mb: 4 }}>
        <Grid container>
          {_DATA.currentData().map((product: IProduct) => (
            <Product key={product._id} product={product} />
          ))}
          {/* <ProductListingView products={currentPosts} /> */}
        </Grid>
      </Box>

      <Pagination
        style={{ display: "flex", justifyContent: "center" }}
        onChange={handleChange}
        count={pageCount}
        variant="outlined"
        shape="rounded"
        page={page}
      />
    </Container>
  );
};

export default FeaturedProduct2;
