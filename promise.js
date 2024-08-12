function a(x, y) {
    let sum = x + y;
    let p1 = new Promise(function(resolve){
        resolve(sum);
    });
    return p1;
}

function b(sum) {
    let mult = sum * 3;
    let p2 = new Promise(function(resolve){
        resolve(mult);
    });
    return p2;
}

function c(mult) {
    let minus = mult - 2;
    let p3 = new Promise(function(resolve){
        resolve(minus);
    });
    return p3;
}

function d(minus) {
    const str = `${minus} Subhajeet`;
    console.log(str);
}

a(4, 8)
    .then((value1)=> b(value1))
    .then((value2)=> c(value2))
    .then((value3)=> d(value3));
    