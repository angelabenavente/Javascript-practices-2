'use strict';

// Functions:
// (Done) ---- number of characters
// (Done) ---- number of characters without spaces
// number of characters without articles and prepositions(for translation jobs)
// (Done) ---- number of points, special characters, etc
// (Done) ---- number of vocals
// (Done) ---- number of words
// words frequency
// number of differents word (frequency)
// number of repeated words (mark them, optional)
// number of keywords
// number of stopword 
// number of sentences
// avergage of words by sentence
// numbers of paragraphs
// average of sentences by paragraph

// Morphosyntactic marker
// Conjugate verbs

// Reading time
// Easy reading

// Text value

const vocalsRegExp = new RegExp(/[aeiouáéíóúàèìòùäëïöü]/gi);
const specialCharRegExp = new RegExp(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/gi);
const textAnalyzedCharactersNode = document.querySelector('.textAnalyzeCharacters');
const textarea = document.querySelector('.textarea');

const startSpace = /^ /;
const endSpace = / $/;
const saltoLinea = /\s/g;;
const someSpaces = /[ ]+/g;

textarea.addEventListener('keyup', function(event) {
  let text = event.target.value;
  const characters = text.length;
  const vocals = (text.match(vocalsRegExp) || []).length;
  const specialChars = (text.match(specialCharRegExp) || []).length;
  let wordsNumber = 0;
  let charactersWithoutSpaces = 0;

  if (text == " ") {
    wordsNumber = 0;
  } else {

    text = text.replace (saltoLinea,"");
    text = text.replace (someSpaces," ");
    text = text.replace (startSpace,"");
    text = text.replace (endSpace,"");
    text = text.replace (saltoLinea,"");
    const singleWords = text.split (" ");
    wordsNumber = singleWords.length;
    charactersWithoutSpaces = singleWords.join('').length;
  }

  textAnalyzedCharactersNode.innerHTML = `The text has ${characters} charaters, ${charactersWithoutSpaces} without spaces, ${vocals} vocals, ${specialChars} special characters and ${wordsNumber} words.`;

});