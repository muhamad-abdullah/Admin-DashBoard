import * as React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { ListItemAvatar, Avatar, ListItemButton } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

export default function FolderList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <List
      component="nav"
      sx={{ width: "100%", maxWidth: 240, bgcolor: "${colors.primary[200]}" }}
    >
      <ListItemButton onClick={() => navigate("/", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <HomeOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Dash Board"
          secondary="Show Main Dash board"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/team", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <PeopleOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Team"
          secondary="Manage your team"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>{" "}
      <ListItemButton onClick={() => navigate("/contacts", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <PeopleOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Contacts"
          secondary="Contacts information"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>{" "}
      <ListItemButton onClick={() => navigate("/invoices", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <ReceiptOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Invoices"
          secondary="Show invoices Balances"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/profile", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <PersonOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Profile"
          secondary="Manage your Profile"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/calendar", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <CalendarTodayOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Calendar"
          secondary="Calendar Today"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>{" "}
      <ListItemButton onClick={() => navigate("/faq", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <HelpOutlineOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="FAQ"
          secondary="Browse FAQ"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>{" "}
      <ListItemButton onClick={() => navigate("/bar", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <BarChartOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Bar Chart"
          secondary="Show Bar Chart"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>{" "}
      <ListItemButton onClick={() => navigate("/pie", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <PieChartOutlineOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Pie Chart"
          secondary="Show Pie Chart"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>{" "}
      <ListItemButton onClick={() => navigate("/line", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <TimelineOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Line chart"
          secondary="Show Line Chart"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/geography", { replace: true })}>
        <ListItemAvatar sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ bgcolor: `${colors.grey[100]}` }}>
            <MapOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Geography chart"
          secondary="Show Geography Chart"
          primaryTypographyProps={{ align: "center" }}
          secondaryTypographyProps={{ align: "center" }}
        />
      </ListItemButton>
    </List>
  );
}
