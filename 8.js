
// const fact = (num) => {
//   let ans = 1;
//   for(let i = 1; i <= num; i++){
//     ans *= i;
//   }
//   return ans;
// }

const fact = (num) => {
  if(num == 0) return 1;
  else return num * fact(num-1)
}



let n = 5;

console.log(fact(n))