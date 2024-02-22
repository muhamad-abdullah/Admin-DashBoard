import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

const ScreenHeader = ({ screenTitle, screenSubtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box marginLeft={2} marginTop={2}>
      <Typography
        variant="h2"
        color={colors.greenAccent[100]}
        fontWeight={"bold"}
        sx={{ marginBottom: "5px" }}
      >
        {screenTitle}
      </Typography>
      <Typography
        variant="h4"
        color={colors.greenAccent[400]}
        sx={{ marginBottom: "15px" }}
      >
        {screenSubtitle}
      </Typography>
    </Box>
  );
};

export default ScreenHeader;
