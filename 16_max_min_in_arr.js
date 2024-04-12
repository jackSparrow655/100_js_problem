const maxVal = (arr) =>{
  // let mini = -(1e9+7)
  // return arr.reduce((acc, curr) => curr > acc ? acc = curr: acc, mini)

  return Math.max(...arr)


}
const minVal = (arr) =>{
  // let maxi = 1e9+7
  // return arr.reduce((acc, curr) => curr < acc?acc = curr : acc, maxi)

  return Math.min(...arr)


}

let arr = [1,2,3,4,5,6]
console.log(minVal(arr));
console.log(maxVal(arr));