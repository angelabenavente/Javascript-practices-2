'use strict';

// Functions:
// (Done) ---- number of characters
// number of characters without spaces
// (Done) ---- number of vocals
// (Done) ---- number of words
// words frequency
// number of differents word (frequency)
// number of repeated words (mark them, optional)
// number of sentences

const vocalsRegExp = new RegExp(/[aeiouáéíóúàèìòùäëïöü]/gi);
const textAnalyzedCharactersNode = document.querySelector('.textAnalyzeCharacters');
const textarea = document.querySelector('.textarea');

const startSpace = /^ /;
const endSpace = / $/;
const someSpaces = /[ ]+/g;

textarea.addEventListener('keyup', function(event) {
  let text = event.target.value;
  const characters = text.length;
  const vocals = (text.match(vocalsRegExp) || []).length;
  let wordsNumber = 0;

  if (text == " ") {
    wordsNumber = 0;
  } else {
    text = text.replace (someSpaces," ");
    text = text.replace (startSpace,"");
    text = text.replace (endSpace,"");
    const singleWords = text.split (" ");
    wordsNumber = singleWords.length;
  }

  textAnalyzedCharactersNode.innerHTML = `The text has ${characters} charaters, ${vocals} vocals and ${wordsNumber} words.`;

});