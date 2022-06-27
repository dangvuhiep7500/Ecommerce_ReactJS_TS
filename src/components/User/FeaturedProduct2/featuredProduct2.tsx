import {
  Box,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import axios from "axios";
import  { FC, useEffect, useState } from "react";
import FeaturedTittle from "../FeaturedProduct/featuredTittle";
import Product from "../FeaturedProduct/products";
import usePagination from "./Pagination";
type PropProduct = {
  _id:string,
  image: string,
  title: string,
  price: number
}
const FeaturedProduct2: FC = () => {
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const [product, setProduct] = useState<PropProduct[]>([]);
  useEffect(() => {
    axios.get("http://localhost:5000/products/get").then((res) => {
      setProduct(res.data);
    });
  }, []);
  const pageCount = Math.ceil(product.length / PER_PAGE);
  const _DATA = usePagination(product, PER_PAGE);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    _DATA.jump(value);
  };
  console.log(product);
  return (
    <Container maxWidth="lg" sx={{ mb: 2 }}>
      <FeaturedTittle title="LAPTOP GAMING BÁN CHẠY" />
      <Box sx={{mb: 4}}>
         <Grid container>
          {_DATA.currentData().map((prd: PropProduct) => (
            <Product
              key={prd._id}
              id = {prd._id}
              img={prd.image}
              title={prd.title}
              price={prd.price}
            />
          ))}
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
