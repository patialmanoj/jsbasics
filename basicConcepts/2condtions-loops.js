// *** IF else *********************************************************************************
var greeting = ''
var hour = 5
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log("example1",greeting);

//*** Switch**********************************************************************************
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log("example2 ",day);


//*** Loops**************************************************************************************

// for loop

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

for (i = 0; i < cars.length; i++) { 
    text += cars[i] + "<br>";
}

// for in
var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
    text += person[x];
}

// while
while (i < 10) {
    text += "The number is " + i;
    i++;
}

// do while
do {
    text += "The number is " + i;
    i++;
}
while (i < 10);

// ************ jquery loops ****************************************************

// DOM ELEMENTS ............ //  .each
//1
$('div').each(function (index, value) { 
    console.log('div' + index + ':' + $(this).attr('id')); 
  });

//2
var arr = [
    'one',
    'two',
    'three',
    'four',
    'five'
 ];
 $.each(arr, function (index, value) {
   console.log(value);
   
   // Will stop running after "three"
   return (value !== 'three');
 });

 // ES5
 var list = [8, 3, 11, 9, 6];
 
 list.forEach(function(value, i) {
   console.log(value);
 });

 //ES6

 // for -of
//1)
 for (var char of 'Hello') {
    console.log(char);
}
//(2)
let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

//(3)
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3

///(4)

function* fibonacci() { // a generator function
    let [prev, curr] = [0, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
  
  for (let n of fibonacci()) {
    console.log(n);
    // truncate the sequence at 1000
    if (n >= 1000) {
      break;
    }
  }

  // (5)
  //we can also iterate over an object that explicitly implements iterable protocol:
  var iterable = {
    [Symbol.iterator]() {
      return {
        i: 0,
        next() {
          if (this.i < 3) {
            return { value: this.i++, done: false };
          }
          return { value: undefined, done: true };
        }
      };
    }
  };
  
  for (var value of iterable) {
    console.log(value);
  }
  // 0
  // 1
  // 2