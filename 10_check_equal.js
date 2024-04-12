
const isEqual = (arr1, arr2) => {
  let n = arr1.length
  let m = arr2.length
  if(n !== m) return "not equal"
  for(let i = 0; i < n; i++){
    if(arr1[i] !== arr2[i]) return "not equal"
  }
  return "equal"
}

let arr1 = [1,2,3]
let arr2 = [1,2,4]
console.log(isEqual(arr1, arr2))