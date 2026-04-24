import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";
import buildings from "../../../mock/table";
import { ruRU } from "@mui/x-data-grid/locales";
import { Container } from "@mui/material";

export const BuildingsGrid = () => {
  const rows: GridRowsProp = buildings;

  const columns: GridColDef[] = [
    { field: 'Название', headerName: 'Название', flex: 1},
    { field: 'Тип', flex: 0.5},
    { field: 'Страна', flex: 0.5},
    { field: 'Город', flex: 0.5},
    { field: 'Год' },
    { field: 'Высота'},
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