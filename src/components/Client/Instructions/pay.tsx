import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
const post = [
  {
    title: "HƯỚNG DẪN TRẢ GÓP",
  },
  {
    description: "ĐIỀU KIỆN TRẢ GÓP HDSAIGON",
  },
  {
    Text: "Nhằm đáp ứng hơn nữa nhu cầu mua sắm, tiêu dùng của khách hàng, HD SAISON chính thức triển khai gói dịch vụ VAY TIỀN MẶT DÀNH CHO KHÁCH HÀNG MỚI. Với gói hỗ trợ Vay tiền mặt, ngoài những khách hàng thân thiết (đã từng mua trả góp với HD SAISON, có lịch sử thanh toán tốt) sẽ được xét duyệt các khoản vay phù hợp trước đây, nay đối tượng khách hàng sẽ được mở rộng dành cho cả khách hàng mới!",
  },
];
const Pay: FC = () => {
  return (
    <>
    <Container component="main">
      <Box
        sx={{
         marginTop: "1rem",
        }}
      />
   
            {post.map((item, index) => (
              <>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                  key={index}
                >
                  {item.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {item.description}
                </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                  {item.Text}
                </Typography>
              </>
            ))}
      </Container>
    </>
  );
};
export default Pay;