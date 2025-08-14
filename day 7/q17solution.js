let temp = parseFloat(prompt("Enter the water temperature:"));

let status;

if (temp < 0) {
  status = "ICE";
} else if (temp <= 100) {
  status = "WATER";
} else {
  status = "STEAM";
}

console.log(`Water status is ${status} for the Temperature ${temp.toFixed(2)}`);