const createArrGraph = (data, key) => {

  const groupObj = d3.group(data, d => d[key]);

  let arrGraph = [];

  for (let entry of groupObj) {
    let minMax = d3.extent(entry[1].map(d => d['кКал']));
    arrGraph.push({ labelX: entry[0], values: minMax });
  }

  arrGraph.sort((a, b) => Number(a.labelX) - Number(b.labelX));

  //console.log(arrGraph);

  return arrGraph;
}

const createAxis = (svg, data, attr_area) => {

  const [min, max] = d3.extent(data.map(d => d.values[1]));

  const scaleX = d3.scaleBand()
    .domain(data.map(d => d.labelX))
    .range([0, attr_area.width - 2 * attr_area.marginX]);

  const scaleY = d3.scaleLinear()
    .domain([min * 0.85, max * 1.1])
    .range([attr_area.height - 2 * attr_area.marginY, 0]);

  const axisX = d3.axisBottom(scaleX);
  const axisY = d3.axisLeft(scaleY);

  svg.append("g")
    .attr("transform", `translate(${attr_area.marginX}, ${attr_area.height - attr_area.marginY})`)
    .call(axisX)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", d => "rotate(-45)");

  svg.append("g")
    .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
    .call(axisY);

  return [scaleX, scaleY];
}

const drawGraph = (data, selectX, selectY, chartType) => {

  let keyX = "";
  switch (selectX) {
    case "time":
      keyX = "Длительность готовки";
      break;
    case "popularity":
      keyX = "Популярность";
      break;
    default:
      keyX = "Популярность";
  }

  const arrGraph = createArrGraph(data, keyX);

  let svg = d3.select("svg");
  svg.selectAll("*").remove();

  attr_area = {
    width: parseFloat(svg.style("width")),
    height: parseFloat(svg.style("height")),
    marginX: 50,
    marginY: 50
  }

  if (selectY.includes("min") && selectY.includes("max")) {
    const [scX, scY] = createAxis(svg, arrGraph, attr_area, "max");
    createChart(svg, arrGraph, scX, scY, attr_area, chartType, "blue", "min");
    createChart(svg, arrGraph, scX, scY, attr_area, chartType, "red", "max");
  } else {
    if (selectY.includes("min")) {
      const [scX, scY] = createAxis(svg, arrGraph, attr_area, "min");
      createChart(svg, arrGraph, scX, scY, attr_area, chartType, "blue", "min");
    } else {
      const [scX, scY] = createAxis(svg, arrGraph, attr_area, "max");
      createChart(svg, arrGraph, scX, scY, attr_area, chartType, "red", "max");
    }
  }
}

const createChart = (svg, data, scaleX, scaleY, attr_area, type, color, valueType) => {
  const isMin = valueType === "min";

  const offsetX = isMin ? -3 : 3;
  const valueIndex = isMin ? 0 : 1;

  if (type === "scatter") {

    svg.selectAll(`.dot-${valueType}`)
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 4)
      .attr("cx", d =>
        scaleX(d.labelX) + scaleX.bandwidth() / 2 + offsetX
      )
      .attr("cy", d => {
        let y = scaleY(d.values[valueIndex]);
        if (!isMin && d.values[0] === d.values[1]) {
          y += 3;
        }
        return y;
      })
      .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
      .style("fill", color);

  } else if (type === "histogram") {

    svg.selectAll(`.rect-${valueType}`)
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d =>
        scaleX(d.labelX) + scaleX.bandwidth() / 2 + offsetX
      )
      .attr("width", 6)
      .attr("y", d => scaleY(d.values[valueIndex]))
      .attr("height", d =>
        scaleY.range()[0] - scaleY(d.values[valueIndex])
      )
      .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
      .style("fill", color);
  } else if (type === "linear") {
    const line = d3.line()
      .x(d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
      .y(d => scaleY(d.values[valueIndex]) - valueIndex * 7)
      .curve(d3.curveMonotoneX)

    svg.append("path")
      .datum(data)
      .attr("d", line)
      .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
      .style("stroke-width", "2")
      .style("stroke", color)
  
  }
};