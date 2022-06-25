import { FC } from "react";
// import { useNavigate } from "react-router-dom";
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

const Header: FC = () => {
  // const navigate = useNavigate()
  return (
    <Container 
      maxWidth= "lg"
      sx={{ borderBottom: 1, borderColor: "grey.400" }}
    >
      <Toolbar disableGutters sx={{justifyContent: "center",width: "max-content"}}>
        <Box pr={5}
          component="img"
          sx={{
            width: 248,
            height: 60,
            margin: 2,
          }}
          src="https://theme.hstatic.net/1000284798/1000807193/14/logo.png?v=714"
          alt=""
        />
        <Box pr={5}>
          <Paper
            component="form"
            sx={{
              p: "0.1rem 0.3rem",
              display: "flex",
              alignItems: "center",
              width: "20rem",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <Box pr={2}>
          <Stack direction="row" alignItems="center" gap={2} color="black">
            <PhoneIcon fontSize="large" />
            <Typography variant="body2" gutterBottom component="div">
                Hỗ trợ khách hàng <br />
              <Link
                className="custom-link"
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
        <Box pr={2}>
          <Stack direction="row" alignItems="center" gap={2} color="black">
            <PersonIcon fontSize="large" />
            <Typography variant="body2" gutterBottom component="div">
              <Link
                className="custom-link"
                href="#"
                underline="none"
                color="black"
                fontWeight="bold"
              >
                Đăng nhập <br />
              </Link>
              <Link
                className="custom-link"
                href="#"
                underline="none"
                color="black"
                fontWeight="bold"
              >
                Đăng kí
              </Link>
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Button
            color="error"
            startIcon={<ShoppingCartIcon />}
            variant={"outlined"}
          >
            Giỏ hàng({0})
          </Button>
        </Box>
      </Toolbar>
    </Container>
  );
};

export default Header;
