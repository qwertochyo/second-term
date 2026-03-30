const createPath = () => {
  const svg = d3.select("svg");
  const width = svg.attr("width");
  const height = svg.attr("height");

  const a = 150;
  const n = 5; 
  const steps = 1000;

  const data = [];

  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;

    const r = a * Math.sin(n * t);

    const x = width / 2 + r * Math.cos(t);
    const y = height / 2 + r * Math.sin(t);

    data.push({"x": x, "y": y});
  }

  return data.reverse();
}

const drawPath = () => {
  const svg = d3.select("svg");
  const dataPoints = createPath();
  const line = d3.line()
    .x((d) => d.x)
    .y((d) => d.y);

  const path = svg.append('path')
    .attr('d', line(dataPoints))
    .attr('stroke', 'black')
    .attr('fill', 'none');

  return path;
}

function translateAlong(path, form) {
  const length = path.getTotalLength();

  return function () {
    return function (t) {
      const { x, y } = path.getPointAtLength(t * length);

      const scaleX =
        +form.scaleXFrom.value +
        (+form.scaleXTo.value - +form.scaleXFrom.value) * t;

      const scaleY =
        +form.scaleYFrom.value +
        (+form.scaleYTo.value - +form.scaleYFrom.value) * t;
        
      const rotate =
        +form.rotateFrom.value +
        (+form.rotateTo.value - +form.rotateFrom.value) * t;

      return `
        translate(${x}, ${y})
        scale(${scaleX}, ${scaleY})
        rotate(${rotate})
      `;
    };
  };
}