//const isFizz = (number) => number % 3 === 0
function isFizz(number) {return number%3 === 0}
function isBuzz(number) {return number%5 === 0}
function isFizzBuzz(number) {return isFizz(number) && isBuzz(number)}

function FizzBuzz(number) {
    if (CallFizzBuzz(number)) return "FizzBuzz"
    if (CallFizz(number)) return "Fizz"
    if (CallBuzz(number)) return "Buzz"
    return number
}
module.exports = FizzBuzz //จะประกาศ module ข้างล่าง function นั้น