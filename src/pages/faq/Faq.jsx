import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import ScreenHeader from "../shared/ScreenHeader";
const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <ScreenHeader
        screenTitle="FAQ"
        screenSubtitle="Frequently Asked Questions Page"
      />

      <Accordion
        defaultExpanded
        style={{
          backgroundColor: `${colors.greenAccent[100]}`,
          color: `${colors.redAccent[500]}`,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: `${colors.greenAccent[100]}`,
          color: `${colors.redAccent[500]}`,
        }}
        defaultExpanded
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{
          backgroundColor: `${colors.greenAccent[100]}`,
          color: `${colors.redAccent[500]}`,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{
          backgroundColor: `${colors.greenAccent[100]}`,
          color: `${colors.redAccent[500]}`,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        style={{
          backgroundColor: `${colors.greenAccent[100]}`,
          color: `${colors.redAccent[500]}`,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
