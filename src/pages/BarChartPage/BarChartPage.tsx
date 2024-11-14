import { Box, Typography } from "@mui/material";
import BarChartComponent from "./components/BarChartComponent";

export default function BarChartPage() {
  return (
    <>
      <Typography sx={{ color: "text.primiry", mb: "10px" }}>
        The minimum wage in Germany, France and Spain (EUR/month)
      </Typography>
      <Box sx={{ height: "75vh", width: "95%" }}>
        <BarChartComponent />
      </Box>
    </>
  );
}
