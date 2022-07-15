import { FC, useState } from "react";
import { Box, Button, Container, Menu, MenuItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { makeStyles } from "@mui/styles";
import PaymentIcon from "@mui/icons-material/Payment";
import { useAppSelector } from "../../../hooks";
import CategoryItem from "../Category/categoryItem";
import SettingsIcon from "@mui/icons-material/Settings";

const HeaderBot: FC = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoriesReducer
  );
  return (
    <div className="headerSecond">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box className="headerSecond_listcate">
            <div className="dropdown">
              <Button
                className="dropbtn"
                color="inherit"
                startIcon={<MenuIcon />}
                size="small"
                aria-haspopup="true"
              >
                Danh mục sản phẩm
              </Button>
              <div className="dropdown-content">
                <ul className="menu">
                  {categories.map((cate) => {
                    return <CategoryItem key={cate._id} category={cate} />;
                  })}
                </ul>
              </div>
            </div>
          </Box>
          <Box className="headerSecond_custom-item">
            <Button
              className="headerSecond_button-item"
              color="inherit"
              startIcon={<SettingsIcon />}
              size="small"
              sx={{ paddingLeft: 2, paddingRight: 2 }}
            >
              Xây dựng cấu hình
            </Button>
          </Box>
          <Box className="headerSecond_custom-item">
            <Button
              className="headerSecond_button-item"
              color="inherit"
              startIcon={<PaymentIcon />}
              size="small"
              sx={{ paddingLeft: 2, paddingRight: 2 }}
            >
              Chính sách vận chuyển
            </Button>
          </Box>
          <Box className="headerSecond_custom-item">
            <Button
              className="headerSecond_button-item"
              color="inherit"
              startIcon={<PaymentIcon />}
              size="small"
              sx={{ paddingLeft: 2, paddingRight: 2 }}
            >
              Đổi trả và bảo hành
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};

export default HeaderBot;
