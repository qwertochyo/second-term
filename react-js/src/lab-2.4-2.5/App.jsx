import { useState } from "react";
import { Chart } from "./components/Chart";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";
import { TextVerified } from "./components/TextVerified";
import { buildings } from "./data/data";
import { poem, replaceList } from "./constants/constants";
import { Interval } from "./components/Interval";

export const App = () => {
  const [dataTable, setDataTable] = useState(buildings);

  return (
    <div>
      <h3>Самые высокие здания и сооружения</h3>
      <Chart data={dataTable} />
      <Filter data={dataTable} filtering={(value) => setDataTable(value)} fullData={buildings} />
      <Table data={dataTable} amountRows={10} isPagination={true} />
      <TextVerified replaceList={replaceList}/>
      <Interval rowList={poem} startInterval={2000} />
    </div>
  );
}
