const FizzBuzz = require('./fizzbuzz')

describe('FizzBuzz',() => { // what are you test?
    it ('Input 1 Should Be 1',()=>{
        //var -> gouble , let -> () of function (can change), const -> same let but can't change

        //arrange
        const expected = 1 //can ; or not but agree with team
        const input = 1
        //action
        const actual = FizzBuzz(input)
        //assert
        expect(actual).toBe(expected)
    })

    it ('Input 3 Should Be Fizz',()=>{
        const expected = "Fizz"
        const input = 3

        const actual = FizzBuzz(input)

        expect(actual).toBe(expected)
    })

    it ('Input 4 Should Be 4',()=>{
        const expected = 4
        const input = 4

        const actual = FizzBuzz(input)

        expect(actual).toBe(expected)
    })

    it ('Input 5 Should Be Buzz',()=>{
        const expected = "Buzz"
        const input = 5

        const actual = FizzBuzz(input)

        expect(actual).toBe(expected)
    })

    it ('Input 15 Should Be FizzBuzz',()=>{
        const expected = "FizzBuzz"
        const input = 15

        const actual = FizzBuzz(input)

        expect(actual).toBe(expected)
    })
})