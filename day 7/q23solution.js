let n = parseInt(prompt("Enter Number of Lines:"));

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  let num = i;
  for (let j = 1; j <= i; j++) {
    row += num;
    num++;
  }

  num -= 2; 
  for (let j = 1; j <= i - 1; j++) {
    row += num;
    num--;
  }

  console.log(row);
}
