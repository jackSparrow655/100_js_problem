

const calculateAvg = (arr) => {
  
  let sum = 0;
  arr = arr.filter((el) => typeof(el) === "number")
  let n = arr.length
  console.log(arr)
  arr.forEach(element => {
    sum += element
  })
  let ans = sum / n
  return ans;
}


let arr = [7, 4, 5, 0, "ariit", '5', 'f'];
console.log(calculateAvg(arr))