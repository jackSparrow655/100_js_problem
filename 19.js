

const reverse = (str) => {
    return str.split('').reverse().join('')
}

// console.log("arijitbarik is a good boy".split(' ')[0] === "arijitbarik")
// console.log(reverse("arijit"))

const number = [4, 2, 5, 6, 7, 1, 6, 8, 4, 2, 6, 9, 4]
const countObj = {}
number.forEach((el) => {
    if (!countObj[el]) {
        countObj[el] = 1
    }
    else {
        countObj[el]++
    }
})

console.log(Object.values(countObj).sort().reverse()[0])