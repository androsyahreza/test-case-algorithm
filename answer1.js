function reverseString(string) {
  let word = "";
  let number = "";

  string.split("").forEach((char) => {
    isNaN(char) ? (word += char) : (number += char);
  });
  
  return word.split("").reverse().join("") + number;
}

console.log(reverseString("NEGIE1"));
