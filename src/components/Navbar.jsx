import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import {
  LogoutTwoTone,
  NotificationsTwoTone,
  Home,
  PersonRounded,
  ListAltRounded,
  Directions,
} from "@mui/icons-material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import logo from "../assets/butterfly.svg";
import card from "../assets/identity-card.svg";
import { Button } from "@mui/material";

// const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  // width: drawerWidth,
  width: "5%",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      // <CssBaseline />
      <Drawer variant="permanent" open={false}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItem: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
              alignItem: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button>
                <img src={logo} height={30} />
              </Button>
              <Button sx={{ marginBottom: 4 }}>
                <SearchRoundedIcon />
              </Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button variant="contained" sx={{ marginBottom: 2 }}>
                <Home />
              </Button>
              <Button sx={{ marginBottom: 2 }}>
                <img src={card} height={30} />
              </Button>
              <Button sx={{ marginBottom: 2 }}>
                <ListAltRounded />
              </Button>
              <Button sx={{ marginBottom: 2 }}>
                <PersonRounded />
              </Button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button sx={{ marginBottom: 2 }}>
              <NotificationsTwoTone />
            </Button>
            <Button sx={{ marginBottom: 2 }}>
              <LogoutTwoTone />
            </Button>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
