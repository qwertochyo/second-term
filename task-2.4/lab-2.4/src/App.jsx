import { Table } from "./components/Table";
import { TextVerified } from "./components/TextVerified";
import { buildings } from "./data/data";

export const App = () => {
  const replaceList = [
    {"Q": ""},
    {"X": ""},
    {"W": ""},
    {"Ё": "Е"},
    {"O": "A"}
  ];

  return (
    <div>
      <h3>Самые высокие здания и сооружения</h3>
      <Table data={buildings} amountRows={10} isPagination={false} />
      <TextVerified replaceList={replaceList}/>
    </div>
  );
}
