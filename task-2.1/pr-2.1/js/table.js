const idTable = "recipesTable";
const header = ["Название", "Популярность", "Прием пищи", "Количество порций", "Длительность готовки", "кКал"];

const createTable = (data, idTable) => {
  const table = document.getElementById(idTable);

  const headerRow = createHeaderRow(header);
  table.append(headerRow);

  const bodyRows = createBodyRows(data);
  table.append(bodyRows);
}

const createHeaderRow = (header) => {
  const tr = document.createElement("tr");
  header.forEach((h) => {
    const th = document.createElement("th");
    th.textContent = h;
    tr.append(th);
  });

  return tr;
}

const createBodyRows = (data) => {
  const tbody = document.createElement("tbody");

  data.forEach((item) => {
    const tr = document.createElement("tr");

    header.forEach((h) => {
      const td = document.createElement("td");
      td.textContent = item[h];
      tr.append(td);
    });

    tbody.append(tr);
  });

  return tbody;
}

const clearTable = (idTable) => {
  let table = document.getElementById(idTable);

  while(table.rows.length > 0) {
    table.deleteRow(0)
  }
}