document.addEventListener("DOMContentLoaded", () => {
  const width = 600;
  const height = 600;

  const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

  const dataForm = document.getElementById("setting");

  const drawButton = d3.select("input[value='Нарисовать']");
  const resetButton = d3.select("input[value='Очистить']");
  const animateButton = d3.select("input[value='Анимировать']");

  const coordinateContainer = d3.select("#coordinateContainer");
  const moveContainer = d3.select("#moveContainer");
  const scaleContainer = d3.select("#scaleContainer");
  const rotateContainer = d3.select("#rotateContainer");

  const checkboxAnimate = d3.select("#isAnimate");
  const checkboxMove = d3.select("#isMove");

  const selectAnimate = d3.select("#animationType");
  const spans = d3.selectAll("span");

  const startUI = () => {
    const isAnimate = checkboxAnimate.property("checked");
    const isMove = checkboxMove.property("checked");

    drawButton.property("hidden", isAnimate);
    selectAnimate.property("hidden", !isAnimate);
    animateButton.property("hidden", !isAnimate);

    spans.property("hidden", !isAnimate);

    coordinateContainer.property("hidden", isMove);
    moveContainer.property("hidden", !isMove);
    scaleContainer.property("hidden", isMove);
    rotateContainer.property("hidden", isMove);
  };

  startUI();

  checkboxAnimate.on("change", startUI);
  checkboxMove.on("change", startUI);

  drawButton.on("click", () => draw(dataForm));
  resetButton.on("click", () => resetSVG(svg));
  animateButton.on("click", () =>
    runAnimation(dataForm, selectAnimate.property("value"), checkboxMove.property("checked"))
  );
});

const draw = (form) => {
  const svg = d3.select("svg");

  const pict = drawSmile(svg);

  pict.attr("transform", `
    translate(${form.cxFrom.value}, ${form.cyFrom.value})
    scale(${form.scaleXFrom.value}, ${form.scaleYFrom.value})
    rotate(${form.rotateFrom.value})
  `);
};

const resetSVG = (svg) => {
  svg.selectAll("*").remove();
};

const runAnimation = (form, animationType, isMove) => {
  const svg = d3.select("svg");
  const pict = drawSmile(svg);

  const easingMap = {
    linear: d3.easeLinear,
    elastic: d3.easeElastic,
    bounce: d3.easeBounce
  };

  const easeFunc = easingMap[animationType] || d3.easeLinear;

  if (!isMove) {
    pict
      .attr("transform", `
        translate(${form.cxFrom.value}, ${form.cyFrom.value})
        scale(${form.scaleXFrom.value}, ${form.scaleYFrom.value})
        rotate(${form.rotateFrom.value})
      `)
      .transition()
      .duration(6000)
      .ease(easeFunc)
      .attr("transform", `
        translate(${form.cxTo.value}, ${form.cyTo.value})
        scale(${form.scaleXTo.value}, ${form.scaleYTo.value})
        rotate(${form.rotateTo.value})
      `);

  } else {
    const moveType = d3.select("#moveType").property("value");
    const path = drawPath(moveType);

    pict
      .transition()
      .duration(6000)
      .ease(easeFunc)
      .attrTween("transform", translateAlong(path.node()));
  }
};