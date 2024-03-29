import { FC, useState } from "react";
import { Box, Button, Container, Menu, MenuItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PaymentIcon from "@mui/icons-material/Payment";
import { useAppSelector } from "../../../hooks";
import CategoryItem from "../Category/categoryItem";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const HeaderBot: FC = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoriesReducer
  );
  const navigate = useNavigate();
  return (
    <div className="headerSecond">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box className="headerSecond_listcate">
            <div className="headerSecond_dropdown">
              <Button
                className="headerSecond_dropbtn"
                color="inherit"
                startIcon={<MenuIcon />}
                size="small"
                aria-haspopup="true"
              >
                Danh mục sản phẩm
              </Button>
              <div className="headerSecond_dropdown-content">
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
              onClick={() => navigate("/pay")}
            >
              Hướng dẫn trả góp
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
        </Toolbar>
      </Container>
    </div>
  );
};

export default HeaderBot;
