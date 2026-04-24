export const filter = (data, filterField) => {
  let arr = data;

  for (const key in filterField) {
    if (key === "кКал") {
      const [min, max] = filterField[key];

      arr = arr.filter((item) => {
        const value = Number(item[key]);
        return value >= min && value <= max;
      });
    } else {
      arr = arr.filter((item) => {
        const value = item[key];

        if (typeof value === "string") {
          return value.toLowerCase().includes(filterField[key]);
        }

        if (typeof value === "number") {
          return filterField[key] === null || filterField[key] === 0
            ? true
            : value === filterField[key];
        }

        return true;
      });
    }
  }

  return arr;
};