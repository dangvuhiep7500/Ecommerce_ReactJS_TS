import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import ProductImagesSlider from "./productimage";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Value = [
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn_73d5b3c3b48a4ba39b82cd72c13d50c7.jpg",
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn-1_014e4d7c374f4e308b4a7f7a599d7afe.jpg",
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn-2_2f68f91e0e5c40888e049cf66a11ee91.jpg",
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn-3_8195879b32534e3fbe9eff9ebc0262b4.jpg",
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn-4_49770abd5fb04059adb7a789f613571e.jpg",
  "https://product.hstatic.net/1000026716/product/laptop-msi-modern-14-b5m-202vn-5_248c332d44d34832bd7fe53963518dae.jpg",
];
const Data = [
  "✔ Bảo hành chính hãng 12 tháng. ",
  "✔ Hỗ trợ đổi mới trong 7 ngày. ",
  "✔ Windows bản quyền tích hợp.  ",
];
const Data1 = [
  {
    col1: "CPU",
    col2: "AMD Ryzen 5 – 5500U (6 nhân 12 luồng)",
  },
  {
    col1: "RAM",
    col2: "8GB DDR4 (2x SO-DIMM socket, up to 32GB SDRAM)",
  },
  {
    col1: "Ổ cứng",
    col2: "512GB PCIe® NVMe™ M.2 SSD",
  },
  {
    col1: "Card đồ họa",
    col2: "NVIDIA GeForce GTX 1650 4GB GDDR6",
  },
  {
    col1: "Màn hình",
    col2: "15.6 FHD (1920 x 1080) IPS, Anti-Glare, 144Hz",
  },
  {
    col1: "Cổng giao tiếp",
    col2: "1x USB 3.0 , 1x USB Type C",
  },
  {
    col1: "Ổ quang",
    col2: "None",
  },
  {
    col1: "Audio",
    col2: "True Harmony; Dolby® Audio Premium",
  },
  {
    col1: "Chuẩn LAN",
    col2: "10/100/1000/Gigabits Base T",
  },
  {
    col1: "Chuẩn WIFI",
    col2: "Wi-Fi 6(Gig+)(802.11ax) (2x2)",
  },
  {
    col1: "Bluetooth",
    col2: "	v5.0",
  },
  {
    col1: "Webcam",
    col2: "HD Webcam",
  },
  {
    col1: "Hệ điều hành",
    col2: "Windows 11 Home",
  },
  {
    col1: "Pin",
    col2: "4 Cell 48Whr",
  },
  {
    col1: "Trọng lượng",
    col2: "2.1 kg",
  },
  {
    col1: "Màu sắc",
    col2: "Đen, Có đèn bàn phím",
  },
  {
    col1: "Kích thước",
    col2: "363.4 x 254.5 x 23.25 (mm)",
  },
];
export interface PropProduct {
  id:string,
  image: string[],
  title: string,
  price: number
  // product: IProduct;
}
const ProductDetail: FC = () => {
  const [value, setValue] = React.useState("1");
  const location = useLocation().pathname.split("/")[2];
  const handleChange = (event: React.ChangeEvent<unknown>, newValue: any) => {
    setValue(newValue);
  };
  const [detail, setDetail] = useState<PropProduct>();
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/get/" + location)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  return (
    <Container maxWidth="lg" sx={{ mb: 2 }}>
      <Grid container spacing={2} columns={16} marginBottom={3}>
        <Grid item xs={8}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "#fff",
              }}
            >
              <ProductImagesSlider images={Value} />
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h6" gutterBottom component="div">
              {detail?.title}
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            {Data.map((item, index) => (
              <Typography
                variant="body1"
                gutterBottom
                component="div"
                key={index}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom component="div" color={"red"}>
              Hỗ trợ trả góp MPOS (Thẻ tín dụng), HDSAISON.
            </Typography>
            <Typography variant="body2" gutterBottom component="div">
              (Hình ảnh chỉ mang tính chất minh họa).
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" gutterBottom component="div">
              Giá Cũ:
              <Typography
                variant="h5"
                style={{
                  textDecoration: "line-through",
                  paddingLeft: 20,
                  display: "inline",
                  color: "grey",
                }}
              >
                15,000,000đ
              </Typography>
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              Giá Mới:
              <Typography
                variant="h5"
                style={{
                  paddingLeft: 13,
                  display: "inline",
                  color: "red",
                }}
                fontWeight="bold"
              >
                14,000,000đ
              </Typography>
            </Typography>
          </Box>
          <Button variant="contained" color="error" size="large">
            Đặt Hàng
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Mô tả sản phẩm" value="1" />
              <Tab label="Đặc điểm nổi bật" value="2" />
              <Tab label="Review" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography variant="h5" fontWeight="bold" marginBottom={2}>
              Thông số kỹ thuật:
            </Typography>
            {Data1.map((item, index) => (
              <Grid container key={index} paddingLeft={2}>
                <Grid item xs={2} marginBottom={2}>
                  <Typography variant="body1" fontWeight="bold">
                    {item.col1}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{item.col2}</Typography>
                </Grid>
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value="2">Đặc điểm nổi bật</TabPanel>
          <TabPanel value="3">Review</TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default ProductDetail;
