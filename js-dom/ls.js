
const arr = [1,2,3,5,6];
console.log(arr);

const arrtoString = JSON.stringify(arr);
const stringtoarr = JSON.parse(arrtoString)
console.log(typeof(arrtoString));
console.log(stringtoarr);


localStorage.setItem("task", arrtoString);