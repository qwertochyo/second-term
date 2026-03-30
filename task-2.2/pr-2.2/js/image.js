const drawReact = (svg) => {
  const react = svg.append("g")

  react.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 30)
    .style("fill", "#2A2E36");

  react.append("ellipse")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("rx", 10)
    .attr("ry", 27)
    .style("stroke-width", 2)
    .attr("transform", "rotate(-30, 0, 0)")
    .style("fill", "transparent")
    .style("stroke", "#60DCFC");

  react.append("ellipse")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("rx", 10)
    .attr("ry", 27)
    .style("stroke-width", 2)
    .attr("transform", "rotate(30, 0, 0)")
    .style("fill", "transparent")
    .style("stroke", "#60DCFC");

  react.append("ellipse")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("rx", 10)
    .attr("ry", 27)
    .style("stroke-width", 2)
    .attr("transform", "rotate(90, 0, 0)")
    .style("fill", "transparent")
    .style("stroke", "#60DCFC");
  
  react.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 5)
    .style("fill", "#60DCFC");
  
  react.append("circle")
    .attr("cx", 32)
    .attr("cy", 32)
    .attr("r", 5)
    .style("fill", "#2A2E36")

  react.append("circle")
    .attr("cx", -32)
    .attr("cy", -32)
    .attr("r", 5)
    .style("fill", "#2A2E36")

  react.append("circle")
    .attr("cx", -32)
    .attr("cy", 32)
    .attr("r", 5)
    .style("fill", "#2A2E36")

  react.append("circle")
    .attr("cx", 32)
    .attr("cy", -32)
    .attr("r", 5)
    .style("fill", "#2A2E36")
  
  return react;
}
