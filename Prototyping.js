//Here we'll apply a custom filter to the Array prototype.
//NB!! Its common standard not to change the native objects that comes with javascript

var myArray = ["Lars", "Knud", "Hans", "Ole"];

Array.prototype.myFilter = function(callback){
    var t = Object(this);
    var localArr = [];

    for(var i in t) {
        var res = callback.call(t, t[i]);
        if(typeof res === "string") {
            localArr.push(res);
        };
    };
    return localArr;
};


console.log(myArray.myFilter(function(name){
    if(name.length <= 3) {
        return name;
    }
}).length);