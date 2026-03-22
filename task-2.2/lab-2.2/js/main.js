document.addEventListener("DOMContentLoaded", function () {
  const width = 600;
  const height = 600;
  const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

  const dataForm = document.getElementById("setting");

  const drawButton = document.querySelector("input[value='Нарисовать']");
  const resetButton = document.querySelector("input[value='Очистить']");
  const animateButton = document.querySelector("input[value='Анимировать']");

  const coordinateContainer = document.getElementById("coordinateContainer");
  const moveContainer = document.getElementById("moveContainer");
  const scaleContainer = document.getElementById("scaleContainer");
  const rotateContainer = document.getElementById("rotateContainer");

  const checkboxAnimate = document.getElementById("isAnimate");
  const checkboxMove = document.getElementById("isMove");

  const selectAnimate = document.getElementById("animationType");

  const spans = document.querySelectorAll("span");

  if (!checkboxAnimate.checked) {
    drawButton.hidden = checkboxAnimate.checked;
    selectAnimate.hidden = !checkboxAnimate.checked;
    animateButton.hidden = !checkboxAnimate.checked;

    for (let span of spans) {
      span.hidden = !checkboxAnimate.checked;
    }
  }

  if (!checkboxMove.checked) {
    moveContainer.hidden = !checkboxMove.checked;
  }

  checkboxAnimate.addEventListener("change", () => {
    drawButton.hidden = checkboxAnimate.checked;
    selectAnimate.hidden = !checkboxAnimate.checked;
    animateButton.hidden = !checkboxAnimate.checked;

    for (let span of spans) {
      span.hidden = !checkboxAnimate.checked;
    }
  });

  checkboxMove.addEventListener("change", () => {
    coordinateContainer.hidden = checkboxMove.checked;
    moveContainer.hidden = !checkboxMove.checked;
    scaleContainer.hidden = checkboxMove.checked;
    rotateContainer.hidden = checkboxMove.checked;
  });

  drawButton.addEventListener("click", () => draw(dataForm));
  resetButton.addEventListener("click", () => resetSVG(svg));
  animateButton.addEventListener("click", () => runAnimation(dataForm, selectAnimate.value, checkboxMove.checked));
})

const draw = (dataForm) => {
  const svg = d3.select("svg");
  const pict = drawSmile(svg);

  pict.attr("transform", `translate(${dataForm.cxFrom.value}, 
    ${dataForm.cyFrom.value}) scale(${dataForm.scaleXFrom.value}, ${dataForm.scaleYFrom.value}) 
    rotate(${dataForm.rotateFrom.value})`);
}

const resetSVG = (svg) => {
  svg.selectAll('*').remove();
}

const runAnimation = (dataForm, animationType, isChecked) => {
  const svg = d3.select("svg");
  const pict = drawSmile(svg);

  if (!isChecked) {
    let func;

    switch (animationType) {
      case "linear":
        func = d3.easeLinear;
        break;
      case "elastic":
        func = d3.easeElastic;
        break;
      case "bounce":
        func = d3.easeBounce;
        break;
      default:
        func = d3.easeLinear;
    }

    pict.attr("transform",
      `translate(${dataForm.cxFrom.value}, ${dataForm.cyFrom.value}) scale(${dataForm.scaleXFrom.value}, ${dataForm.scaleYFrom.value}) 
    rotate(${dataForm.rotateFrom.value})`)
      .transition(svg)
      .duration(6000)
      .ease(func)
      .attr("transform",
        `translate(${dataForm.cxTo.value}, ${dataForm.cyTo.value}) scale(${dataForm.scaleXTo.value}, ${dataForm.scaleYTo.value}) 
      rotate(${dataForm.rotateTo.value})`);
  } else {
    const moveType = document.getElementById("moveType").value;
    let path = drawPath(moveType);
    pict.transition()
      .ease(d3.easeLinear)
      .duration(6000)
      .attrTween('transform', translateAlong(path.node()));
  }
}