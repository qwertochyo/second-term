const correspond = {
  "Название": "name",
  "Популярность": "rating",
  "Прием пищи": "eatTime",
  "Количество порций": "amountDishes",
  "Длительность готовки": "timeCooking",
  "кКал": ["caloriesFrom", "caloriesTo"]
}

const dataFilter = (dataForm) => {
  let dictFilter = {};

  for (const item of dataForm.elements) {
    let valInput = item.value;

    if (item.type === "text") {
      valInput = valInput.toLowerCase();
    }

    if (item.type === "number") {
      if (valInput !== "") {
        valInput = Number(valInput);
      }

      if (valInput === "" && item.id.includes("From")) {
        valInput = -Infinity;
      }

      if (valInput === "" && item.id.includes("To")) {
        valInput = Infinity;
      }
    }

    dictFilter[item.id] = valInput;
  }

  return dictFilter;
}

const filterTable = (data, dataForm, idTable) => {
  const datafilter = dataFilter(dataForm);

  const tableFilter = data.filter((item) => {
    let result = true;

    Object.entries(item).map(([key, val]) => {

      if (typeof val == "string") {
        result &&= val.toLowerCase().includes(datafilter[correspond[key]])
      }

      if (typeof val == "number") {
        const range = correspond[key];

        if (Array.isArray(range)) {
          const [from, to] = range;
          result &&= val >= datafilter[from] && val <= datafilter[to];
        } else if (datafilter[range] !== "" && typeof datafilter[range] !== "undefined") {
          result &&= val == datafilter[range];
        }
      }

    });

    return result;
  });

  clearTable(idTable);

  createTable(tableFilter, idTable);
}

const clearFilter = (data, dataForm, idTable) => {
  for (const item of dataForm.elements) {
    if (item.type == "text" || item.type == "number") {
      item.value = "";
    };
  };

  clearTable(idTable);
  createTable(data, idTable);
}