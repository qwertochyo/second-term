document.addEventListener("DOMContentLoaded", () => {
  const createChartButton = d3.select("input[value='Построить']");
  const toggleTableButton = d3.select("input[value='Скрыть таблицу']");
  const selectMax = d3.select("#max");
  const selectMin = d3.select("#min");
  const error = d3.select("div");

  error.property("hidden", true);

  let isShowTable = true;
  showTable(recipes, idTable);

  createChartButton.on("click", () => {
    const selectedX = d3.select("input[name='axisX']:checked").property("value");
    const selectedType = d3.select("#chartType").property("value");
    const isMinChecked = selectMin.property("checked");
    const isMaxChecked = selectMax.property("checked");

    if (!isMinChecked && !isMaxChecked) {
      error.attr("class", "error").property("hidden", false);
    } else {
      error.property("hidden", true);
      const selectedY = [selectMin.property("value"), selectMax.property("value")];

      drawGraph(recipes, selectedX, selectedY, selectedType);
    }
  })

  toggleTableButton.on("click", () => {
    if (isShowTable) {
      removeTable(idTable);
      toggleTableButton.property("value", "Показать таблицу");
    } else {
      showTable(recipes, idTable);
      toggleTableButton.property("value", "Скрыть таблицу");
    }

    isShowTable = !isShowTable;
  })

  selectMax.on("change", () => {
    const isMinChecked = selectMin.property("checked");
    const isMaxChecked = selectMax.property("checked");

    console.log(isMaxChecked, isMinChecked);

    if (!isMinChecked && !isMaxChecked) {
      error.attr("class", "error").property("hidden", false);
    } else {
      error.property("hidden", true);
    }
  });

  selectMin.on("change", () => {
    const isMinChecked = selectMin.property("checked");
    const isMaxChecked = selectMax.property("checked");

    if (!isMinChecked && !isMaxChecked) {
      error.attr("class", "error").property("hidden", false);
    } else {
      error.property("hidden", true);
    }
  });
})