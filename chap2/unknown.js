/*
this will throw because the type has changed, the unknown type
functions like a label over a type rather than a type
compiler cannot figure out the type on its own, needs help, but it will check, unlike any

let val: unknown = 22;
val = 'string value';
val = new Array();
val.push(33);

console.log(val);

*/
// quell the above by using type guards to prove type
var val = 22;
val = 'string value';
val = new Array();
if (val instanceof Array) {
    val.push(33);
}
console.log(val);
