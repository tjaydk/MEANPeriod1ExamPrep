'use strict'

//GLOBAL VARIABLES AND OBJECTS

var myArray = ["Lars", "Knud", "Hans", "Ole"];


//GLOBAL FUNCTIONS
var isSmallEnough = function(value){
    return value.length <= 3;
};

var toUpperCase = function(value) {
    return value.toUpperCase();
};




//NUMBER 1
//====================================

// FILTER ON ARRAY
var filteredArray = myArray.filter(isSmallEnough);

console.log(filteredArray.length);

// MAP ON ARRAY
var uppercasedArray = myArray.map(toUpperCase);

for(var item in uppercasedArray) {
    console.log(uppercasedArray[item]);
};

//====================================


//NUMBER 2
//====================================

//MYFILTER
var myFilter = function(array, callback) {
    var localFilterArray = [];
    for(var item in array) {
        //IF ITEM PASSES FILTER FUNCTION ITS PUSHED TO ARRAY
        if(callback(array[item])){
            localFilterArray.push(array[item]);
        };
    };;
    return localFilterArray;
};

console.log(myFilter(myArray, isSmallEnough).length);

//MYMAP
var myMap = function(array, callback){
    var localFilterArray = [];
    for(var item in array) {
        localFilterArray.push(callback(array[item]));
    };;
    return localFilterArray;
};

console.log(myMap(myArray, toUpperCase))
//====================================


//NUMBER 3
//====================================
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


//NUMBER 4
//====================================
var handleNumArrays = function(na1, na2, callback){
    var handledArray = [];
    if(na1.length == na2.length) {
        for(var n = 0; n < na1.length; n++) {
            handledArray.push(na1[n] + na2[n]);
        }
    };
    callback.call(this, handledArray);
};

var array1 = [1,2,3];
var array2 = [1,2,3];


//HANDLENUMARRAYS FUNCTION WITH CALLBACK THAT PRINTS NUMBERS COMMA SEPARATED
handleNumArrays(array1, array2, function(res){
    console.log(res.join(','));
});

//HANDLENUMARRAYS FUNCTION WITH CALLBACK THAT PRINTS SUM OF ALL NUMBERS
handleNumArrays(array1, array2, function(res){
    var totalSum = 0;
    for(var resItem in res) {
        //CHECK IF RESULT ITEM IS A NUMBER
        if(typeof res[resItem] === 'number') {
            totalSum += res[resItem];
        }
    }
    console.log(totalSum);
});

//HANDLENUMARRAYS FUNCTION WITH CALLBACK THAT MULTIPLIES EACH VALUE WITH 10 AND PRINTS THE ITEMS WITH COMMA SEPARATION
handleNumArrays(array1, array2, function(res){
    var multiResArray = [];
    for(var resItem in res) {
        //CHECK IF RESULT ITEM IS A NUMBER
        if(typeof res[resItem] === 'number') {
            multiResArray.push(res[resItem] * 10);
        }
    }
    console.log(multiResArray.join(','));
});