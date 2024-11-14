import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rows } from "./dataManageTeam";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  ManageAccountsOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id",
    width: 50,
    headerAlign: "center",
    align: "center",
    resizable: false,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
    resizable: false,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    headerAlign: "center",
    align: "center",
    resizable: false,
  },
  {
    field: "age",
    headerName: "Age",
    flex: 1,
    headerAlign: "center",
    align: "center",
    resizable: false,
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    headerAlign: "center",
    align: "center",
    resizable: false,
  },
  {
    field: "access",
    headerName: "Access",
    flex: 1,
    headerAlign: "center",
    align: "center",
    resizable: false,
    renderCell: ({ row: { access } }) => {
      return (
        <Box
          sx={{
            display: "flex",
            gap: "4px",
            fontWeight: 500,
            justifyContent: "center",
            alignItems: "center",
            p: "4px",
            borderRadius: "4px",
            mx: "auto",
            mt: "10px",
            width: "100px",
            color: "#fff",
            backgroundColor:
              access === "admin"
                ? "#ebb3d2"
                : access === "user"
                  ? "#74b3e3"
                  : "#929ee1",
          }}
        >
          {access === "admin" ? (
            <AdminPanelSettingsOutlined fontSize="small" />
          ) : access === "user" ? (
            <PersonOutlineOutlined fontSize="small" />
          ) : (
            <ManageAccountsOutlined fontSize="small" />
          )}
          <Typography sx={{ fontSize: "15px" }}>{access}</Typography>
        </Box>
      );
    },
  },
];

export default function ManageTeamPage() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "auto",
        width: "95%",
       
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        sx={{
          fontSize: "15px",
          color: theme.palette.text.primary,
          "& .MuiDataGrid-columnHeaders": {
            fontSize: "16px",
          },
        }}
      />
    </Box>
  );
}
