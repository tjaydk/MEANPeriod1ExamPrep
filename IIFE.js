//Normally a function have to be called to fire.

var func = function(){
    console.log("Called");
};

func();

//Or you can use a self invoking function IIFE

(function(){
    console.log("Selfinvoked");
})();