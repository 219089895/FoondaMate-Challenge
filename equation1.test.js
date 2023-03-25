const firstEquation = require("./equation1")

test('solves the following expression : 7x - 2 = 21', () => {
    expect(firstEquation("7x - 2 = 21")).toBe(3.29)
})