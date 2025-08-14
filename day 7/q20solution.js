let n = parseInt(prompt("How many Fibonacci terms?"));

let f1 = 1,
  f2 = 1;

let sequence = "";

if (n >= 1) sequence += f1 + " ";
if (n >= 2) sequence += f2 + " ";

for (let i = 3; i <= n; i++) {
  let f = f1 + f2;
  sequence += f + " ";
  f1 = f2;
  f2 = f;
}

console.log(sequence.trim());
