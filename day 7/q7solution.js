let word = prompt("Enter a Five letter word:");

if (word.length !== 5) {
  console.log("Please enter exactly five letters.");
} else {
  let encodedWord = "";

  for (let i = 0; i < word.length; i++) {
    let asciiValue = word.charCodeAt(i);
    let newChar = String.fromCharCode(asciiValue - 1);
    encodedWord += newChar;
  }

  console.log(`Encoded Word: ${encodedWord}`);
}
