const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(typeof boolean3);

console.log(boolean1 == boolean3); //false
console.log(boolean1===boolean2); //false

const boolean4=new Boolean(true);
console.log(typeof boolean4); //object

console.log(boolean1===boolean2); //false

console.log(boolean1===true); //true

console.log(boolean1==="true"); //false