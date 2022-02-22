//Arrays in JS

let cars = ['BMw','audi','tata',5 ,10,true];
//in js we can store different vaules for different types in array

//to print the array 
console.log(cars);

//To access the elements int the array
console.log(cars[0]);
console.log(cars[5]);
console.log(cars[10]);  //this will throw undefined


console.log(cars.length); //to find the length of the arrays

//Replacing the elements of the arrays
cars[0] = "Mahindra";
console.log(cars);

//Adding the elements in the array
cars[5] = "Honda";
console.log(cars);


//Methods of an array

//1-->POP-this method is used to remove the element from the array
//removes the elements form the last
cars.pop();
console.log("after popping inside the array");
console.log(cars);
cars.pop();
console.log(cars);


//2-->PUSH-this method is used to push an element inside an array
//Elements are pushed inside the array from the last
cars.push("Honda");
cars.push(10);
console.log("After pushing inside the array");
console.log(cars);

//3-->UNSHIFT method-this method is used to push or add element inside the array from start
cars.unshift("ferrari");
console.log("After unshifting inside the array");
console.log(cars);

//4-->SHIFT method-this method is used to remove the element from the 0th index
cars.shift();
console.log("After shifting inside the array");
console.log(cars);

//To find the length of the array
console.log(cars.length);


let Array2d =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


console.log("2D Array")
console.log(Array2d);
console.table(Array2d); //will print the array in tabular form

let res = Array2d[1]; //Accesed the row with 1th index [4,5,6] of the Array2d
console.log("Printing res array");
console.log(res);  //will print [4,5,6]

//Now to accessing  the elements of the  array res
console.log("res array 1st index stored in variable ele");
var ele = res[1];  //accessed the element at the 1th index of arrray res
console.log(ele); //will print 5

console.log("res of 2nd index"); 
console.log(res[2]);  //will return the element present at 2th index of array res

console.log(Array2d[1][0]); //this will print row with index 1 && coloumn with index 0 -->4



//Accessing the element +VC V


