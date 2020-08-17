let Till = require('../src/till')
let till = new Till 

describe('#Till', () => {
  test('it should return first array item', () => {
    expect(till.calculateReceipt("Affogato")).toBe(14.80)
  })

  test('it should return first array item', () => {
    expect(till.calculateReceipt("Cappucino")).toBe(3.85)
  })

  test('it should return first array item', () => {
    expect(till.header()).toEqual("The Coffee Connection\n123 Lakeside Way")
  })
})
