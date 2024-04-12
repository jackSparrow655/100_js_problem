//longest word in a string
//if multiple word exist => return first one encountered


const findLongestWord = (str) => {
  str = str.trim();
  if(str.length === 0) return false;
  let wordsArr = str.split(" ")
  let sortedArr =  wordsArr.sort((a,b) => b.length - a.length)
  return sortedArr[0]
}

console.log(findLongestWord("     hii I am learning javascript     "))