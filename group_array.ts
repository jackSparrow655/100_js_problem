//output = {22:[{},{},{}], 23:[{},{},{}]}

import { students } from "./asset.ts";

// const output = students.map((st) => st.age);
// const uniqAge = new Set(output);
// console.log(output);
// console.log(uniqAge);
// let res = new Object();
// students.forEach((el) => {
//   const currAge = el.age.toString();
//   if (Object.keys(res).includes(currAge)) {
//     let tempArr = res[currAge];
//     tempArr.push(el);
//     res = {
//       ...res,
//       currAge: tempArr,
//     };
//   } else {
//     res = {
//       ...res,
//       currAge: [el],
//     };
//   }
// });

// console.log(res);

// type accType = Record<string, typeof students>;

// const ageGrouped = students.reduce((acc, curr) => {
//   const currAge = curr.age.toString();
//   return {
//     ...acc,
//     [currAge]: [...(acc[currAge] ?? []), curr],
//   };
// }, {} as accType);

// type gradeGroupedType = Record<string, typeof students>;
// const gradeGrouped = students.reduce((acc, curr) => {
//   const currGrade = curr.grade;
//   return {
//     ...acc,
//     [currGrade]: [...(acc[currGrade] ?? []), curr],
//   };
// }, {} as gradeGroupedType);

const groupByKey = <A extends Record<PropertyKey, any>, K extends keyof A>(
  arr: A[],
  key: K
): Record<PropertyKey & K, A[]> => {
  return arr.reduce((acc, curr) => {
    const val = curr[key];
    return {
      ...acc,
      [val]: [...(acc[val] ?? []), curr],
    };
  }, {} as Record<PropertyKey & K, A[]>);
};

const groupByKeys = <
  T extends Record<PropertyKey, any>,
  K1 extends keyof T,
  K2 extends keyof T
>(
  arr: T[],
  key1: K1,
  key2: K2
): Record<T[K1] & PropertyKey, Record<T[K2] & PropertyKey, T[]>> => {
  return arr.reduce((acc, curr) => {
    const v1 = curr[key1] as T[K1] & PropertyKey;
    const v2 = curr[key2] as T[K2] & PropertyKey;

    if (!acc[v1]) {
      acc[v1] = {} as Record<T[K2] & PropertyKey, T[]>;
    }

    if (!acc[v1][v2]) {
      acc[v1][v2] = [];
    }

    acc[v1][v2].push(curr);

    return acc;
  }, {} as Record<T[K1] & PropertyKey, Record<T[K2] & PropertyKey, T[]>>);
};

type NestedGroup<T, Keys extends readonly (keyof T)[]> = Keys extends readonly [
  infer K,
  ...infer Rest
]
  ? K extends keyof T
    ? Rest extends readonly (keyof T)[]
      ? Record<Extract<T[K], PropertyKey>, NestedGroup<T, Rest>>
      : never
    : never
  : T[];

const groupByKeys2 = <T, const Keys extends readonly (keyof T)[]>(
  arr: T[],
  ...keys: Keys
): NestedGroup<T, Keys> => {
  const group = (items: T[], keyIndex: number): any => {
    if (keyIndex >= keys.length) {
      return items;
    }

    const key = keys[keyIndex];

    const result: Record<PropertyKey, T[]> = {};

    for (const item of items) {
      const value = item[key] as PropertyKey;
      result[value] ??= [];
      result[value].push(item);
    }

    for (const k in result) {
      result[k] = group(result[k], keyIndex + 1);
    }

    return result;
  };

  return group(arr, 0);
};

const ageGrouped = groupByKey(students, "age");
const gradeGrouped = groupByKey(students, "grade");
const test = groupByKeys(students, "grade", "age");
const test2 = groupByKeys2(students, "grade", "city", 'age');

console.log(ageGrouped);
console.log(gradeGrouped);
console.log(test);
console.log(test2);
