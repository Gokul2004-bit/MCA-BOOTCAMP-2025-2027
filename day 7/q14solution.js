let text = prompt("Enter the text below:");

let letters = 0;
let digits = 0;
let spaces = 0;
let others = 0;

for (let i = 0; i < text.length; i++) {
  let char = text[i];

  if (/[a-zA-Z]/.test(char)) {
    letters++;
  } else if (/[0-9]/.test(char)) {
    digits++;
  } else if (char === " ") {
    spaces++;
  } else {
    others++;
  }
}

console.log(`Letters : ${letters}`);
console.log(`Digits : ${digits}`);
console.log(`Space Chars : ${spaces}`);
console.log(`Others : ${others}`);
