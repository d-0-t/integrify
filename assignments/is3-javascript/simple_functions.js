// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

let array1 = [ 1, 2, 3, 10, 50, 100 ];

function double(array) {
  return array.map(x => x*2);
}
console.log("1. Double values:");
console.log(double(array1) );





// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

let array2 = [ 1, 2, 3, 4, 5, 6, 10, -2, 0, 80, -333, 846554121, 846949666 ];

function even(array) {
  return array.filter(x => x % 2 === 0);
}
console.log("\n2. Even numbers: ");
console.log(even(array2));





// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}, {name: "Tracy"}, {name: "Chuck Norris"}, {name: "Neo"}, {name: "Trinity"}]
function longerThanFive(array) {
  return array.filter(student => student.name.length > 5);
}
console.log("\n3. Names longer than 5: ");
console.log(longerThanFive(students));





// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

let array3 = [ -5, 0, 6, 13, -96, -666, 666 ];

function largestNumber(...array) {
  return Math.max(...array);
}
console.log("\n4. Largest number: ");
console.log(largestNumber(...array3));
// Doing it like this would work too:
//console.log(largestNumber(-5, 0, 6, 13, -96, -666, 666));





// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

let array4 = [ 1, 2, 3, 4, 5, 27 ];

function sum(...array) {
  let sum = (prevValue, newValue) => newValue + prevValue;
  return array.reduce(sum);
}
console.log("\n5. The sum of all: ");
console.log(sum(...array4));
