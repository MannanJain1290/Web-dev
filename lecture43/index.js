console.log('Mannan Jain');

function myName() {
    console.log('Mannan');
    console.log('Jain');
}

myName();

function count() {
    for (let i = 0; i <= 100; i++) {
        if (i % 9 == 0){
            console.log(i);
        }
    }
}

count();


function printNum(num){
    console.log("Printed num:", num);
}
printNum(89);

function sum(a,b,c){
    let sum = a + b + c;
    return sum;
}

let ans = sum(1,2,3);
console.log("Sum: ", ans);

function getName(firstName, lastName){
    let fullName = firstName + lastName;
    return fullName;
}

console.log('Full name:',getName('Mannan ', 'Jain'));


const getSum = function(a,b){
    return a**b;
}

console.log(getSum(2,4));

let sqrNum = function(num) {
    return num*num;
}

console.log(sqrNum(4));

let getExp = (a,b) => {
    return a**b;
}


console.log(getExp(2,10));