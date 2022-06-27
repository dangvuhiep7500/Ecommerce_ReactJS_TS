import { FC } from "react";
// import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { makeStyles } from "@mui/styles";
import PaymentIcon from "@mui/icons-material/Payment";
// const useStyles = makeStyles({
//   button: {
//     backgroundColor: '#3c52b2',
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: 'red',
//       color: 'red',
//   },
// }})
const HeaderBot: FC = () => {
  // const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Toolbar
        disableGutters
        sx={{ justifyContent: "center", width: "max-content" }}
      >
        {listProduct()}
        <Box sx={{ border: 1, marginLeft:2, borderRadius: '5px' }} className="custom-item">
          <Button
            color="inherit"
            startIcon={<PaymentIcon />}
            size = "small"
            sx={{paddingLeft:2 , paddingRight:2}}
          >
            Hướng dẫn thanh toán
          </Button>
        </Box>
        <Box sx={{ border: 1, marginLeft:2, borderRadius: '5px' }} className="custom-item">
          <Button
            color="inherit"
            size = "small"
            startIcon={<PaymentIcon />}
            sx={{paddingLeft:2 , paddingRight:2}}
          >
            Hướng dẫn thanh toán
          </Button>
        </Box>
        <Box sx={{ border: 1, marginLeft:2, borderRadius: '5px' }} className="custom-item">
          <Button
            color="inherit"
            size = "small"
            startIcon={<PaymentIcon />}
            sx={{paddingLeft:2 , paddingRight:2}}
          >
            Hướng dẫn thanh toán
          </Button>
        </Box>
        <Box sx={{ border: 1, marginLeft:2, borderRadius: '5px' }} className="custom-item">
          <Button
            color="inherit"
            size = "small"
            startIcon={<PaymentIcon />}
            sx={{paddingLeft:2 , paddingRight:2}}
          >
            Hướng dẫn thanh toán
          </Button>
        </Box>
      </Toolbar>
    </Container>
  );

  function listProduct() {
    return (
      <Box sx={{ border: 1, borderRadius: '5px', p: 0.5 }}>
        <div
          style={{
            display: "flex",
            width: "auto",
          }}
        >
          <MenuIcon />
          <span>Danh mục sản phẩm</span>
        </div>
      </Box>
    );
  }
};

export default HeaderBot;
