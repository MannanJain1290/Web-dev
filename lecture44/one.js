// let obj = { myName: 'Mannan Jain',
//             age: 19,
//             weight: 85,
//             greet: function(){
//                 console.log('Hello ji kaise ho saare!!');
//             }
// };

// console.log(obj);
// obj.greet();

// console.log(typeof(obj));

// let arr = [1, 2, true, 'Mannan'];
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 11; i++) {
//     arr[i] = i;
// }

// arr.push(11);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(-1);
// console.log(arr);

// arr.shift();
// console.log(arr);

// let part = arr.slice(1,10);
// console.log(part);

// arr.splice(1,2,'Mannan Jain');
// console.log(arr);

// let arr = [10,20,30,44,23,65,56,76,67,87,78,98,89];

// let fun = arr.filter((num) =>{
//     return num%2 == 0;
    // if(num%2 == 0){
    //     return true;
    // } 
    // else{
    //     return false;
    // }
// })

// console.log(fun);

// let ans = arr.map((num, index) => {
//     console.log(num);
//     console.log(index);
// })
// console.log(ans);


// let ansArr = arr.map((num) =>{
//     return num*num;
// })
// console.log(ansArr);

// let arr = [1,2,3, 'Mannan', "jain", true, null];

// let fun = arr.filter((value) =>{
//     if ( typeof(value) == "string")
//         return true;
//     else
//         return false;
// });

// console.log(fun);


// let arr =[10,20,30,40];

// let ans = arr.reduce((acc,curr)=>{
//     return acc + curr;
// }, 0)

// console.log(ans);


arr = [1,2,3,5,4,6,7];

arr.sort();
console.log(arr);

console.log(arr.indexOf(5));