import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import ScreenHeader from "../shared/ScreenHeader";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../Mock/mockData";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { AdminPanelSettingsTwoTone } from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <IconButton
            disableRipple
            sx={{
              width: {
                xs: "100%",
                lg: "60%",
              },
              m: "0 auto",
              p: "5px",
              backgroundColor:
                access === "admin"
                  ? colors.redAccent[600]
                  : access === "manager"
                  ? colors.blueAccent[700]
                  : colors.grey[500],
              borderRadius: "4px",
            }}
          >
            {access === "admin" && <AdminPanelSettingsTwoTone />}
            {access === "manager" && <PersonPinIcon />}
            {access === "user" && <EmojiPeopleIcon />}
          </IconButton>
        );
      },
    },
    {
      field: "access",
      headerName: "Access Level",
    },
  ];

  return (
    <Box>
      <ScreenHeader screenTitle={"Team"} screenSubtitle={"Manage Your Team "} />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.grey[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
