const secondEquation = require("./equation2")

test('solves the following expression: 2(4x + 2) + 6 = 24 - 4x', () => {
    expect(secondEquation("2(4x + 2) + 6 = 24 - 4x")).toBeCloseTo(1, 5)
})