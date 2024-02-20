import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import { Stack, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import UserProfileImgAndDesc from "./UserProfileImgAndDesc";
import FolderList from "./SideBarList";

const drawerWidth = 240;

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Drawer
      sx={{
        width: drawerWidth,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: `${colors.grey[300]} `,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Stack spacing={4} alignItems={"center"}>
        <UserProfileImgAndDesc />
        <FolderList />
      </Stack>
    </Drawer>
  );
};

export default SideBar;
