import * as d3 from "d3";

export const createArrGraph = (data, key) => {
  const groupObj = d3.group(data, d => d[key]);

  let arrGraph = [];

  for (const entry of groupObj) {
    let minMax = d3.extent(entry[1].map(d => d['Высота']));
    arrGraph.push({ labelX: entry[0], values: minMax });
  }

  if (key === "Год") {
    arrGraph.sort((a, b) => Number(a.labelX) - Number(b.labelX));
  }

  return arrGraph;
}