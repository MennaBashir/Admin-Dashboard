import { Box, Button, Typography } from "@mui/material";
import { transactions } from "../../dataDashboard";
import LineChartComponent from "../../../LineChartPage/components/LineChartComponent";

export default function Section2() {
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
          flex: { md: 2, xs: 1 },
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
          Revenue Generated
        </Typography>
        <Box sx={{ width: "100%", flex: 1, minHeight: 0, pb: "10px" }}>
          <LineChartComponent />
        </Box>
      </Box>
      <Box
        sx={{
          flex: { md: 1, xs: 1 },
          minWidth: { md: "320px", xs: 0 },
          width: { xs: "100%", md: "auto" },
          boxShadow: "rgb(0 0 0 / 8%) 0px 1px 4px",
          backgroundColor: "info.main",
          borderRadius: "8px",
          p: "20px",
          height: "420px",
          overflow: "auto",
          transition: "box-shadow 0.2s ease",
          "&:hover": { boxShadow: "rgb(0 0 0 / 12%) 0px 4px 16px" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "17px",
            textAlign: "left",
            color: "primary.main",
            fontWeight: "bold",
            mb: "20px",
          }}
        >
          Recent Transactions
        </Typography>
        {transactions.map((el) => {
          return (
            <Box
              key={el.txId}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textAlign: "left",
                mb: "6px",
                px: "8px",
                py: "10px",
                borderRadius: "6px",
                justifyContent: "space-between",
                borderBottom: "1px solid #b3b3b34d",
                transition: "background-color 0.15s ease",
                "&:hover": { backgroundColor: "rgba(128,128,128,0.06)" },
              }}
            >
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography sx={{ fontSize: "15px", fontWeight: 600, color: "primary.main" }}>
                  {el.user}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "common.black",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {el.txId}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "13px", flexShrink: 0, opacity: 0.85 }}>
                {el.date}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  minWidth: "62px",
                  height: "28px",
                  flexShrink: 0,
                  borderRadius: "6px",
                  textTransform: "none",
                  boxShadow: "none",
                  backgroundColor: "#74b3e3",
                  "&:hover": { backgroundColor: "#5a9fd4", boxShadow: "none" },
                }}
                size="small"
              >
                ${el.cost}
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
