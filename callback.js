function a(x, y, cb) {
    let sum = x + y;
    cb(sum);
}

function b(sum, cb) {
    let mult = sum * 3;
    cb(mult);
}

function c(mult, cb) {
    let minus = mult - 2;
    cb(minus);
}

function d(minus) {
    const str = `${minus} Subhajeet`;
    console.log(str);
}

a(4, 8, function(sum) {
    b(sum, function(mult) {
        c(mult, function(minus) {
            d(minus);
        });
    });
});