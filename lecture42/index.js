for (let i = 1; i < 11; i++) {
    console.log(i);  
}


for (let i = 0; i < 11; i++) {
    console.log('Mannan');
}


for( let i = 10; i > 0; i--){
    console.log(i);
}


for(let i = 1; i < 6;i++){
    if( i == 4)
        break;
    else 
        console.log(i);
}


for(let i = 1; i < 6;i++){
    if( i == 4)
        continue;
    else 
        console.log(i);
}


let num = 10;
while (num > 0) {
    console.log(num);
    num--;
}


let num = 20;
do {
    console.log(num);
    num--;
} while (num > 0);


let firstName = "mannan";
let lastName = 'Jain';
console.log(typeof(lastName));
let name = `Mannan
Jain This is 
my Name`;
console.log(name);


let firstName = new String("Mannan Jain");
console.log(firstName);


let op1 = 'English ';
let op2 = 'Hindi';

let ans = op1 + op2;
console.log(ans);
let finalAns= `${op1}${op2}`;
console.log(finalAns);


console.log(op1.length);

console.log(op2.toUpperCase());
console.log(op1.toLowerCase());


let str = "Mannan jain";
console.log(str.substring(2));


let sentence = "Hello ji kaise ho saare";
let words = sentence.split(' ');
console.log(words);