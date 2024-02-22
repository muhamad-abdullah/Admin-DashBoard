import { Box } from "@mui/material";
import React from "react";
import BarChart from "../shared/BarChart";
import { mockBarData } from "../../Mock/mockData";
import ScreenHeader from "../shared/ScreenHeader";

const BarChartScreen = () => {
  return (
    <Box height={"75vh"}>
      <ScreenHeader
        screenTitle={"Bar Chart"}
        screenSubtitle={"Show Data as Bar Chart"}
      />
      <BarChart data={mockBarData} />
    </Box>
  );
};

export default BarChartScreen;
