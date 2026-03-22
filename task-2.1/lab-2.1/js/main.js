document.addEventListener("DOMContentLoaded", function () {
  createTable(buildings, idTable);

  const dataForm = document.getElementById("filter");
  const sortForm = document.getElementById("sort");

  const filterButton = document.querySelector("input[value='Найти']");
  const resetFilterButton = document.querySelector("input[value='Очистить фильтры']");
  const sortButton = document.querySelector("input[value='Сортировать']");
  const resetSortButton = document.querySelector("input[value='Сбросить сортировку']");

  const firstSelect = document.getElementById("fieldsFirst");

  setSortSelects(buildings, sortForm);

  filterButton.addEventListener("click", () => {
    filterTable(buildings, dataForm, idTable);
    //resetSort(buildings, sortForm, idTable);
  });
  resetFilterButton.addEventListener("click", () => {
    clearFilter(buildings, dataForm, idTable);
    resetSort(buildings, sortForm, idTable);
  });
  sortButton.addEventListener("click", () => sortTable(sortForm, idTable));
  resetSortButton.addEventListener("click", () => {
    resetSort(buildings, sortForm, idTable);
    clearFilter(buildings, dataForm, idTable);
  });

  firstSelect.addEventListener("change", () => changeNextSelect(firstSelect, "fieldsSecond"));
});

const createOption = (str, val) => {
  let item = document.createElement("option");
  item.text = str;
  item.value = val;
  return item;
}

const setSortSelect = (arr, sortSelect) => {
  sortSelect.append(createOption('Нет', 0));
  arr.forEach((item, index) => {
    sortSelect.append(createOption(item, index + 1));
  });
}

const setSortSelects = (data, dataForm) => {
  const head = Object.keys(data[0]);

  const allSelect = dataForm.getElementsByTagName('select');

  for (const item of dataForm.elements) {
    setSortSelect(head, item);
  }

  for (let i = 1; i < allSelect.length; i++) {
    const item = allSelect[i];
    item.disabled = true;
  };
}

const changeNextSelect = (curSelect, nextSelectId) => {
  const nextSelect = document.getElementById(nextSelectId);

  nextSelect.disabled = false;

  nextSelect.innerHTML = curSelect.innerHTML;

  if (curSelect.value != 0) {
    nextSelect.remove(curSelect.value);
  } else {
    nextSelect.disabled = true;
  };
}