import { useState } from "react";

export const TextVerified = ({ replaceList }) => {
  const [text, setText] = useState("");
  const [printText, setPrintText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;

    const result = replaceList.reduce((acc, item) => {
      const key = Object.keys(item)[0];
      const value1 = item[key] !== "" ? item[key].toLowerCase() : item[key];

      const value2 = item[key] !== "" ? item[key].toUpperCase() : item[key];

      acc = acc.replaceAll(key.toLowerCase(), value1);
      acc = acc.replaceAll(key.toUpperCase(), value2);

      return acc;
    }, text);

    setText(result);
  }

  const handleBlur = () => {
    setPrintText(text);
  }

  return (
    <div>
      <textarea value={text} onChange={handleChange} onBlur={handleBlur} cols="30" rows="10" />
      <p>{printText}</p>
    </div>
  );
}