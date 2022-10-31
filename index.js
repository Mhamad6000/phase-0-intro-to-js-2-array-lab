// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  // im doing what is written in test and it gives me error for no reason , im returning new array leaving the cats array unchanged
  const newArr = [...cats];
  newArr.push(name);
  return newArr;
}
function prependCat(name) {
  const newArr = [...cats];
  newArr.unshift(name);
  return newArr;
}
function removeLastCat() {
  const newArr = [...cats];
  newArr.pop();
  return newArr;
}
function removeFirstCat() {
  const newArr = [...cats];
  newArr.shift();
  return newArr;
}
