import { Box } from "@mui/material";
import React from "react";
import ScreenHeader from "../shared/ScreenHeader";
import LineChart from "../shared/LineChart";
import { mockLineData } from "../../Mock/mockData";

const LineChartScreen = () => {
  return (
    <Box height={"75vh"}>
      <ScreenHeader
        screenTitle={"Line Chart"}
        screenSubtitle={"Show your data as Line chart"}
      />
      <LineChart data={mockLineData} />
    </Box>
  );
};

export default LineChartScreen;
