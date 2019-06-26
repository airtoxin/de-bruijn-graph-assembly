export const splitByIndex = (str: string, index: number): [string, string] => ([
  str.slice(0, index),
  str.slice(index)
]);

export const splitByIndexLeft = (str: string, indexLeft: number): [string, string] => ([
  str.slice(0, str.length - indexLeft),
  str.slice(str.length - indexLeft)
]);
