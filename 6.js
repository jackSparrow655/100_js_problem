

const isPalindrome = (str) => {

  str = str.trim()
  let e = str.length-1
  let s = 0

  while(s < e){
    if(str[s] !== str[e]) return false
    s++
    e--
  }
  return true
 
}

let str = "racecar"


if(isPalindrome(str)){
  console.log("palindrome")
}
else{
  console.log("not palindrome")
}