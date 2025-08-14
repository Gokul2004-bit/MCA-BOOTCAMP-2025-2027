let n = parseInt(prompt("Enter the N value:"));

console.log("N   |   Factorial");
console.log("--------------------");

let fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i;
  console.log(`${i}   |   ${fact}`);
}
