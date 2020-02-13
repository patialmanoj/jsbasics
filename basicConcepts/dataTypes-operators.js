// Six data types that are primitives:
// Boolean
// Null  -- The value null represents the intentional absence of any object value

https://bitsofco.de/javascript-typeof/

function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  
  console.log(getVowels('sky'));

// Undefined --A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.
// Number
// String
// Symbol (new in ECMAScript 6)


// // and Object



typeof null // "object"  
// The null value is technically a primitive, the way "object" or "number" are primitives. 
// This would typically mean that the type of null should also be "null". However,
// this is not the case because of a peculiarity with the way JavaScript was first defined.

// In the first implementation of JavaScript, values were represented in two parts -
// a type tag and the actual value. There were 5 type tags that could be used, and the tag for referencing an object was 0. 
// The null value, however, was represented as the NULL pointer,
// which was 0x00 for most platforms. As a result of this similarity, null has the 0 type tag,
// which corresponds to an object.


// Object.create(prototype_object, propertiesObject)
// Object.create methods accepts two arguments.

// prototypeObject: Newly created objects prototype object. It has to be an object or null.
// propertiesObject: Properties of the new object. This argument is optional



// dynamic  evaluation
 alert (1 + "23" + 5)

 // operators
var name  = obj && obj.name  // gaurd against null
var value  = i || 1 ; // default to 1 if i is undefined 


// https://addyosmani.com/resources/essentialjsdesignpatterns/book/

//-----Create Object --------------------
// var newObject = {};
// or
// var newObject = Object.create( Object.prototype );
 // // or
// var newObject = new Object();

/*  ------------Define property ---------------
    we can define property  in a object by following ways
   1--  newObject.someKey = "Hello World";
   2-- Object.defineProperty( newObject, "someKey", {
                                value: "for more control of the property's behavior",
                                writable: true,
                                enumerable: true,
                                configurable: true
                            });
                    
*/
//------------use of strict --------------

// "use strict";
var obj = {
  name:"manoj",
  age : 30 
}
// Object.defineProperty(obj,'name',{writable: false});
obj.name="ramesh";
//console.log(obj);
//----------------Enumerable----------------------------------
// if emumerable is false , we can not loop on that property and it will be missing while strigify object
var cat = {
  name: 'Fluffy',
  color : 'white'
  }
Object.defineProperty(cat, 'name',{enumerable:false});
//console.log( JSON.stringify(cat));

//---------delete -----------------------
var myvar = 15;
var myObj = {a:13 ,b:24}
// console.log("before :",myvar);
// console.log("before obj :",myObj);
//delete myvar;
// delete myObj.a;
// console.log("after :",myvar);
// console.log("after obj :",myObj);

// ---------setter , gettter--------

var arr = [1,3,4];
// we want arr.last = ?? 
Object.defineProperty(arr, "last" , {get: function(){
                                   return this[this.length-1] ;   
                          }});
//console.log(arr.last); // ?

//--------------------hoisting
hoisting();
function hoisting(){
  var a = 3;
  b=5;
}
console.log(b);