import { FC, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "@mui/material/Link";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { searchFilter } from "../../../store/products/products.slice";

const Header: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { cartItems } = useAppSelector((state) => state.cartReducer);
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    dispatch(searchFilter(event.target.value))
 }
  return (
    <Container
      className="header"
      maxWidth={false}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Toolbar disableGutters>
        <Link onClick={() => navigate("/")} className={`header_navbarLogo`}>
          <Box
            className="header_img"
            component="img"
            src="https://theme.hstatic.net/1000284798/1000807193/14/logo.png?v=714"
            alt=""
          />
        </Link>
        <Box pr={5}>
          <Paper className="header_search" component="form">
            <InputBase  onChange={onChangeSearch} value={searchTerm}  className="header_input_search" placeholder="Tìm kiếm" />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <div className="header_typography">
          <Box pr={2}>
            <Stack direction="row" alignItems="center" gap={2} color="black">
              <PhoneIcon fontSize="large" />
              <Typography gutterBottom component="div" variant="body2">
                Hỗ trợ khách hàng <br />
                <Link
                  className="header_custom-link"
                  href="#"
                  underline="none"
                  color="black"
                  fontWeight="bold"
                >
                  0123416789
                </Link>
              </Typography>
            </Stack>
          </Box>
        </div>
        <div className="header_typography">
          <Box pr={2}>
            <Stack direction="row" alignItems="center" gap={2} color="black">
              <PersonIcon fontSize="large" />
              <Typography variant="body2" gutterBottom component="div">
                <Link
                  className="custom-link"
                  onClick={() => navigate("/login")}
                  underline="none"
                  color="black"
                  fontWeight="bold"
                >
                  Đăng nhập <br />
                </Link>
                <Link
                  className="custom-link"
                  onClick={() => navigate("/register")}
                  underline="none"
                  color="black"
                  fontWeight="bold"
                >
                  Đăng kí
                </Link>
              </Typography>
            </Stack>
          </Box>
        </div>
        <Box>
          <Link onClick={() => navigate("/cart")} underline="none">
            <Button
              color="error"
              startIcon={<ShoppingCartIcon />}
              variant={"outlined"}
            >
              <div className="header_typography">
                Giỏ hàng({cartItems.length})
              </div>
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </Container>
  );
};

export default Header;
