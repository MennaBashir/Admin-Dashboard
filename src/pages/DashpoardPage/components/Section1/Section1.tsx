import { Box, Typography } from "@mui/material";
import { dashboard } from "../../dataDashboard";
import {
  MarkEmailReadOutlined,
  MonetizationOnOutlined,
  SupervisorAccountOutlined,
  DirectionsOutlined,
} from "@mui/icons-material";
import PieChartComponent from "../../../../reuseableComponents/PieChartComponent/PieChartComponent";

export default function Section1() {
  return (
    <Box className="sec1" sx={{color:"text.primary"}}>
      {dashboard.map((el) => {
        return (
          <Box
            key={el.id}
            sx={{
              display: "flex",
              p: "15px",
              alignItems: "center",
              justifyContent: "space-around",
              boxShadow:"rgb(0 0 0 / 8%) 0px 1px 4px",
              backgroundColor:"info.main",
              borderRadius:"4px"
            }}
          >
            <Box sx={{ textAlign: "left", mr: "30px" }}>
              {el.id === "email" ? (
                <MarkEmailReadOutlined />
              ) : el.id === "sales" ? (
                <MonetizationOnOutlined />
              ) : el.id === "clients" ? (
                <SupervisorAccountOutlined />
              ) : ( 
                <DirectionsOutlined />
              )}
              <Typography>{el.quantity}</Typography>
              <Typography>{el.title}</Typography>
            </Box>
            <Box sx={{ height: "120px", width: "100px", position: "relative" }}>
              <PieChartComponent data={el.data} colorScheme={el.colorScheme} />
              <Typography
                sx={{ position: "absolute", right: "30px", bottom: "18px" }}
              >
                {el.percentage}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
