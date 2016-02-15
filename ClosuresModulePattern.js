//Even though the variable name is the same it will be the local variable that is being printed.
var x = "Im global";

var func = function(){
    var x = "Im local";
    console.log(x);
};

func();

//If you want to change a variable from outside you can use the module pattern like this.

var modularpattern = (function() {
    // your module code goes here
    var sum = 0 ;

    return {
        add:function() {
            sum = sum + 1;
            return sum;
        },
        reset:function() {
            return sum = 0;
        }
    }
}());
console.log(modularpattern.add());    // alerts: 1
console.log(modularpattern.add());    // alerts: 2
console.log(modularpattern.reset());  // alerts: 0