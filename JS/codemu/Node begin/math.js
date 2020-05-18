function square(num) {
    if (check(num)) {
        return num * num;
    } else {
        return null;
    }
}

function cube(num) {
    if (check(num)) {
        return num * num * num;
    } else {
        return null;
    }
}

function chetvertayaStepen(num) {
    if (check(num)) {
        return Math.pow(num, 4);
    } else {
        return null;
    }
}



function check(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

exports.square1 = square;
exports.cube1 = cube;
exports.chetvertayaStepen1 = chetvertayaStepen;