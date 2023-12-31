import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import data from "./response.json";
import Footer from "./footer";

let rows = data.documents.map((row, idx) => ({ ...row, id: idx }));

const columns = [
  {
    field: "id",
    headerName: "ID",
    type: "number",
    width: 70,
    align: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "name",
    headerName: "Student's Name",
    flex: 0.4,
    minWidth: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "redemption_status",
    headerName: "Redemption Status",
    type: "boolean",
    flex: 0.1,
    minWidth: 100,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "genai_games_completed",
    headerName: "Gen AI Status",
    type: "boolean",
    flex: 0.1,
    minWidth: 100,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "courses_completed",
    headerName: "GCCF Status",
    type: "number",
    flex: 0.1,
    minWidth: 100,
    align: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "total_completions",
    headerName: "Total Completions",
    type: "boolean",
    flex: 0.1,
    minWidth: 100,
    headerClassName: "super-app-theme--header",
  },
];

export default function DataTable() {
  return (
    <>
      <div
        style={{
          minWidth: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.05)",
        }}
      >
        <Box
          sx={{
            "& .super-app-theme--header": {
              backgroundColor: "#4285f4",
              color: "white",
            },
            "& .MuiDataGrid-row:nth-child(odd)": {
              backgroundColor: "#FFE14C", 
            },
            "& .MuiDataGrid-row:nth-child(even)": {
              backgroundColor: "#FFFAE5", 
            },
            m: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 20 },
              },
            }}
            pageSizeOptions={[10, 20, 50]}
            slots={{
              toolbar: GridToolbarQuickFilter,
              loadingOverlay: LinearProgress,
            }}
            loading={true}
            disableColumnMenu
          />
        </Box>
      </div>
      <Footer />
    </>
  );
}
