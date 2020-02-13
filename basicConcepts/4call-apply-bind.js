var person = {
         firstName: "Penelope",
         lastName: "Barrymore",
         fullName: function () {
            console.log(this.firstName + " " + this.lastName); 
            console.log(person.firstName + " " + person.lastName); // this  is apple of discord
         }
      }
//--> issue with tha above code that it is making it ambigous (line after comment a ) because it may happen that  
var  manu = person ;
manu.fullName() //  this will work fine
// some  one created other global  object 
 var  person = "lol"
manu.fullName() // this will break 

//******************************************************** */

function js (){
   var label = "js";
   function foo(){
       console.log("defined inside the " + this.label ); //  it will  loose the context here and attach to window 
   }
   foo();
}
js();


//****************************************************** */
var person2 = {
   firstName: "manoj",
   lastName: "patial",
}


var fullName = function (homeTown, district) {
   console.log(this.firstName + " " + this.lastName + "belongs to  " +homeTown + "in district " + district); 
}

var person2 = {
   firstName: "manoj",
   lastName: "patial",
}

// fullName.call(person2,"himachal pradesh","kangra"); // we can borrow from other objects
// fullName.apply(person2,["himachal pradesh","kangra"]); // we can borrow from other objects

var p2 = fullName.bind(person2,"himachal pradesh","kangra") ; 
p2();