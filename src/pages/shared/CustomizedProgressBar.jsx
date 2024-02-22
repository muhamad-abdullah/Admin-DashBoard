import { Box, CircularProgress,circularProgressClasses } from "@mui/material";
import React from "react";

const CustomizedProgressBar = ({ progressValue, size }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        color="primary"
        size={size}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        disableShrink
        sx={{
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        color="secondary"
        size={size}
        thickness={4}
        value={progressValue}
      />
    </Box>
  );
};

export default CustomizedProgressBar;
