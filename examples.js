const example = (() => ( {
one: () => {
/* Example 1: which one is which? */
const foo = {
  id: 1,
  height: '200px',
  width: '100px'
};
const bar = {
  id: 2,
  height: '250px',
  width: '200px'
};
console.log(foo, bar);
},
  
two: () => {
/* Example 2: changing information */
let number = "1";
number += 0;
console.log(number);
},

three: () => {
/* Example 3: async rendering of details in console.logs */
let array = [1, 2, 3];
console.log(array)
let newArray = array;
newArray.push(4);
console.log(newArray)
},

four: () => {
/* Example 4: numbers, strings, and '+' */
console.log("10");
console.log(10);
console.log("10" + 10);
console.log(10 + 10);
},

five: () => {
/* Example 5: logging multiple things at once...? */
console.log("string", "another string");
console.log("string another string");
},

six: () => {
/* Example 6: console.log() gets crowded real fast */
for (let index = 0; index < 100; index++) {
  console.log(index);
}
}
} ))();
