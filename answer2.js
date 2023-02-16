function longest(sentence) {
  let array = sentence.split(" ");
  let longestWord = array[0];

  for (let word in array) {
    if (array[word].length > longestWord.length) longestWord = array[word];
  }
  
  return longestWord;
}

console.log(longest("Saya sangat senang mengerjakan soal algoritma"));
