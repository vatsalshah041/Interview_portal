import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import NarrowDrawer from "./NarrowDrawer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BroadDrawer from "./BroadDrawer";
import { Grid } from "@mui/material";

const drawerWidth = 240;
const narrowDrawerWidth = 60;

function ResponsiveDrawer(props) {
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { children } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = <BroadDrawer/>;

  const container =
    windows !== undefined ? () => windows().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={
          openDrawer
            ? { width: { sm: narrowDrawerWidth }, flexShrink: { sm: 2 } }
            : { width: { sm: drawerWidth }, flexShrink: { sm: 2 } }
        }
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: 2 },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
          <Drawer
            variant="permanent"
            className="borderSidebar"
            sx={{
              display: { xs: 1, sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: { xs: "260px", sm: { drawerWidth } },
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflowX: "hidden",
          margin: "0",
          padding: "0",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  windows: PropTypes.func,
};

export default ResponsiveDrawer;
