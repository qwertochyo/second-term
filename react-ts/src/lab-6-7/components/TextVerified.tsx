import { useState } from "react";
import type { IReplaceItem } from "../types/types";

interface Props {
  replaceList: IReplaceItem[]
}

export const TextVerified = ({ replaceList }: Props) => {
  const [text, setText] = useState<string>("");
  const [printText, setPrintText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const text = e.target.value;

    const result = replaceList.reduce((acc, item) => {

      acc = acc.replaceAll(item.key.toLowerCase(), item.value.toLowerCase());
      acc = acc.replaceAll(item.key.toUpperCase(), item.value.toUpperCase());
      
      return acc;
    }, text);

    setText(result);
  }

  const handleBlur = (): void => {
    setPrintText(text);
  }

  return (
    <div>
      <textarea value={text} onChange={handleChange} onBlur={handleBlur} cols={30} rows={10} />
      <p>{printText}</p>
    </div>
  );
}