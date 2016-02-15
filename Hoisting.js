//AXAMPLE WITH VARIABLE
(function(){
    //VARIABLE DECLARED IN THE BACK BUT NOT ASSIGNED A VALUE
    console.log(a);

    //VALUE ASSIGNED TO VARIABLE
    var a = "Hello world";

    console.log(a);
})();

//EXAMPLE WITH FUNCTION
(function(){
    a();
    //b(); WILL PRODUCE AN ERROR

    //THE FUNCTION WILL ALSO BE DECLARED IN THE TOP OF THE LOCAL SCOPE
    function a(){
        console.log("Hello Again");
    };

    //THIS IS A VARIABLE WHICH WILL BE DECLARED BUT NOT ASSIGNED THE FUNCTION IN TOP
    var b = function(){
        console.log("Not here yet");
    };
})();