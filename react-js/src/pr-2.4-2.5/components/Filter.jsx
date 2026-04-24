export const Filter = ({ filterData, setFilterData, onFilter, onReset }) => {
  const handleChange = (key, value) => {
    setFilterData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filterField = {
      "Название": filterData["Название"].toLowerCase(),
      "Прием пищи": filterData["Прием пищи"].toLowerCase(),
      "Количество порций": Number(filterData["Количество порций"]),
      "Длительность готовки": Number(filterData["Длительность готовки"]),
      "кКал": [
        filterData["кКал"][0] ? Number(filterData["кКал"][0]) : -Infinity,
        filterData["кКал"][1] ? Number(filterData["кКал"][1]) : Infinity
      ]
    };

    onFilter(filterField);
  };

  return (
    <>
      <h4>Фильтры</h4>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Название:</label>
          <input
            name="name"
            type="text"
            value={filterData["Название"]}
            onChange={(e) => handleChange("Название", e.target.value)} />
        </p>
        <p>
          <label>Прием пищи</label>
          <input
            name="eatTime"
            type="text"
            value={filterData["Прием пищи"]}
            onChange={(e) => handleChange("Прием пищи", e.target.value)}
          />
        </p>
        <p>
          <label>Количество порций:</label>
          <input
            name="amountDishes"
            type="text"
            value={filterData["Количество порций"]}
            onChange={(e) => handleChange("Количество порций", e.target.value)}
          />
        </p>
        <p>
          <label>Длительность готовки:</label>
          <input
            name="timeCooking"
            type="text"
            value={filterData["Длительность готовки"]}
            onChange={(e) => handleChange("Длительность готовки", e.target.value)}
          />
        </p>
        <p>
          <label>Количество кКал от:</label>
          <input
            type="text"
            value={filterData["кКал"][0] ?? ""}
            onChange={(e) =>
              setFilterData((prev) => ({
                ...prev,
                "кКал": [e.target.value, prev["кКал"][1] ?? ""]
              }))
            }
          />
        </p>
        <p>
          <label>Количество кКал до:</label>
          <input
            type="text"
            value={filterData["кКал"][1] ?? ""}
            onChange={(e) =>
              setFilterData((prev) => ({
                ...prev,
                "кКал": [prev["кКал"][0] ?? "", e.target.value]
              }))
            }
          />
        </p>
        <p>
          <button type="submit">Фильтровать</button>
          <button type="button" onClick={onReset}>
            Очистить фильтры
          </button>
        </p>
      </form>
    </>
  );
};