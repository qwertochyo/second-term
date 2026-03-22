const createSortArr = (data) => {
  const sortArr = [];

  const sortSelects = data.getElementsByTagName("select");

  for (const item of sortSelects) {
    const keySort = item.value;

    if (Number(keySort) === 0) {
      break;
    }

    const desc = document.getElementById(item.id + 'Desc').checked;

    sortArr.push(
      {
        column: keySort - 1,
        direction: desc
      }
    );
  }
  return sortArr;
}

const sortTable = (sortForm, idTable) => {

  const sortArr = createSortArr(sortForm);

  if (sortArr.length === 0) {
    clearTable(idTable);
    createTable(buildings, idTable);
    return;
  }

  const table = document.getElementById(idTable);
  const rowData = Array.from(table.rows);
  const headerRow = rowData.shift();

  rowData.sort((first, second) => {
    for (const { column, direction } of sortArr) {

      const firstCell = first.cells[column].innerHTML;
      const secondCell = second.cells[column].innerHTML;

      const num1 = parseFloat(firstCell);
      const num2 = parseFloat(secondCell);

      if (column != 4 || column != 5) {
        comparison = firstCell.localeCompare(secondCell); 
      } else {
        comparison = num1 - num2;
      }

      if (comparison !== 0) {
        return (direction ? -comparison : comparison);
      }
    }
    return 0;
  });

  table.append(headerRow);

  const tbody = document.createElement('tbody');

  rowData.forEach(item => {
    tbody.append(item);
  });

  table.append(tbody);
}

const resetSort = (data, sortForm, idTable) => {
  const selects = sortForm.getElementsByTagName("select");
  const boxes = sortForm.querySelectorAll("input[type='checkbox']");

  boxes.forEach(box => box.checked = false);

  for (const item of selects) {
    item.selectedIndex = 0;
    item.disabled = true;
  }

  selects[0].disabled = false;

  clearTable(idTable);
  createTable(data, idTable);
}
