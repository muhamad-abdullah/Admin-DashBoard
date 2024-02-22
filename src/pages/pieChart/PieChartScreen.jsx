import React from "react";
import PieChart from "../shared/PieChart";
import { mockPieData } from "../../Mock/mockData";
import { Box } from "@mui/material";
import ScreenHeader from "../shared/ScreenHeader";

const PieChartScreen = () => {
  return (
    <Box height={"75vh"}>
      <ScreenHeader
        screenTitle={"Pie Chart"}
        screenSubtitle={"Show data as a Pie Chart"}
      />
      <PieChart dummyData={mockPieData} />
    </Box>
  );
};

export default PieChartScreen;
