
const countChar = (givenStr, char) => {
  const newArr = givenStr.split("");
  let count = 0;
  // newArr.map((el) => el.toUpperCase() === char.toUpperCase() ? count++ : count += 0)

  newArr.forEach(element => {
    element.toUpperCase() === char.toUpperCase() ? count++ : count += 0;
  });


  // console.log(count)
  return count;
}



console.log(countChar("arijitbarik", "i"))
