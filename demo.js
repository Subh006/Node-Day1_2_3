function a(x,y){
let sum = x+y;
b(sum);
}

function b(sum){
let mult= sum*3;
c(mult);
}

function c(mult){
let minus=mult-2;
d(minus);
}

function d(minus){
const str=`${minus} Subhajeet`;
console.log(str);
}

a(4,8);