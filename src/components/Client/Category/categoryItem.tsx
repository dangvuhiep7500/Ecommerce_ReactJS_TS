import {
  Link,
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
  const navigateToCategory = () => {
    navigate(`/${category.slug}`);
  };
  return (
    <li>
      <ListItem
        onClick={navigateToCategory}
        disablePadding
        className="custom-item"
      >
        <ListItemButton>
          <img
            src={category.categoryImage}
            alt={category.categoryImage}
            style={{ width: 20, height: 18, paddingRight: 15 }}
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
          <Link className="title" underline="none" fontWeight="bold">
            {category.categoryName}
          </Link>
          {category.children.map((submenu) => {
            return (
              <ul key={submenu._id} >
                <Link
                  onClick={() => navigate(`/${submenu.slug}`)}
                  className="submenu"
                  underline="none"
                  fontWeight="bold"
                >
                  {submenu.categoryName}
                </Link>
              </ul>
            );
          })}
        </div>
      </div>
    </li>
  );
};
export default CategoryItem;
