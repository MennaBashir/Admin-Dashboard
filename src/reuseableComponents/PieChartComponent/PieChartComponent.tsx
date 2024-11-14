import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

export default function PieChartComponent({ data, colorScheme }: any) {
  const theme = useTheme();
  const themePie = {
    background: "transparent",
    text: {
      fontSize: 11,
      fill: "#333333",
      outlineWidth: 0,
      outlineColor: "transparent",
    },
    axis: {
      domain: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
      },
      legend: {
        text: {
          fontSize: 12,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      ticks: {
        line: {
          stroke: "#777777",
          strokeWidth: 1,
        },
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    grid: {
      line: {
        stroke: "#dddddd",
        strokeWidth: 0,
      },
    },
    legends: {
      title: {
        text: {
          fontSize: 11,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      text: {
        fontSize: 11,
        fill: theme.palette.text.primary,
        outlineWidth: 0,
        outlineColor: "transparent",
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    annotations: {
      text: {
        fontSize: 13,
        fill: "#333333",
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      link: {
        stroke: "#000000",
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      outline: {
        stroke: "#000000",
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      symbol: {
        fill: "#000000",
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
    },
    tooltip: {
      wrapper: {},
      container: {
        background: "#ffffff",
        color: "#333333",
        fontSize: 12,
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {},
    },
  };
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.7}
      padAngle={1}
      cornerRadius={1}
      activeOuterRadiusOffset={5}
      borderWidth={2}
      colors={colorScheme}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      theme={themePie}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.text.primary}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      legends={[]}
    />
  );
}
