function FizzBuzz(number) {
    if (CallFizzBuzz(number)) return "FizzBuzz"
    if (CallFizz(number)) return "Fizz"
    if (CallBuzz(number)) return "Buzz"
    return number
}
module.exports = FizzBuzz //จะประกาศ module ข้างล่าง function นั้น

function CallFizz(number) {
    if (number % 3 == 0) return true
    return false
}

function CallBuzz(number) {
    if (number % 5 == 0) return true
    return false
}

function CallFizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) return true
    return false
}