import { DataGrid, type GridRowsProp } from "@mui/x-data-grid";
import type { TGroup } from "../../../types/types";
import type { GridColDef } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { ruRU } from "@mui/x-data-grid/locales";

interface Props {
  data: TGroup[]
}

export const GroupGrid = ({ data }: Props) => {
  const rows: GridRowsProp = data;

  const columns: GridColDef[] = [
    { field: "group", headerName: "Группа", flex: 1 },
    { field: "minKcal", headerName: "Минимальная кКал", flex: 0.5 },
    { field: "maxKcal", headerName: "Максимальная кКал", flex: 0.5 },
    { field: "avgKcal", headerName: "Средняя кКал", flex: 0.5 },
  ]

  return (
    <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        showToolbar={false} 
      />
    </Container>
  );
}