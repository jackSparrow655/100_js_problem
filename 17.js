//convert string into cammelCase

const toCammelCase = (str) => {
    return str.split(' ').map((el, ind) => {
        if (ind === 0) {
            return el.toLowerCase()
        }
        else {
            return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
        }
    }).join('')
}

console.log(toCammelCase("hii my name Is ARijit"))