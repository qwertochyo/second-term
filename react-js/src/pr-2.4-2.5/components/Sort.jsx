import { getAvailableOptions } from "../utils/getAvailableOptions";
import { SortLevel } from "./SortLevel";

export const Sort = ({ sortData, setSortData, onSort, onReset }) => {

  const handleChange = (index, key, value) => {
    const newData = [...sortData];
    newData[index][key] = value;
    setSortData(newData);
  };

  return (
    <>
      <h4>Сортировать по:</h4>
      <form>

        <SortLevel
          label="Первый уровень"
          value={sortData[0]}
          onChange={(key, value) => handleChange(0, key, value)}
          options={getAvailableOptions(0, sortData)}
          disabled={false}
        /><br />

        <SortLevel
          label="Второй уровень"
          value={sortData[1]}
          onChange={(key, value) => handleChange(1, key, value)}
          options={getAvailableOptions(1, sortData)}
          disabled={!sortData[0].field}
        /><br />

        <SortLevel
          label="Третий уровень"
          value={sortData[2]}
          onChange={(key, value) => handleChange(2, key, value)}
          options={getAvailableOptions(2, sortData)}
          disabled={!sortData[1].field}
        /><br />

        <input type="button" value="Сортировать" onClick={onSort} />
        <input type="button" value="Сбросить сортировку" onClick={onReset} />

      </form>
    </>
  );
};

