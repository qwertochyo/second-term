import { Container } from "@mui/material";
import type { TGroup } from "../../../types/types";
import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";
import { ruRU } from "@mui/x-data-grid/locales";

interface Props {
  data: TGroup[]
}

export const GroupGrid = ({ data }: Props) => {

  const rows: GridRowsProp = data;

  const columns: GridColDef[] = [
    { field: 'Группа', flex: 1},
    { field: 'Минимальная высота', flex: 0.5},
    { field: 'Максимальная высота', flex: 0.5},
    { field: 'Средняя высота', flex: 0.5},

  ];

  return (
    <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        showToolbar={true} 
      />
    </Container>
  );
}