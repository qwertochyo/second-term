import { useState } from "react";
import { ChartDraw } from "./ChartDraw";
import { createArrGraph } from "../utils/createArrGraph";
import { Error } from "./Error";

export const Chart = ({ data }) => {
  const [axisX, setAxisX] = useState("Страна");
  const [axisY, setAxisY] = useState([true, false]);
  const [chartType, setChartType] = useState("scatter");
  const [isError, setIsError] = useState(false);
  const [arrGraph, setArrGraph] = useState(createArrGraph(data, axisX));

  const handleSubmit = (event) => {
    if (isError) {
      return;
    } else {
      event.preventDefault();
      setAxisX(event.target["ox"].value);
      setAxisY([event.target["oy"][0].checked, event.target["oy"][1].checked]);
      setChartType(event.target["chartType"].value);
      setArrGraph(createArrGraph(data, axisX));
    }
  }

  const handleError = (event) => {
    const form = event.target.form;

    const checkboxes = form.querySelectorAll("input[name='oy']");

    const isChecked = Array.from(checkboxes).some(cb => cb.checked);

    if (!isChecked) {
      setArrGraph([]);
    } else {
      setArrGraph(createArrGraph(data, axisX));
    }

    setIsError(!isChecked);
  };

  return (
    <>
      <h4>Визуализация</h4>
      <form onSubmit={handleSubmit}>
        <p> Значение по оси OX: </p>
        <div>
          <input type="radio" name="ox" value="Страна" defaultChecked />
          Страна
          <br />
          <input type="radio" name="ox" value="Год" />
          Год
        </div>
        <p> Значение по оси OY </p>
        <div>
          {isError && <Error label={"Выберите значение OY"} />}
          <input type="checkbox" name="oy" defaultChecked onChange={handleError} />
          Максимальная высота <br />
          <input type="checkbox" name="oy" onChange={handleError} />
          Минимальная высота
        </div>
        <div>
          <p>Тип диаграммы
            <select name="chartType">
              <option value="scatter">Точечная диаграмма</option>
              <option value="histogram">Гистограмма</option>
            </select>
          </p>
        </div>
        <p>
          <button type="submit">Построить</button>
        </p>
      </form >
      <ChartDraw data={arrGraph} axisY={axisY} type={chartType} />
    </>
  );
}