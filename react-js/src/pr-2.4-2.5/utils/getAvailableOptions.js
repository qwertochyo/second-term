export const getAvailableOptions = (index, sortData) => {
  const columns = [
    "Название",
    "кКал",
    "Длительность готовки",
    "Популярность",
    "Прием пищи",
    "Количество порций"
  ];

  const usedBefore = sortData
    .slice(0, index)
    .map(s => s.field);

  return columns.filter(col => !usedBefore.includes(col));
};