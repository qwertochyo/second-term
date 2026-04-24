export const multiSort = (data, sortLevels) => {
  return data.toSorted((a, b) => {
    for (const { field, desc } of sortLevels) {
      if (!field) continue;

      const valA = a[field];
      const valB = b[field];

      let comparison = 0;

      if (field == "Название" || field == "Прием пищи") {
        comparison = String(valA).localeCompare(String(valB));
      } else {
        comparison = Number(valA) - Number(valB);
      }

      if (comparison !== 0) {
        return desc ? -comparison : comparison;
      }
    }

    return 0;
  });
};