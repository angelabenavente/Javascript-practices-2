'use strict';

// Functions:
// (Done) ---- number of characters
// (Done) ---- number of characters without spaces
// number of characters without articles and prepositions(for translation jobs)
// (Done) ---- number of points, special characters, etc
// (Done) ---- number of vocals
// (Doing) ---- number of words
// words frequency
// number of differents word (frequency)
// number of repeated words (mark them, optional)
// number of keywords
// number of stopword 
// number of sentences
// avergage of words by sentence
// (Doing) ---- numbers of paragraphs
// average of sentences by paragraph

// Morphosyntactic marker
// Conjugate verbs

// Reading time
// Easy reading

// Text value


const textAnalyzedCharactersNode = document.querySelector('.textAnalyzeCharacters');
const textarea = document.querySelector('.textarea');

const startSpace = /^ /;
const endSpace = / $/;
const lineBreaksAndTabs = /\s/g;
const someSpaces = /[ ]+/g;

textarea.addEventListener('keyup', function(event) {
  let text = event.target.value;

  textAnalyzedCharactersNode.innerHTML = `The text has ${calculateCharacters(text)} charaters, ${calculateCharactersWithoutSpaces(text)} without spaces and ${calculateVocals(text)} vocals and ${calculateSpecialCharacters(text)} special characters and ${calculateWords(text)} words and ${calculateParagraphs(text)} paragraphs.`;

});

//Characters number
function calculateCharacters(text) {
  const characters = text.length;

  return characters;
}

//Characters without spaces number
function calculateCharactersWithoutSpaces(text) {
  text = text.replace (lineBreaksAndTabs,"");
  text = text.replace (someSpaces,"");
  text = text.trim();
  const charactersWithoutSpaces = text.length;

  return charactersWithoutSpaces;
}

//Vocals number
function calculateVocals(text) {
  const vocalsRegExp = new RegExp(/[aeiouáéíóúàèìòùäëïöü]/gi);
  const vocals = (text.match(vocalsRegExp) || []).length;

  return vocals;
}

//Special characters number
function calculateSpecialCharacters(text) {
  const specialCharRegExp = new RegExp(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/gi);
  const specialCharacters = (text.match(specialCharRegExp) || []).length;

  return specialCharacters;
}

//Words number
function calculateWords(text) {
  let wordsNumber = 0;
  if(text !== " " && text) {
    text = text.trim();
    text = text.replace (lineBreaksAndTabs," ");
    text = text.replace (someSpaces," ");
    text = text.replace (startSpace,"");
    text = text.replace (endSpace,"");
    const singleWords = text.split (" ");
    wordsNumber = singleWords.length;
  }

  return wordsNumber;
}

//Paragraphs number
function calculateParagraphs(text) {
  const lineBreakRegExp = new RegExp(/[a-z0-9¿!\-\*](\r\n|\n|\r)+/gi);
  // const lineBreakRegExp = new RegExp(/[\n+/g,'\n/']/gi);
  let paragraphsNumber = 0;

  if(text != " ") {
    paragraphsNumber = (text.match(lineBreakRegExp) || []).length;
  }

  return paragraphsNumber;
}