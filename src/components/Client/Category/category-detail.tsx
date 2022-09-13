import {
  Box,
  Container,
  Drawer,
  FormControl,
  Grid,
  MenuItem,
  Pagination,
  // Select,
  SelectChangeEvent,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {  handleFilterBySort, setFilterValues } from "../../../store/products/products.slice";
import Product from "../FeaturedProduct/products-card";
import usePagination from "../FeaturedProduct2/Pagination";
import { useSelector } from 'react-redux';
import Select from 'react-select';
const CategoryDetail: FC = () => {
  const { isLoading, filteredProducts,filterValues } = useAppSelector(
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
  // sort
  const dispatch = useAppDispatch();
  const sort = [
    { value: "Mới nhất", label: "Mới nhất" },
    { value: "Giá (Thấp - Cao)", label: "Giá (Thấp - Cao)" },
    { value: "Giá (Cao - Thấp)", label: "Giá (Cao - Thấp)" },
    { value: "Tên (A - Z)", label: "Tên (A - Z)" },
    { value: "Tên (Z - A)", label: "Tên (Z - A)" },
  ];
 
  useEffect(() => {
    filterValues.sort && dispatch(handleFilterBySort({}));
  }, [
    filterValues.sort,
  ]);
  console.log(filterValues.sort);
  
  const defaultValueSort = (optionSort: any, sortVal: any) => {
    const result = optionSort.find((option: any) => option.value === sortVal);
    return result;
  };
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
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box>
                    <Typography variant="h4">{subcate.categoryName}</Typography>
                  </Box>
                  <Stack direction="row" alignItems="center">
                    <Typography fontWeight={600} variant="body1">
                      Sắp xếp theo:
                    </Typography>
                    <FormControl
                      sx={{ m: 1, minWidth: 200, backgroundColor: "#e0e0e0" }}
                      size="small"
                    >
                      <Select
                        options={sort}
                        value={defaultValueSort(sort, filterValues.sort)}
                        onChange={(e:any) =>
                          dispatch(
                            setFilterValues({ type: "sort", val: e.value })
                          )
                        }
                        placeholder="Mới nhất"
                      />
                    </FormControl>
                  </Stack>
                </Stack>
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
