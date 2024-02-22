import { Box, Button, CssBaseline, Stack } from "@mui/material";
import NavBar from "../shared/NavBar";
import { useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { tokens } from "../../theme";
import { useState } from "react";
import UserProfileImgAndDesc from "../shared/UserProfileImgAndDesc";
import FolderList from "../shared/SideBarList";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "100%",
    transition: theme.transitions.create({
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create({
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MainLayOut = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box width={"100%"}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            backgroundColor: `${colors.primary[400]}`,
          }}
        >
          <Toolbar style={open ? { padding: "0px" } : {}}>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                mr: 2,
                ...(open && { display: "none" }),
                color: `${colors.primary[100]}`,
              }}
            >
              <MenuIcon />
            </IconButton>
            <NavBar />
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader></DrawerHeader>
          <Divider />
          <Drawer
            sx={{
              width: drawerWidth,
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
              <Box display={"flex"} justifyContent={"space-between"}>
                <UserProfileImgAndDesc />
                <IconButton
                  sx={{
                    paddingLeft: "40px",
                  }}
                  disableRipple
                  onClick={handleDrawerClose}
                >
                  <ChevronLeftIcon />
                </IconButton>
              </Box>
              <FolderList />
            </Stack>
          </Drawer>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Box>
            <Outlet />
          </Box>
        </Main>
      </Box>
    </Box>
  );
};

export default MainLayOut;
