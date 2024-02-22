import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import CustomizedProgressBar from "../shared/CustomizedProgressBar";

const StackItem = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width={"100%"} margin={"0 30px"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Stack spacing={2}>
          {icon}
          <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {subtitle}
          </Typography>
        </Stack>
        <Stack
          sx={{
            marginTop: "12px",
          }}
          direction={"column"}
          spacing={4}
        >
          <CustomizedProgressBar size={35} progressValue={progress} />

          <Typography variant="h5" sx={{ color: colors.greenAccent[600] }}>
            {increase}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default StackItem;
