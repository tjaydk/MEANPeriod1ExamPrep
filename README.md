MEAN JAVASCRIPT PERIOD 1
EXAM PREPORATION QUESTIONS

Explain the use of 'use strict'.
================================================================
The 'use strict' was introduced with the Ecmascript 5 addiotion to the Javascript language and can be implemented in a global sence at the beginning of your .js document or locally in a function. What it does is that it makes sure that some of the syntax depreviations that exists in much javacode is considered as an error an uncompilable / ex. 

a = 7; 
- this is considered 'OK' in Javascript syntax but can cause problems down the line as the variable is not declared. With 'use strict' this would cause an error, and thereby forcing the programmer to delcare the variable

var a = 7;


Variable/Function hoisting
================================================================
Variables and functions will automatically be declared in top of its current scope. Variables will though, not get assigned a value before its assigned in the codeblock. / ex.

See hoisting.js for examples


this in Javascript
================================================================
As Javascript is a classless language the use of this will point to an scope object. In webapplications the default value of this is the window object.
There are 3 different ways Javascript defines what this is - can be explained as follows
 
https://www.youtube.com/watch?v=hJ_YD4Ljbqc#t=78.321
This in JAVA refers to the class in which it holds - if a nested inner class it will refer to the outer class.

Function closures and JavaScript Module Pattern
================================================================
A variable can be defined on either the global scope or an local scope. So if you have a function you can call a global variable - but a you cant call a local variable from the global scope. But if a variable is declared without var in a function it becomes global. This is because of the Function Closure.
JavaScript Module Pattern is a way to ensure that no outside interference conflicts with a local variable in a function - the way to do this is by having a self envoking function with nested functions / ex.

See ClosuresModulePattern.js


IIFE 
================================================================
A function is normally called to fire - but you can use a self invoking function to make it fire itself. /Ex

See IIFE.js


JavaScript Prototyping
================================================================
Every object in Javascript has a prototype / blueprint. The prototype holds methods which will then be callable from new instances of that object. You can apply methods to prototypes by using the dot and apply it to the prototype.  /Ex 

See Prototyping.js


Basic 'things' inherited by object
================================================================
Every object created in javascript inherits from the 'super' Object which holds some standard methods like .toString();  /Ex

See Object.js


User defined callbacks
================================================================
A callback function or higher-order function is a function that is being passed to another function. It is not passed with the () afterwards as it is not being invoked immediately but as the name implies - called back. The function is invoked in the body of the function it is being passed to, hence it is a closure. It can be both a anonymous or a named function. / Ex

See MagicOfCallbacks.js


Node.js and the Node Package Manager NPM
================================================================
Node.js is an eventdriven, non-blocking I/O model used for scalable network applications. Its build on the V8 Engine. It\s targeted for asynchronis applications. A great tool in Node.js is the Node Package Manager NPM which makes it easy to install 3rd party modules available on the npm network (https://www.npmjs.com/), via the npm install function. If you include package dependencies to your application the user can easily download all the packages via the npm install function. So it works like the Maven function in Java.


Userdefined reusable modules
================================================================
It is possible to create your own modules that can be reused in other of your applications. This is done by defining either a function or a variable with the export function Ex/ 

var PI = 3.14;
exports.PI = PI;
then import in other application with
var PI = require("PI");
