import { ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
    category: ICategory
  }
const CategoryItem: FC<Props> = ({category}) =>{
    const navigate = useNavigate()
    const navigateToProduct = () => {
      navigate(`/categories/${category._id}`)
    }
    return(
        <ListItem onClick={navigateToProduct} disablePadding key={category._id}  className="custom-item">
        <ListItemButton>
            <img src={category.categoryImage} alt={category.categoryImage} style={{width:20, height:18 , paddingRight:5}}/>
          <ListItemText
            disableTypography
            primary={<Typography variant="body2">{category.categoryName}</Typography>}
          />
        </ListItemButton>
      </ListItem>
    );
}
export default CategoryItem;