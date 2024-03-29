import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProductImagesSlider from "./swiper-image";
import { addProduct, toggleItemAdded } from "../../../store/cart/cart.slice";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";

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
const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
const ProductDetailsView: React.FC<{ product: IProduct }> = ({ product }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.ChangeEvent<unknown>, newValue: any) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const addToCart = () => {
    setTimeout(() => {
      dispatch(addProduct({ product, quantity: 1 }));
      dispatch(toggleItemAdded(true));
      navigate(`/cart`);
    }, 500);
  };
  const { _id, image, title, categoryId, description, price, imageDetail } =
    product;
  console.log(imageDetail);

  return (
    <Container maxWidth="lg" sx={{ mb: 2 }}>
      <Grid
        container
        spacing={2}
        columns={16}
        marginBottom={3}
        sx={{ flexDirection: { xs: "column", md: "row" }, marginTop: 1 }}
      >
        <Grid item xs={16.5} md={8}>
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
              <ProductImagesSlider images={imageDetail} />
            </div>
          </div>
        </Grid>
        <Grid item xs={16.5} md={8}>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h6" gutterBottom component="div">
              {title}
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
                70.000.000đ
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
                {formatter.format(price)}
              </Typography>
            </Typography>
          </Box>
          <Button
            onClick={addToCart}
            variant="contained"
            color="error"
            size="large"
          >
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
                <Grid item xs={6} md={2} marginBottom={2}>
                  <Typography variant="body1" fontWeight="bold">
                    {item.col1}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{item.col2}</Typography>
                </Grid>
              </Grid>
            ))}
            <Typography variant="h6" fontWeight="bold" marginBottom={2}>
              Đánh giá chi tiết sản phẩm {title}
            </Typography>
            <Typography variant="body1" fontWeight="bold" marginBottom={2}>
              {description}
            </Typography>
          </TabPanel>
          <TabPanel value="2">Đặc điểm nổi bật</TabPanel>
          <TabPanel value="3">Review</TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};
export default ProductDetailsView;
