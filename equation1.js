function firstEquation(equation) {
    // Split equation
    const split = equation.split(' ');

    // Assign parts to variables
    let left1 = parseFloat(split[0]);
    let left2 = parseFloat(split[2]);
    let right = parseFloat(split[4]);

    // convert second value to nagative if sign after x is negative
    if (split[1] == '-') {
        left2 = left2 * -1;
    }

    // add 2 to right side
    let newRight = right + 2;

    // simplified
    const x = newRight / left1;

    return parseFloat(x.toFixed(2));
}

module.exports = firstEquation;