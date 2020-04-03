//  // Variables
//  var firstNumber = '';   // group number 1
//  var secondNumber = '';  // group number 2
//  var operation = '';     // operation
//  var result = '';        // result
//  var display__op = document.querySelector('.display__op');
//  var display__result = document.querySelector('.display__result');


//  // when you clicked
//  function onNumClicked(num) {

//      // if you click and it's not an operation
//      if (!operation) {
//          // the choosen number will go in the firstNumber "group"
//          firstNumber += num;
//          // show the choosen number on the upper (display__op) screen
//          display__op.textContent = firstNumber; 
//      } else {
//          // otherwise the choosen number will go in the secondNumber "group"
//          secondNumber = num;
//          // show the choosen number on the upper (display__op) screen
//          display__op.textContent += num;
//      }
//  }

//  function onOperation(op) {
//      operation = op;
//      display__op.textContent += op;
//  }
//  function calculate() {
//      //One way:
//      result = eval(firstNumber + operation + secondNumber);

//      display__result.textContent = result;
//  }

//  function clickedDel() {

//      display__op.textContent = 0;
//      display__result.textContent = 0;
//      firstNumber = "";
//      secondNumber = "";
//      operation = "";
//      result = "";
//  }





















const calc_output = document.querySelector(".main_output");
const sum_output = document.querySelector(".sub_output");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".dlt");

buttons.forEach(btn => {
    btn.addEventListener("click", output);
});

let first = "";
let second = "";
let op = "";
let length = '';
// console.log('first:', first);
// console.log('second:', second);
// console.log('op:', op);
// console.log('length:', length);
function output(event) {
    console.log('event:', event);
    let result = " ";
    let value = event.target.textContent;
    first += value;
    second = calc_output.textContent;



    switch (value) {
        case "C":
            calc_output.textContent = '';
            calc_output.style = '';
            first = "";
            sum_output.textContent = "";
            second = "";
            length = "";
            sum_output.style.background = '';
            break;
        case "del":
            calc_output.textContent = calc_output.textContent.slice(0, -1);
            break;
        case "+":
        case "-":
        case "/":
        case "*":
            op = value;
            first = first.slice(0, -1);
            length = first;
            calc_output.textContent += value;
            break;
        case "=":

            // calc_output.textContent = first.slice(0, -1);
            // console.log('seconed:', second);
            // second = second.slice(0, length.length)
            // console.log('seconed:', second);

            length = parseInt(length)
            second = parseInt(second.split(op)[1]);
            result = eval(calc_output.textContent);
            // calc_output.textContent = (length + op + second);
            // console.log('length:', length);
            // console.log('second:', second);
            // console.log('result:', result);
            // debugger;
            // calc_output.textContent += value;
            sum_output.textContent = result;
            sum_output.style.background = '#FF00AA';
            calc_output.style.color = 'blue';
            // calc_output.style.border = "thick solid #0000FF"; 
            break;
        default:
            calc_output.textContent += value;
    }

}







// var string = "111117+5";
// var first = string[0];
// var op = string[1];
// var last = string[2];

// // first = parseInt(first)
// // op = parseInt(op)
// // last = parseInt(last)

// var result = eval(first + op + last) 
// console.log(result)

















// // let button = document.querySelectorAll(".opeartor_button");

// // for (let i = 0; i <= button.length; i++) {
// //     button[i].addEventListener("click", click);
// // }

// // // button.addEventListener("click", function () {
// // //     alert("I am an alert box!");
// // //     console.log(button)
// // // });

// // // button.onclick=function() {
// // //     alert("hi")
// // // };


// // function click() {
// //     alert("I am an alert box!");
// //     console.log(button)
// //  }


// // // button.forEach(button => {
// // //     button.addEventListener('click', event => {
// // //          console.log( "something" );
// // //          alert('hi')
// // //     });

// // //  });