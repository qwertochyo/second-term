import { TableRow } from "./TableRow";

export const TableHead = ({ head }) => {
  return (
    <thead>
      <tr>
        <TableRow row={head} isHead={1} />
      </tr>
    </thead>
  );
}