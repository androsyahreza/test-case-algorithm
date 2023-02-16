function countWords(query, input) {
  const obj = {};

  for (let word of query) {
    obj[word] = 0;
  }

  for (let word of input) {
    if (word in obj) obj[word]++;
  }

  return Object.values(obj);
}

console.log(countWords(["bbb", "ac", "dz"], ["xc", "dz", "bbb", "dz"]));
