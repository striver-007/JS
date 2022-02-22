//  3 types of functions are present
//Functions are the first citizen of java script



//1-->Normal function

//function declaration
// function function_name(parm1,parm2){

//     //code

// }

//function invokeation
// function_name(arg1,arg2);

//simple function to add
// function add(a,b){
//     console.log(a+b);
// }

// add(6,9);






//Function expression
//In function expression we declare the whole function to a variable


//syntax of function expression
//  let variable_name = function(){
//      do something
//  }

//  variable_name(); //here variable name is used for function invokation

//  let thisfunc = function(){    //in func expression we do not declare a function name
//     console.log("i m function given to a variable");
// }

// thisfunc();


// var sayhi = function abcd(){
//     console.log("i am a function expression");
// }

// console.log(""+sayhi);
// sayhi();



// function calculator(str, a,b){
//     if(str =='add'){
//         return function add(){
//             console.log(a+b);
//         }
//     }
// }



// var funcCal = calculator('add',4,5);
// console.log(""+funcCal);
// funcCal();





//IIFE-->immediately invoked function
// let thisFunc = (function add(a,b){
//     return a+b;
// })(20,30);

// console.log("This output is from IIFE");
// console.log(thisFunc);


let thisFunc = function(){
    console.log("I am a function expression");
}

thisFunc();
// console.log(thisFunc());

