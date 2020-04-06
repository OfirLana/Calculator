const calc_output = document.querySelector(".main_output");
const sum_output = document.querySelector(".sub_output");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".dlt");

buttons.forEach((btn) => {
  btn.addEventListener("click", output);
});

let first = "";
let second = "";
let op = "";
let length = "";

let result = " ";
function output(event) {
  let value = event.target.textContent;
  first += value;
  second = calc_output.textContent;

  switch (value) {
    case "C":
      calc_output.textContent = "";
      calc_output.style = "";
      first = "";
      sum_output.textContent = "";
      second = "";
      length = "";
      sum_output.style.background = "";
      break;
    case "del":
      calc_output.textContent = calc_output.textContent.slice(0, -1);
      break;
    case "+":
    case "-":
    case "/":
    case "*":
    case "%":
      op = value;
      first = first.slice(0, -1);
      length = first;
      calc_output.textContent += value;
      break;
    case "=":
      length = parseInt(length);
      second = parseInt(second.split(op)[1]);
      result = eval(calc_output.textContent);
      

      console.log(result, `after:result`);
       sum_output.textContent = result;
      sum_output.style.background = "#FF00AA";
      calc_output.style.color = "blue";
      break;
      case "+/-":
          result = -result;
            sum_output.textContent = result
          break;
          default:
              calc_output.textContent += value;
            }
        }
        //=        
        // calc_output.style.border = "thick solid #0000FF";
        //   sum_output.textContent = result