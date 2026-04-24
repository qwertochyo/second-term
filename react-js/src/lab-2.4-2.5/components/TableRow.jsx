export const TableRow = ({ row, isHead }) => {
  return (
    <>
      {isHead === 0 ?
        (row.map((cell, index) => <td key={index}> {cell} </td>)) :
        (row.map((cell, index) => <th key={index}> {cell} </th>))
      }
    </>
  );
}