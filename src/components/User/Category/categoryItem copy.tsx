import { Link, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import NestedMenuItem from "material-ui-nested-menu-item";
interface Props {
    category: ICategory
  }
const CategoryItemCopy: FC<Props> = ({category}) =>{
    const navigate = useNavigate()
    const navigateToProduct = () => {
      navigate(`/categories/${category._id}`)
    }
    const [menuPosition,setMenuPosition] = useState<any>(null)
    const handleItemClick = (event: React.MouseEvent) => {
      setMenuPosition(null);
    };
    return(
      // <NestedMenuItem
      //       label={category.categoryName}
      //       parentMenuOpen={!!menuPosition}
      //       onClick={handleItemClick}
      //     >
      //       <MenuItem>Sub-Sub-Button 1</MenuItem>
      //     </NestedMenuItem>
      <SubMenu onClick={navigateToProduct} label={category.categoryName}>
        {category.children.map((submenu,index) =>{
          return(
            <Link onClick={navigateToProduct}>
            <MenuItem key={index}>{submenu.categoryName}</MenuItem>
            </Link>
          );
        })}
      </SubMenu>
    );
}
export default CategoryItemCopy;