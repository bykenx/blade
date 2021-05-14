import ExactCalc from "../src/exactCalc"

describe("ExactCalc Test", () => {

  test('test add fun', () => {
    const num = ExactCalc.add(0.3, 0.6)
    expect(num).toEqual(0.9)
  })

  test('test subtract fun', () => {
    const num = ExactCalc.subtract(0.9, 0.3)
    expect(num).toEqual(0.6)
  })

  test('test multiply fun', () => {
    const num1 = ExactCalc.multiply(0.9, 0.3)
    const num2 = ExactCalc.multiply(-0.9, -0.3)
    const num3 = ExactCalc.multiply(0.9, -0.3)
    const num4 = ExactCalc.multiply(-0.9, 0.3)
    const num5 = ExactCalc.multiply(0, 0.3)
    const num6 = ExactCalc.multiply(0.9, 0)
    expect(num1).toEqual(0.27)
    expect(num2).toEqual(0.27)
    expect(num3).toEqual(-0.27)
    expect(num4).toEqual(-0.27)
    expect(num5).toEqual(0)
    expect(num6).toEqual(0)
  })

  test('test divide fun', () => {
    const num1 = ExactCalc.divide(0.9, 0.3)
    const num2 = ExactCalc.divide(0, 0.3)
    const num3 = ExactCalc.divide(0.9, 0)
    expect(num1).toEqual(3)
    expect(num2).toEqual(0)
    expect(num3).toEqual(Infinity)
  })
})