import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./dataContact";
import { useTheme } from "@mui/material";

export default function ContactsInformationPage() {
  const theme = useTheme();
  return (
    <div style={{ height: "auto", width: "95%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        sx={{
          fontSize: "15px",
          color: theme.palette.text.primary,
          "& .MuiDataGrid-columnHeaders": {
            fontSize: "16px",
          },
          pt:"8px"
        }}
      />
    </div>
  );
}
