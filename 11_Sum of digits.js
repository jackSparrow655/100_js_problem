
const sumOfdigit = (num) => {
  let temp = num;
  let sum = 0
  while(temp > 0){
    let digit = temp % 10;
    sum += digit;
    temp = Math.floor(temp/10);
  }
  return sum
}



console.log(sumOfdigit(12345))