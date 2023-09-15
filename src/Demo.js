import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import data from "./response.json";

let rows = data.documents.map((row, idx) => ({ ...row, id: idx }));

const columns = [
    { field: "id", headerName: "ID", type: "number", width: 70, align: "center", headerClassName: 'super-app-theme--header', },
    { field: "name", headerName: "Student's Name", flex: 0.4, minWidth: 150, headerClassName: 'super-app-theme--header', },
    {
        field: "redemption_status",
        headerName: "Redemption Status",
        type: "boolean",
        flex: 0.1,
        minWidth: 100,
        headerClassName: 'super-app-theme--header',
    },
    {
        field: "genai_games_completed",
        headerName: "Gen AI Status",
        type: "boolean",
        flex: 0.1,
        minWidth: 100,
        headerClassName: 'super-app-theme--header',
    },
    {
        field: "courses_completed",
        headerName: "Completed Status",
        type: "number",
        flex: 0.1,
        minWidth: 100,
        align: "center",
        headerClassName: 'super-app-theme--header',
    },
    {
        field: "total_completions",
        headerName: "Total Completions",
        type: "boolean",
        flex: 0.1,
        minWidth: 100,
        headerClassName: 'super-app-theme--header',
    },
];

export default function DataTable() {
    return (
        <div style={{ minWidth: "100%", height: "100%"}}>
            <Box
                sx={{
                    "& .super-app-theme--header": {
                        backgroundColor: "rgba(0, 181, 204, 0.55)",
                    },
                    m:10,
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
                    slots={{ toolbar: GridToolbarQuickFilter }}
                    disableColumnMenu
                />
            </Box>
        </div>
    );
}
