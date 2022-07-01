import { FC, useState } from "react";
import { Box, Button, Container, Menu, MenuItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { makeStyles } from "@mui/styles";
import PaymentIcon from "@mui/icons-material/Payment";
import { useAppSelector } from "../../../hooks";
import CategoryItem from "../Category/categoryItem";
import SettingsIcon from '@mui/icons-material/Settings';
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
  const [anchorEl, setAnchorEl] = useState<any>(null);

  function handleClick(event: React.ChangeEvent<unknown>) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const { isLoading, filteredCategories } = useAppSelector(
    (state) => state.categoriesReducer
  );
  // const classes = useStyles();
  return (
    <div className="headerSecond">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box className="headerSecond_listcate">
            <Button
              className="headerSecond_button-item"
              color="inherit"
              startIcon={<MenuIcon />}
              size="small"
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              onMouseOver={handleClick}
            >
              Danh mục sản phẩm
            </Button>
            <Menu
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              {filteredCategories.map((cate) => {
                return (
              <MenuItem  key= {cate._id} onClick={handleClose} sx = {{ padding: 0 ,marginTop: 1}}>
                  <CategoryItem category={cate} />
              </MenuItem>
                );
              })}
             
            </Menu>
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
