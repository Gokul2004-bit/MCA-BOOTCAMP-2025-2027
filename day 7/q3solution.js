let P = parseFloat(prompt("Enter Principal Value:"));
let R = parseFloat(prompt("Enter Rate of Interest:"));
let N = parseFloat(prompt("Enter No. of Years:"));
let i = R / 100;
let F = P * Math.pow(1 + i, N);
console.log(`Compound Interest ${F.toFixed(2)}`);
