import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./dataInvoices";
import { useTheme } from "@mui/material";
import { getDataGridStyle } from "../../utils/dataGridStyle";

export default function InvoicesBalancesPage() {
  const theme = useTheme();
  return (
    <div style={{ width: "100%", maxWidth: "95%", margin: "0 auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={true}
        autoHeight
        rowHeight={56}
        columnHeaderHeight={56}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        slots={{ toolbar: GridToolbar }}
        sx={{ ...getDataGridStyle(theme), pt: "8px" }}
      />
    </div>
  );
}
