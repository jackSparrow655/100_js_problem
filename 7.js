

const findMax = (arr) => {
  let ans = -100000;
  
  // for(let i = 0; i < arr.length; i++){
  //   ans = Math.max(ans, arr[i]);
  // }

  // arr.forEach(element => {
  //   ans = Math.max(ans, element)
  // });

  // for (const i in arr) {
  //   ans = Math.max(ans, arr[i])
  // }

  arr.map(el => ans = Math.max(ans, el))

  return ans;
}




console.log(findMax([7, 4, 2, 18, 5, 6, 12, 1, "arijit", 'f']))