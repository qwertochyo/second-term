import { useState } from "react";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { Filter } from "./Filter";
import { buildings } from "../../lab-2.4-2.5/data/data";

export const Table = ({ data, amountRows, isPagination }) => {
  const [activePage, setActivePage] = useState(1);

  const n = Math.ceil(data.length / amountRows);

  const arr = Array.from({ length: n }, (v, i) => i + 1);

  const changeActivePage = (event) => {
    setActivePage(Number(event.target.innerHTML));
  };

  return (
    <>
      <table>
        <TableHead head={Object.keys(data[0])} />
        <TableBody body={data} amountRows={isPagination ? amountRows : data.length} numPage={activePage} />
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