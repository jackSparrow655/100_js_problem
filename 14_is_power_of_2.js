

const isPower=(num, power)=>{
  if(num < power) return 0
  else if(num === power) return 1
  num = num / power
  return isPower(num, power)
}

let num = 18
let power = 2

if(isPower(num, power)){
  console.log("yes power")
}
else{
  console.log("no power")
}