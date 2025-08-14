let input = prompt(
  "Enter 5 numbers (each between 1 and 30) separated by spaces:"
);

let numbers = input.split(" ").map(Number);

for (let i = 0; i < numbers.length; i++) {
  let stars = "";
  for (let j = 0; j < numbers[i]; j++) {
    stars += "*";
  }
  console.log(`${numbers[i]} ${stars}`);
}
