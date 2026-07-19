import { Box } from "@mui/material";
import GeographyChartPage from "../../../GeographyChartPage/GeographyChartPage";

export default function Section4() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "320px", sm: "420px" },
        mt: "30px",
        p: "10px",
        boxShadow: "rgb(0 0 0 / 8%) 0px 1px 4px",
        backgroundColor: "info.main",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "box-shadow 0.2s ease",
        "&:hover": { boxShadow: "rgb(0 0 0 / 12%) 0px 4px 16px" },
      }}
    >
      <GeographyChartPage />
    </Box>
  );
}
