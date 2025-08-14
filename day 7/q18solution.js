let text = prompt("Enter the string below:");

let reverseText = "";

for (let i = text.length - 1, j = 0; i >= 0; i--, j++) {
  reverseText += text[i];
}

console.log(`Reversed Text: ${reverseText}`);
