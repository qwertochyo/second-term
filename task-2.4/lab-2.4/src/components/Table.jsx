import { useState } from "react";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { Filter } from "./Filter";

export const Table = ({ data, amountRows, isPagination }) => {
  const [dataTable, setDataTable] = useState(data);
  const [activePage, setActivePage] = useState(1);

  const n = Math.ceil(dataTable.length / amountRows);

  const arr = Array.from({ length: n }, (v, i) => i + 1);

  const updateDataTable = (value) => {
    setDataTable(value);
  };

  const changeActivePage = (event) => {
    setActivePage(Number(event.target.innerHTML));
  };

  return (
    <>
      <h4>Фильтры</h4>
      <Filter filtering={updateDataTable} data={dataTable} fullData={data} />
      <table>
        <TableHead head={Object.values(data[0])} />
        <TableBody body={dataTable} amountRows={isPagination ? amountRows : data.length} numPage={activePage} />
      </table>
      {isPagination && (
        <div>
          {arr.map((item, index) =>
            <span key={index} className={activePage === index + 1 ? "current" : ""} onClick={changeActivePage}>{item}</span>)}
        </div>
      )}
    </>
  );
}