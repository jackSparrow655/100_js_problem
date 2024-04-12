

const countVowel = (str) => {
  let vowelArr = ['a', 'e', 'i', 'o', 'u']
  let count = 0;
  let newArr = str.split("");
  for (const key in newArr) {
    if(vowelArr.indexOf(newArr[key]) !== -1) count++
  }
  return count;
}

let str = "arijit"
console.log(countVowel(str))