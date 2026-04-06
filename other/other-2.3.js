d3.select(document).on("DOMContentLoaded", () => {
  const width = 600;
  const height = 600;

  const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("style", "outline: thin solid black;");

  const container = svg.append("g");

  function corner(x, y) {
    const corn = [
      { x: 0, y: 0 },
      { x: width, y: 0 },
      { x: 0, y: height },
      { x: width, y: height }
    ];

    let result = corn[1];

    for (const c of corn) {
      const r1 = Math.hypot(x - c.x, y - c.y);
      const r2 = Math.hypot(x - result.x, y - result.y);

      result = r1 < r2 ? c : result;
    }

    return result;
  }

  function spawnCircle(color) {
    const x = Math.random() * width;
    const y = Math.random() * height;

    const circle = container.append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 40)
      .attr("fill", color);

    const target = corner(x, y);

    circle.transition()
      .duration(3000)
      .ease(d3.easeLinear)
      .attr("cx", target.x)
      .attr("cy", target.y)
      .delay(300)
      .remove();
  }

  const colors = ["red", "blue", "brown", "orange", "gray", "green"];

  const circles = Array.from({length: 10}, (v, i) => i).map((item, idx) => {
    spawnCircle(colors[idx % colors.length]);
  })

});