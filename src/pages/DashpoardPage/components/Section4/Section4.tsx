import { Box } from "@mui/material";
import GeographyChartPage from "../../../GeographyChartPage/GeographyChartPage";

export default function Section4() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "420px",
        pb: "50px",
        mt: "30px",
        boxShadow: "rgb(0 0 0 / 8%) 0px 1px 4px",
        backgroundColor: "info.main",
        borderRadius: "4px",
      }}
    >
      <GeographyChartPage />
    </Box>
  );
}
