export const splitByIndex = (str: string, index: number): [string, string] => ([
  str.slice(0, index),
  str.slice(index)
]);

export const splitByIndexLeft = (str: string, indexLeft: number): [string, string] => ([
  str.slice(0, str.length - indexLeft),
  str.slice(str.length - indexLeft)
]);

export const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
