
const sumOfSqure = (arr) => {
  // let sum = 0;
  // for (const key in arr) {
  //   sum += (Math.pow(arr[key], 2))
  // }
  // return sum

  let ans = arr.reduce((acc, curr) => acc + (curr * curr), 0)
  return ans;



}


const arr = [1, 2, 8, 5, 3, 0]

console.log(sumOfSqure(arr))