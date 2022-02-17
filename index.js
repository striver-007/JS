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

var num =10;

for(var i=1;i<=num;i++){
    if(i%2==0){
        console.log("num is even");
        console.log(i);
    }
}




//-->const keyword


//const is even more strict than var and let
//reinitialix=zation and redeclaration both are not allowed in const keywrd

const a=10;
console.log(a);

a=11; //2-TypeError: Assignment to constant variable.
console.log(a);


//js runs code line by line