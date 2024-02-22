import { Box } from "@mui/material";
import React from "react";
import ScreenHeader from "../shared/ScreenHeader";
import GeographyChart from "../shared/GeographyChart";
import { mockGeographyData } from "../../Mock/mockData";

const GeographyChartScreen = () => {
  return (
    <Box height={"75vh"}>
      <ScreenHeader
        screenTitle={"Geography Chart"}
        screenSubtitle={"Show your data as Gdo Chart"}
      />
      <GeographyChart data={mockGeographyData} />
    </Box>
  );
};

export default GeographyChartScreen;
