import { AppBar, useScrollTrigger } from "@mui/material";
import React from "react";
import { FC } from "react";
import Header from "../Header/headerFrist";
import HeaderBot from "../Header/headerSecond";
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const LayoutHeader: FC = () => {
  return (
    <ElevationScroll>
    <div className="header">
      <AppBar position="sticky" color="default" >
        <Header></Header>
        <HeaderBot></HeaderBot>
      </AppBar>
    </div>
    </ElevationScroll>
  );
};
export default LayoutHeader;
