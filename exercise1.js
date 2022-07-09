const input1 = prompt("Enter first integer:");
const input2 = prompt("Enter second integer:");
const input3 = prompt("Enter third integer:");

max = 0
min = 0

const average = (parseInt(input1) + parseInt(input2) + parseInt(input3)) / 3;
const big = Math.max(input1,input2,input3);
const small = Math.min(input1,input2,input3);

console.log("Max number among three is:" + big);
console.log("Min number among three is:" + small);
console.log("average among three is:" + average);
