import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
interface Props {
  category: ICategory;
}
const item = [
  {
    iconClosed: <KeyboardArrowDownIcon />,
    iconOpened: <KeyboardArrowUpIcon />,
  },
];
const SubMenu: FC<Props> = ({ category }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const navigate = useNavigate();
  return (
    <>
      <ListItem
        onClick={category.children && showSubnav}
        disablePadding
        className="nav__mobile-navmenu"
      >
        <ListItemButton>
          <ListItemText
            disableTypography
            primary={<span>{category.categoryName}</span>}
          />
          <div className="icon-mobile">
            {item.map((item) => {
              return (
                <>
                  {category.children && subnav
                    ? item.iconOpened
                    : category.children
                    ? item.iconClosed
                    : null}
                </>
              );
            })}
          </div>
        </ListItemButton>
      </ListItem>
      {subnav &&
        category.children.map((item, index) => {
          return (
            <label htmlFor="nav-mobile-input">
              <ListItem disablePadding className="nav__mobile-submenu">
                <ListItemButton>
                  <ListItemText
                    onClick={() => navigate(`/${item.slug}`)}
                    disableTypography
                    primary={<span>{item.categoryName}</span>}
                  />
                </ListItemButton>
              </ListItem>
            </label>
          );
        })}
    </>
  );
};

export default SubMenu;
