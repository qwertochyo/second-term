import { Container } from "@mui/material";
import { recipes } from "../../../mock/recipes";
import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";
import { ruRU } from "@mui/x-data-grid/locales";

export const RecipesGrid = () => {
  const rows: GridRowsProp = recipes;

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Название', flex: 1},
    { field: 'popularity', headerName: 'Популярность', flex: 0.5},
    { field: 'mealType', headerName: 'Прием пищи', flex: 0.5},
    { field: 'servings', headerName: 'Порций' },
    { field: 'cookingTime', headerName: 'Время приготовления' },
    { field: 'calories', headerName: 'кКал' },
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