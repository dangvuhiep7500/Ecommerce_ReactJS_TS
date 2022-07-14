import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  category: ICategory;
}
const CategoryItem: FC<Props> = ({ category }) => {
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate(`/categories/${category._id}`);
  };
  return (
    <li>
      <ListItem
        onClick={navigateToProduct}
        disablePadding
        key={category._id}
        className="custom-item"
      >
        <ListItemButton>
          <img
            src={category.categoryImage}
            alt={category.categoryImage}
            style={{ width: 20, height: 18, paddingRight: 5 }}
          />
          <ListItemText
            disableTypography
            primary={
              <Typography variant="caption">{category.categoryName}</Typography>
            }
          />
        </ListItemButton>
      </ListItem>
      <div className="megadrop">
        <div className="col">
          <h3>{category.categoryName}</h3>
          {category.children.map((submenu, index) => {
            return (
              <ul>
                <li>
                  <a href="#">{submenu.categoryName}</a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </li>
  );
};
export default CategoryItem;
