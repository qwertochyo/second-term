import * as d3 from "d3";

export const drawAxis = ({ svg, scaleX, scaleY, margin, height }) => {

  const xAxis = d3.axisBottom(scaleX);
  const yAxis = d3.axisLeft(scaleY);

  svg.append("g")
    .attr("transform", `translate(${margin.left}, ${height - margin.bottom})`)
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-30)");

  svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);
};