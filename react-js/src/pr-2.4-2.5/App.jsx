import { useState } from "react";
import { Filter } from "./components/Filter";
import { Sort } from "./components/Sort";
import { Table } from "./components/Table";
import { recipes } from "./data/data";
import { Chart } from "./components/Chart";
import { multiSort } from "./utils/multiSort";
import { filter } from "./utils/filter";

const initialSortState = [
  { field: "", desc: false },
  { field: "", desc: false },
  { field: "", desc: false }
];

const initialFilterState = {
  "Название": "",
  "Прием пищи": "",
  "Количество порций": "",
  "Длительность готовки": "",
  "кКал": ["", ""]
};

export const App = () => {
  const [dataTable, setDataTable] = useState(recipes);
  const [sortData, setSortData] = useState(initialSortState);
  const [filterData, setFilterData] = useState(initialFilterState);

  return (
    <div>
      <h3>Кукинг</h3>
      <Chart data={dataTable} />
      <Sort
        sortData={sortData}
        setSortData={setSortData}
        onSort={() => setDataTable(multiSort(dataTable, sortData))}
        onReset={() => {
          setSortData([
            { field: "", desc: false },
            { field: "", desc: false },
            { field: "", desc: false }
          ]);
          setFilterData({
            "Название": "",
            "Прием пищи": "",
            "Количество порций": "",
            "Длительность готовки": "",
            "кКал": ["", ""]
          });
          setDataTable(recipes);
        }}
      />
      <Filter
        filterData={filterData}
        setFilterData={setFilterData}
        onFilter={(filterData) =>
          setDataTable(filter(dataTable, filterData))
        }
        onReset={() => {
          setSortData([
            { field: "", desc: false },
            { field: "", desc: false },
            { field: "", desc: false }
          ]);
          setFilterData({
            "Название": "",
            "Прием пищи": "",
            "Количество порций": "",
            "Длительность готовки": "",
            "кКал": ["", ""]
          });
          setDataTable(recipes);
        }}
      />
      <Table data={dataTable} amountRows={10} isPagination={true} />
    </div>
  )
}