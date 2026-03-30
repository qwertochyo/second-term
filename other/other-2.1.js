const func = function (...args) {
  const minNums = args.map((arg) => {
    const arrNums = arg.split(" ").filter((word) => !isNaN(word));
    const min = arrNums.reduce((min, num) => comp(min, num) ? min : min = num);
    
    return min;
  });

  console.log(minNums);

  const maxNum = minNums.reduce((max, num) => comp(max, num) ? max = num : max);

  return maxNum;
}

const comp = (a, b) => {
  return Number(a) < Number(b);
}

const result = func("12 ывфф 63 32 32", "123ввыф dsa 321 3222");
console.log(result);