// word1 is attempt word
// word2 is secret word

function checkWord(word1: string, word2: string): string {
  let result = '';
  for (let i = 0; i < word1.length; i += 1) {
    const letter = word1[i];
    const check = word2[i];
    if (word2.includes(letter)) {
      if (letter === check) result += 'c';
      else result += 'p';
    } else result += 'a';
  }
  return result;
}

export { checkWord };
