//**********************/ Example 1 ***********************
function GetIncrementFunc(incBy){
    var sum = 0;
    return function(){sum += incBy ; return sum ;}
   
   }
   
   var f = GetIncrementFunc(5)
//    console.log(f());
//    console.log(f());
   // variable sum value is updating whenever the inner function is called , and due to clousre 
   
//****************** */ Example 2 ******************************
   function foo() {
    var bar = "bar";
    function baz(){
        console.log(bar);
    }
    // baz();
    bam(baz);
   }
   function bam(baz){
    baz();
   }

//    foo();
   
//************************ Example 3 ********************************
   
   for(var i=1 ;i<=5 ; i++){
     setTimeout(function(){
        console.log("i: "+ i);
     }, i*1000);
   }

