import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
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

const SidebarLabel = styled.span`
  margin-left: 16px;
  color: black;
  &:hover {
    color: #fff;
  }
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu: FC<Props> = ({ category }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <ListItem onClick={category.children && showSubnav} disablePadding className="nav__mobile-submenu">
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
            <DropdownLink to="#" key={index}>
              <SidebarLabel>{item.categoryName}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
