export const Filter = ({ filtering, data, fullData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const yearFrom = event.target["yearFrom"].value;
    const yearTo = event.target["yearTo"].value;
    const heightFrom = event.target["heightFrom"].value;
    const heightTo = event.target["heightTo"].value;

    const filterField = {
      "Название": event.target["structure"].value.toLowerCase(),
      "Тип": event.target["type"].value.toLowerCase(),
      "Страна": event.target["country"].value.toLowerCase(),
      "Город": event.target["city"].value.toLowerCase(),
      "Год": [yearFrom ? Number(yearFrom) : -Infinity, yearTo ? Number(yearTo) : Infinity],
      "Высота": [heightFrom ? Number(heightFrom) : -Infinity, heightTo ? Number(heightTo) : Infinity]
    };

    let arr = fullData
    for (const key in filterField) {
      if (key === "Год" || key === "Высота") {
        const [min, max] = filterField[key];

        arr = arr.filter((item) => {
          const value = Number(item[key]);
          return value >= min && value <= max;
        });
      } else {
        arr = arr.filter((item) => item[key].toLowerCase().includes(filterField[key]))
      }
    }

    filtering(arr);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Название:</label>
        <input name="structure" type="text" />
      </p>
      <p>
        <label>Тип:</label>
        <input name="type" type="text" />
      </p>
      <p>
        <label>Страна:</label>
        <input name="country" type="text" />
      </p>
      <p>
        <label>Город:</label>
        <input name="city" type="text" />
      </p>
      <p>
        <label>Год от:</label>
        <input name="yearFrom" type="number" />
      </p>
      <p>
        <label>Год до:</label>
        <input name="yearTo" type="number" />
      </p>
      <p>
        <label>Высота от:</label>
        <input name="heightFrom" type="number" />
      </p>
      <p>
        <label>Высота до:</label>
        <input name="heightTo" type="number" />
      </p>
      <p>
        <button type="submit">Фильтровать</button>
        <button type="reset" onClick={() => filtering(fullData)}>Очистить фильтры</button>
      </p>
    </form>
  );
}