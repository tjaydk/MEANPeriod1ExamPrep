//Here we create an object from the Object prototype / and if we print out all the methods in holds we can see
// all the methods inherited from the Object.prototype
var obj = Object.prototype;

console.log(Object.getOwnPropertyNames(obj).filter(function(p){return typeof obj[p] === 'function'}));
