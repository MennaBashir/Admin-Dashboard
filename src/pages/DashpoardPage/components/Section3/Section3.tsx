import { Box, Typography } from "@mui/material";
import { data } from "../../../PieChartPage/pieChart";
import PieChartComponent from "../../../../reuseableComponents/PieChartComponent/PieChartComponent";
import BarChartComponent from "../../../BarChartPage/components/BarChartComponent";

export default function Section3() {
  return (
    <Box
      sx={{
        display: "flex",
        mt: "30px",
        gap: "20px",
        color: "text.primary",
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          boxShadow: "rgb(0 0 0 / 8%) 0px 1px 4px",
          backgroundColor: "info.main",
          borderRadius: "8px",
          height: "420px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          transition: "box-shadow 0.2s ease",
          "&:hover": { boxShadow: "rgb(0 0 0 / 12%) 0px 4px 16px" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "17px",
            textAlign: "left",
            pt: "20px",
            pl: "20px",
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          Campaign
        </Typography>
        <Box sx={{ width: "100%", flex: 1, minHeight: 0 }}>
          <PieChartComponent data={data} colorScheme={["#f9c851", "#5b69bc", "#ff8acc","#10c469","#71b6f9"]} />
        </Box>
        <Box sx={{ position: "absolute", bottom: "20px", left: 0, right: 0, px: "20px" }}>
          <Typography>$48,352 revenue generated</Typography>
          <Typography>Includes extra misc expenditures and costs</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          boxShadow: "rgb(0 0 0 / 8%) 0px 1px 4px",
          backgroundColor: "info.main",
          borderRadius: "8px",
          height: "420px",
          display: "flex",
          flexDirection: "column",
          transition: "box-shadow 0.2s ease",
          "&:hover": { boxShadow: "rgb(0 0 0 / 12%) 0px 4px 16px" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "17px",
            textAlign: "left",
            pt: "20px",
            pl: "20px",
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          Sales Quantity
        </Typography>
        <Box sx={{ width: "100%", flex: 1, minHeight: 0 }}>
          <BarChartComponent />
        </Box>
      </Box>
    </Box>
  );
}
