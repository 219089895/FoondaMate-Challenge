function secondEquation(equation) {
    // Left Side
    const bracMulti = parseFloat(equation[0]);
    let bracValX = parseFloat(equation[2]);
    let bracVal2 = parseFloat(equation[7]);
    let lastLeft = parseFloat(equation[12]);

    // Simplify the expression
    bracValX = bracValX * bracMulti;
    bracVal2 = bracVal2 * bracMulti;
    bracVal2 += lastLeft;
    bracVal2 -= 12;

    // Right side
    let left1 = parseFloat(equation.split(' ')[6]);
    left1 -= 12;
    bracValX += 4;
    left1 /= bracValX;
    return left1;
}

module.exports = secondEquation;