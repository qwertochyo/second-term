import * as d3 from "d3";

export const createScales = ({ data, axisY, boundsWidth, boundsHeight }) => {

  const scaleX = d3.scaleBand()
    .domain(data.map(d => d.labelX))
    .range([0, boundsWidth]);

  let values = [];

  if (axisY[0]) values.push(...data.map(d => d.values[1]));
  if (axisY[1]) values.push(...data.map(d => d.values[0]));

  const [min, max] = d3.extent(values);

  const scaleY = d3.scaleLinear()
    .domain([min * 0.85, max * 1.1])
    .range([boundsHeight, 0]);

  return { scaleX, scaleY };
};