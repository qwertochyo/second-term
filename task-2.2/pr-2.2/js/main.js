document.addEventListener("DOMContentLoaded", function () {
  const width = 600;
  const height = 600;

  const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

  const form = d3.select("#setting").node();

  const animateButton = d3.select("input[value='Анимировать']");
  const resetButton = d3.select("input[value='Очистить']");

  animateButton.on("click", () => {
    const pict = drawReact(svg);
    const path = drawPath();
    pict
      .attr("transform", `scale(${form.scaleXFrom.value}, ${form.scaleYFrom.value})
      rotate(${form.rotateFrom.value})`)
      .transition()
      .duration(form.duration.value)
      .ease(d3.easeLinear)
      .attrTween("transform", translateAlong(path.node(), form));
  })

  resetButton.on("click", () => removeSVG(svg));
})

const removeSVG = (svg) => {
  svg.selectAll("*").remove();
}