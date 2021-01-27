//Author: Jaime Lizarazu
/*
Using the given array:
var testArr = [6,3,5,1,2,4]
Print Values and Sum
Print each array value and the sum so far
The expected output will be: 
Num 6, Sum 6
Num 3, Sum 9
Num 5, Sum 14
Num 1, Sum 15
Num 2, Sum 17
Num 4, Sum 21
Value * Position
Multiply each value in the array by its array position
The expected output will be:
[0,3,10,3,8,20]
*/

var testArr = [6,3,5,1,2,4];
for(var i=0; i < testArr.length; i++){ 
    console.log(testArr[i] * i)               //0 3 10 3 8 20
}
