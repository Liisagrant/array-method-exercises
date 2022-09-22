/*
Exercise 1: Filter values less than or equal to 100

There is an array called 'values' that contains
a set of values.

Use the .filter array method to loop through the
'values' array. Filter the values so you only get values
that are less than or equal to (<=) to 100.

A new variable 'valuesBelow100' has been provided for
you. Set this variable to the .map array method you created.

*/

const values = [10, 20, 30, 40, 50, 100, 200, 300, 400, 500, 1000];

const valuesBelow100 = values.filter((value) => value >= 100);
console.log(valuesBelow100);
