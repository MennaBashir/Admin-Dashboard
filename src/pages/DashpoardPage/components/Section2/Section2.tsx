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
          flex: 1,
          boxShadow: "rgb(0 0 0 / 8%) 0px 1px 4px",
          backgroundColor: "info.main",
          borderRadius: "4px",
          height: "420px",
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
        <Box sx={{ width: "95%", height: "420px", pb: "50px" }}>
          <LineChartComponent />
        </Box>
      </Box>
      <Box
        sx={{
          boxShadow: "rgb(0 0 0 / 8%) 0px 1px 4px",
          backgroundColor: "info.main",
          borderRadius: "4px",
          p: "20px",
          height: "420px",
          overflow: "auto",
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
                mb: "4px",
                px: "10px",
                pb: "2px",
                justifyContent: "space-between",
                borderBottom: "1px solid #b3b3b34d",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "15px" }}>{el.user}</Typography>
                <Typography sx={{ fontSize: "14px", color: "common.black" }}>
                  {el.txId}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "14px" }}>{el.date}</Typography>
              <Button
                variant="contained"
                sx={{ color: "#fff", width: "20px", height: "24px",backgroundColor:"#74b3e3" }}
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
