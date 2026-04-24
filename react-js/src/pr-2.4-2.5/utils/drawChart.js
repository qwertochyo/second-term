import * as d3 from "d3";

export const drawChart = ({ svg, data, scaleX, scaleY, boundsHeight, margin, type, color, valueType }) => {
  const isMin = valueType === "min";
  const offsetX = isMin ? -3 : 3;
  const valueIndex = valueType === "min" ? 0 : 1;

  if (type === "scatter") {
    svg.selectAll(`.dot-${valueType}`)
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 5)
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
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
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
        boundsHeight - scaleY(d.values[valueIndex])
      )
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .style("fill", color);
  } else if (type === "linear") {
    const line = d3.line()
      .x(d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
      .y(d => scaleY(d.values[valueIndex]) - valueIndex * 7)
      .curve(d3.curveMonotoneX)

    svg.append("path")
      .datum(data)
      .attr("d", line)
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .style("stroke-width", "3")
      .style("stroke", color)
  }
};