async function main() {
    async function a(x, y) {
        let sum = x + y;
        return sum;

    }

    let sum = await a(4, 8);
    let mult = await b(sum);
    let minus = await c(mult);
    d(minus);
    
}



async function b(sum) {
    let mult = sum * 3;
    return mult;
}

async function c(mult) {
    let minus = mult - 2;
    return minus;
}

function d(minus) {
    const str = `${minus} Subhajeet`;
    console.log(str);
}

main();
