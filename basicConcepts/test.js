var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    
 }
 var fullName = function (homeTown, district) {
    console.log(this.firstName + " " + this.lastName + "belongs to  " +homeTown + "in district " + district); 
 }

var person2 = {
    firstName: "manoj",
    lastName: "patial",
}

// fullName.call(person2,"himachal pradesh","kangra"); // we can borrow from other objects
fullName.apply(person2,["himachal pradesh","kangra"]); // we can borrow from other objects