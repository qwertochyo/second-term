document.addEventListener("DOMContentLoaded", function() {
  const toggleTableButton = d3.select("input[value='Скрыть таблицу']");
  const createChartButton = d3.select("input[value='Построить']");
  const error = d3.select("div");

  error.property("hidden", true);

  let isShowTable = true; 
  showTable(buildings, "build");

  createChartButton.on("click", () => {
    const selectedX = d3.select("input[name='axisX']:checked").property("value");
    const selectedY = d3.selectAll("input[name='axisY']:checked").nodes().map((s) => s.value);
    const selectedType = d3.select("#chartType").property("value");

    if (selectedY.length == 0) {
      error.attr("class", "error").property("hidden", false);
      return;
    }

    error.property("hidden", true);

    drawGraph(buildings, selectedX, selectedY, selectedType);
  });

  toggleTableButton.on("click", () => {
    if (isShowTable) {
      removeTable("build");
      toggleTableButton.property("value", "Показать таблицу");
    } else {
      showTable(buildings, "build");
      toggleTableButton.property("value", "Скрыть таблицу");
    }
    isShowTable = !isShowTable;
  });
});