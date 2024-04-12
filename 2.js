//first letter of every word of the given string whould be uppercase 
//and given sttring must be returned starting with #

const generateHashTag = (str) => {
  if(str.length >= 280 || str.trim() === 0) return false;
  str = str.trim();
  let wordArr = str.split(" ")
  let newStr = "#";
  // wordArr.forEach(element => {
  //   newStr += element.charAt(0).toUpperCase() + element.slice(1)
  // });

  wordArr.map((word) => 
    newStr += word.replace(word[0], word[0].toUpperCase())
  )


  return newStr
}

console.log(generateHashTag("  I am arijit barik the coder "))