document.addEventListener("DOMContentLoaded", () => {
  const createChartButton = d3.select("input[value='Построить']");
  const toggleTableButton = d3.select("input[value='Скрыть таблицу']");
  const error = d3.select("div");

  error.property("hidden", true);

  let isShowTable = true;
  showTable(recipes, idTable);

  createChartButton.on("click", () => {
    const selectedX = d3.select("input[name='axisX']:checked").property("value");
    const selectedY = d3.selectAll("input[name='axisY']:checked").nodes().map((s) => s.value);
    const selectedType = d3.select("#chartType").property("value");

    if (selectedY.length == 0) {
      error.attr("class", "error").property("hidden", false);
      return;
    }

    error.property("hidden", true);

    drawGraph(recipes, selectedX, selectedY, selectedType);
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

})