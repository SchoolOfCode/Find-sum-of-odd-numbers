//👉 Write your tests below here:
import sumOfOddNumbers from './main.js'

describe('Sum of odd numbers', function () {
  it('Should return sum of odd numbers', function () {
    const number = 150
    const expected = 6
    const actual = sumOfOddNumbers(number)
    expect(actual).toBe(expected)
  })
  it('Should return sum of odd numbers', function () {
    const number = 1552
    const expected = 11
    const actual = sumOfOddNumbers(number)
    expect(actual).toBe(expected)
  })
  it('Should return sum of odd numbers', function () {
    const number = 2275
    const expected = 12
    const actual = sumOfOddNumbers(number)
    expect(actual).toBe(expected)
  })
  it('Should return sum of odd numbers', function () {
    const number = 105
    const expected = 6
    const actual = sumOfOddNumbers(number)
    expect(actual).toBe(expected)
  })
  it('Should return single digit number', function () {
    const number = 8
    const expected = 8
    const actual = sumOfOddNumbers(number)
    expect(actual).toBe(expected)
  })
  it('Should return the whole number if it doesn\'t contain odd digit', function () {
    const number = 66
    const expected = 66
    const actual = sumOfOddNumbers(number)
    expect(actual).toBe(expected)
  })

})