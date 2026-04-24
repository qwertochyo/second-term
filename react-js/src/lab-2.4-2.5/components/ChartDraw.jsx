import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react";
import { createScales } from "../utils/createScales";
import { drawAxis } from "../utils/drawAxis";
import { drawChart } from "../utils/drawChart";
import { margin } from "../constants/constants";

export const ChartDraw = ({ data, axisY, type }) => {
  const chartRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    setWidth(parseFloat(svg.style("width")));
    setHeight(parseFloat(svg.style("height")));
  }, []);

  const boundsWidth = width - margin.left - margin.right;
  const boundsHeight = height - margin.top - margin.bottom;

  const { scaleX, scaleY } = useMemo(() => {
    return createScales({ data, axisY, boundsWidth, boundsHeight });
  }, [data, axisY, boundsWidth, boundsHeight]);

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    drawAxis({ svg, scaleX, scaleY, margin, height });

    if (axisY[0]) {
      drawChart({ svg, data, scaleX, scaleY, boundsHeight, margin, type, color: "red", valueType: "max" });
    }

    if (axisY[1]) {
      drawChart({ svg, data, scaleX, scaleY, boundsHeight, margin, type, color: "blue", valueType: "min" });
    }

  }, [scaleX, scaleY, data, type, axisY]);

  return (
    <svg ref={chartRef}></svg>
  )
}