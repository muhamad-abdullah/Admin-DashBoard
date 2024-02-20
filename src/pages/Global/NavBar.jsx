import React, { useContext } from "react";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { ColorModeContext, tokens } from "../../theme";
import {
  DarkMode,
  LightMode,
  NotificationsOutlined,
  Person,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";

const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <AppBar
      position="static"
      sx={{
        // backgroundColor: `${colors.primary[400]}`,
        backgroundColor: "inherit",
        flexGrow: 1,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <TextField
          label={"Search For"}
          variant="outlined"
          size="small"
          type="search"
          InputLabelProps={{
            style: { color: `${colors.primary[100]} ` },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton disabled={true}>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Stack
          paddingLeft={2}
          direction={"row"}
          spacing={2}
          style={{ justifyContent: "flex-end" }}
        >
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
          <IconButton>
            <Person />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
