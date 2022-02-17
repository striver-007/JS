// Starting js -> Javascript
//--> Js is also known as weakly typed language 


//var let const




//variable declaration
//var a; //int string float ??




// variable initialization
// a=10;




// console.log(typeof a); //typeof ->which type of variable is a
// console.log(a); //console.log() is use to print in js

// a="hello world" //reinintializing
// console.log(typeof a);
// console.log(a);

// a =true;  //reinintializing
// console.log(typeof a);
// console.log(a);





// var str1 ="how r u??\nI m fine thanku mf"
// console.log(str1);





// --->Use cases of backticks ``
// var str2 =`how r u??
// I m fine thanku mf`
// console.log(str2);

// var num = 2400;
// console.log(`half of ${num} is ${num/2}`);




// ---> Problem in js
//1--> Redeclaration is allowed

// var r = 100;
// console.log(r);

// var r="hello world";  
// console.log(r);



//----> To overcome this redecalaration problem we use let keyword
// let l=100;
// console.log(l);

// let l="hello world"; //this willl throw error
// console.log(l);
// -->1-SyntaxError: Identifier 'l' has already been declared

// l=200;   //reinitialization is allowed while using let but we cannot redeclare it
// console.log(l);




//-->loops in js

// var num =10;

// for(var i=1;i<=num;i++){
//     if(i%2==0){
//         console.log("num is even");
//         console.log(i);
//     }
// }




//-->const keyword


//const is even more strict than var and let
//reinitialix=zation and redeclaration both are not allowed in const keywrd




//js runs code line by line





//2--> error in var key word
// var keyword is function scoped inside a function else it is globally scoped
//let keyword is block scoped


var num=10;
for(var i=0;i<num;i++){
    if(i%2==0){
         let j=69; //its scope is onlh inside the block outside of it ...it is null and void and will throw error
         console.log("num is even "+i);
         console.log(j);
         
     }
}
console.log(i);   //even outside the loop we access the valie of i as it is function scoped -->var keyword
console.log(j);   //ReferenceError: j is not defined-->as it is block scoped                -->let keyword