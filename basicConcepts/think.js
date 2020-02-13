//*************** */ Example 1 ***********************
var foo = "bar"
function bar(){
  var foo = "rock";
//   console.log("function bar: ",foo);
}
function bax(foo){
  foo = "bam";
  bam = "yay";
//   console.log("function bax",foo);
}

bar();
bax(foo);
// console.log(foo);


//********************Example 2 ************/
// console.log(a(1));


function a(foo){
    if(foo>20) return foo;
    return b(foo+20);
}
function b(foo){
    return c(foo) +1;
}
function c(foo){
    return a(foo*2);
}

//***************** Example 3 ********** */
// check this in browser console
// Hoisting is a JavaScript mechanism where variables and function declarations 
// are moved to the top of their scope before code execution. I

// console.log(foo1());
 var foo1 =2;
 function foo1(){
    console.log("bar");
 }

 function foo1(){
    console.log("foo1");
 }


//*********** Example 4 **********/

var a1 = b1();
var c1 = 1; //d1();  //
// console.log(a1);  // und
// console.log(c1);  // 1

function b1() {
    return c1;
}
var d1 = function() {
    return b1();
};
//-------------------------------------
// after hoisting 
// var a1;
// var c1;
// function b1() {
//     return c1;
// }

// a1 = b1();
// c1 = 1
// console.log(a1);
// console.log(c1);

// var d1 = function() {
//     return b1();
// };


//*********** Example 5 ***************/
function checkSwtich(val){
    switch(val){
      case '5' : console.log("its five"); break;
      default  : console.log("its default");
  }
 }

 5 == '5' // true
 checkSwtich(5);


 //********** Example6 ************/
 