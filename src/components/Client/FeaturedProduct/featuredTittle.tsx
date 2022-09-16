import { Box, Grid, Link, Typography } from "@mui/material";
import React, { FC } from "react";
type TitleProps = {
  title: string;
};

const FeaturedTittle: FC<TitleProps> = ({ title }) => {
  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 1,
        p: 0.5,
        width: "auto",
        backgroundColor: "red",
        color: "white",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Typography variant="h6">{title}</Typography>
        <Link
          className="custom-link"
          href="#"
          underline="none"
          color="white"
          fontWeight="bold"
        >
          <Typography variant="h6">Xem tất cả</Typography>
        </Link>
      </Grid>
    </Box>
  );
};
export default FeaturedTittle;
