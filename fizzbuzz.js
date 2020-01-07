//const isFizz = (number) => number % 3 === 0
function isFizz(number) {return number%3 === 0}
function isBuzz(number) {return number%5 === 0}
function isFizzBuzz(number) {return isFizz(number) && isBuzz(number)}

function FizzBuzz(number) {
    if (isFizzBuzz(number)) return "FizzBuzz"
    if (isFizz(number)) return "Fizz"
    if (isBuzz(number)) return "Buzz"
    return number
}
module.exports = FizzBuzz //จะประกาศ module ข้างล่าง function นั้น