console.log('Mannan Jain');


let a = 10;
let b = 5;


console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);
console.log(++a);
console.log(a++);
console.log(--b);
console.log(b--);
a += 10;
console.log(a);


console.log( 10 > 5);
console.log('5' === 5);


let age = 25;
let canVote = (age >= 18) ? "You can VOTE" : "You cannot VOTE";
console.log(canVote); 


let ans = ( true && true && true);
console.log(ans);
ans = ( false || true);
console.log(ans);
ans = ( false || !true);
console.log(ans);
console.log(false || 'Jain' || 12);
console.log( 3 | 9);
console.log(20 >> 2);
console.log(20 << 2);


let age = 27;
if ( age >= 18){
    console.log('can vote');
}
else{
    console.log('cannot vote');
}


let num = 2;
if (num == 1){
    console.log('A');
} 
else if (num == 2){
    console.log('B');
}
else if (num == 3){
    console.log('C');
}
else if (num == 4){
    console.log('D');
}
else if (num == 5){
    console.log('E');
}
else {
    console.log('num sahi likh!!');
}


let num = 3
switch (num) {
    case 1: 
        console.log('A');
        break;
    case 2: console.log('B');
        break;
    case 3: console.log('C');
        break;
    case 4: console.log('D');
        break;
    case 5: console.log('E');
        break;
    default: console.log('F');
}


