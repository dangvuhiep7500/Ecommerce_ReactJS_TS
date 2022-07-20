import { Box, Container, Grid } from "@mui/material";
import { FC } from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
const footerAboutLinks = [
  {
    display:
      "Cung cấp PC Gaming, Văn Phòng, Đồ Họa, Workstation, Linh kiện PC giá thành tốt nhất. Đáp ứng đúng nhu cầu sử dụng của từng khách hàng.",
    path: "/about",
  },
  {
    display: "MST: 3603797285",
    path: "/about",
  },
  {
    display: "Địa chỉ: 1/29 Vũ Hồng Phô, Phường Bình Đa, Biên Hòa - Đồng Nai",
    path: "/about",
  },
  {
    display: "Số điện thoại: 0903602240",
    path: "/about",
  },
  {
    display: "Email: tcomvn@gmai.com",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
  {
    display: "Chính sách giải quyết khiếu nại",
    path: "/about",
  },
  {
    display: "Điều khoản sử dụng",
    path: "/about",
  },
];
// const footerLocalLinks = [
//   {
//     display: "Địa chỉ : 59h Nguyễn Kiệm, phường 3, quận Gò Vấp,",
//     path: "/about",
//   },
//   {
//     display: "Email: abc2000@gmail.com",
//     path: "/about",
//   },
//   {
//     display: "Hotline: 0948162500",
//     path: "/about",
//   },
//   {
//     display: "Giấy chứng nhân đăng ký Kinh doanh số",
//     path: "/about",
//   },
//   {
//     display: "0309532XXX do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp.",
//     path: "/about",
//   },
// ];

const Footer: FC = () => {
  // const navigate = useNavigate()
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 3 }}
        py={{ xs: 5, sm: 3 }}
        sx={{
          backgroundColor: "#e0e0e0",
        }}
        bgcolor="grey"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box color="black" fontWeight="bold">
                CÔNG TY TNHH MÁY TÍNH NGUYỄN TÂN
              </Box>
              <Box color="black">
                {footerAboutLinks.map((item, index) => (
                  <p key={index}>
                    <span color="black">{item.display}</span>
                  </p>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box color="black" fontWeight="bold">Chính sách Billion</Box>
              <Box  color="black">
                {footerCustomerLinks.map((item, index) => (
                  <p key={index}>
                    <span color="black">{item.display}</span>
                  </p>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box color="black" fontWeight="bold">Hỗ trợ khách hàng</Box>
              <Box>
                
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
