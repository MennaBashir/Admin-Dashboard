import { Theme } from "@mui/material";

export const getDataGridStyle = (theme: Theme) => {
  const isDark = theme.palette.mode === "dark";
  return {
    fontSize: "15px",
    color: theme.palette.text.primary,
    border: "none",
    borderRadius: "12px",
    boxShadow: isDark
      ? "rgb(0 0 0 / 30%) 0px 2px 10px"
      : "rgb(0 0 0 / 8%) 0px 2px 10px",
    backgroundColor: theme.palette.info.main,
    overflow: "hidden",
    "& .MuiDataGrid-columnHeaders": {
      fontSize: "16px",
    },
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.035)",
      borderBottom: `2px solid ${theme.palette.primary.main}33`,
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: 700,
      color: theme.palette.primary.main,
      letterSpacing: "0.3px",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "1px solid rgba(128,128,128,0.12)",
      display: "flex",
      alignItems: "center",
    },
    "& .MuiDataGrid-virtualScroller": {
      overflowX: "hidden",
    },
    "& .MuiDataGrid-row": {
      transition: "background-color 0.15s ease",
    },
    "& .MuiDataGrid-row:nth-of-type(even)": {
      backgroundColor: isDark
        ? "rgba(255,255,255,0.02)"
        : "rgba(0,0,0,0.015)",
    },
    "& .MuiDataGrid-row:hover": {
      backgroundColor: isDark
        ? "rgba(113,182,249,0.10)"
        : "rgba(79,127,174,0.08)",
    },
    "& .MuiDataGrid-row.Mui-selected, & .MuiDataGrid-row.Mui-selected:hover": {
      backgroundColor: isDark
        ? "rgba(113,182,249,0.16)"
        : "rgba(79,127,174,0.14)",
    },
    "& .MuiDataGrid-columnSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "1px solid rgba(128,128,128,0.15)",
      backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.015)",
    },
    "& .MuiTablePagination-root, & .MuiTablePagination-selectIcon, & .MuiTablePagination-actions button":
      {
        color: theme.palette.text.primary,
      },
    "& .MuiDataGrid-toolbarContainer": {
      padding: "10px 12px",
      gap: "8px",
      "& .MuiButton-root": {
        color: theme.palette.primary.main,
        textTransform: "none",
        fontWeight: 600,
      },
    },
    "& .MuiCheckbox-root.Mui-checked": {
      color: theme.palette.primary.main,
    },
    "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
      {
        outline: "none",
      },
  };
};
