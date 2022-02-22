//strings are the sequence of characters

let str ="Hello world";
console.log(str);
console.log(str[0]);  //->H
console.log(str[6]); //->W
//this prooves that  strings are continous sequence of characters



//Methods used in Strings


//1--> Extraction Method

//  slice method
//Slice(start,end) --> start index in inclusive whereas end index is exclusive

let sliceStr1 = str.slice(2,7);
console.log(sliceStr1);

let sliceStr2 =str.slice(6);  //starting from 6 it will slice until the string ends
console.log(sliceStr2);

let sliceStr3 =str.slice(6,-2);   //strating from index 6 and leaving the last two characters
// start=2   end = -2 = 11(length of string)-2= 9   (6,-2) -->(6,9)
console.log(sliceStr3);

//    H e l l o   W o r l d
//    0 1 2 3 4 5 6 7 8 9 10 

// str.slice(2,7)  starting from 2-l till W-6(as end is exclusive)
// llo W  ---> output

console.log(str); //But original string does not changed




//SubStrings
// substr(start,length) --> starting from the given index print given length characters

let substring = str.substr(6,3); //starting from 6th index print further 3 characters
// outout --> wor         //str.substr() - it is deprecated 
console.log(substring);


//replacing the str
str= "I m Pepcoder";
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

//Information is intacted and has not be tampered with
console.log(str); 




//Concatenation of strings

let firststr = "Believe in ";
let secondstr ="Yourself";

let Concatstr = firststr+secondstr;
console.log(Concatstr);

let concat = firststr.concat(secondstr," and Pepcoding");
console.log(concat);




//Trim methods in strings
//used to remove all the faltu whitspaces

let trimstr = "           hello     world out there       ";
//removes the whitespace from strting and ending not in between

console.log("Length before trimming "+trimstr.length);
console.log("Length after trimming "+trimstr.trim().length);
console.log(trimstr.trim());




