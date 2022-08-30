// question 1:

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? (1)
  }
  console.log(count); // What is logged? (0)
})();

// question 2:

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? (3)
    }, 1000);
  }

// question 3:

// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.


// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// function perimeter(length, width) {
//     return 2*( length + width);
// }

// document.writeln('The area of your rectangle is ' + area(length, width));         
// document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));


// question 4:

// Take a variable in outer function and create an inner function to increase the counter every time it is called
             
// function OuterFunction() {

//     var outerVariable = 20;

//     function InnerFunction() {
//         alert(outerVariable);
//     }

//     return InnerFunction;
// }
// var innerFunc = OuterFunction();

// innerFunc();
    
// question 5:

// Print Output

// var a = 12;
// (function () {
//   alert(a);  //12
// })();


// question 6:

// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x(); //12

// question 7:

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

//sol:
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz 