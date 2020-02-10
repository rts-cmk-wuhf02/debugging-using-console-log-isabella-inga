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

/* Example 2: async rendering of details in console.logs */
let array = [1, 2, 3];
console.log(array)
let newArray = array;
newArray.push(4);
console.log(newArray)

/* Example 3: numbers, strings, and '+' */
console.log("10");
console.log(10);
console.log("10" + 10);
console.log(10 + 10);

/* Example 4: logging multiple things at once...? */
console.log("string", "another string");
console.log("string" + " " + "another string");

/* Example 5: console.log() gets crowded real fast */
for (let index = 0; index < 100; index++) {
  console.log(index);
}