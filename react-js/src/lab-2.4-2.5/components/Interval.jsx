import { useEffect, useState } from "react";

export const Interval = ({ rowList, startInterval }) => {
  const initialIndex = 0;
  const [index, setIndex] = useState(initialIndex);
  const [row, setRow] = useState(rowList[index]);
  const [intervalNew, setIntervalNew] = useState(startInterval);

  const length = rowList.length - 1;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => {
        if (length === prev) {
          setRow(rowList[initialIndex]);
          return initialIndex;
        } else {
          const next = prev + 1;
          setRow(rowList[next]);
          return next;
        }
      });
    }, intervalNew);

    return () => {
      clearInterval(intervalId);
    };
      
  }, [intervalNew, rowList]);

  return (
    <div>
      <input value={intervalNew} onChange={(e) => setIntervalNew(e.target.value)} />
      <p>{row}</p>
    </div>
  );
}