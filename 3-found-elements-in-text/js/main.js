'use strict';

// Functions:
// (Done) ---- number of characters
// (Done) ---- number of characters without spaces
// (Done) ---- number of points, special characters, etc
// (Done) ---- number of vocals
// (Done) ---- number of words
// (Done) ---- numbers of paragraphs
// (Done) ---- words frequency
// number of repeated words (mark them, optional)
// number of differents word (frequency)
// number of characters without articles and prepositions(for translation jobs)
// number of keywords
// number of stopword 
// number of sentences
// avergage of words by sentence
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

  textAnalyzedCharactersNode.innerHTML = `The text has ${calculateCharacters(text)} charaters, ${calculateCharactersWithoutSpaces(text)} without spaces and ${calculateVocals(text)} vocals and ${calculateSpecialCharacters(text)} special characters and ${calculateWords(text).length} words and ${calculateParagraphs(text)} paragraphs, there are ${countRepeatedWords(calculateWords(text)).length} words repeated: ${countRepeatedWords(calculateWords(text))} `;

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
  text = text.trim();
  let singleWords
  // let wordsNumber = 0;
  if(text) {
    text = text.replace (lineBreaksAndTabs," ");
    text = text.replace (someSpaces," ");
    text = text.replace (startSpace,"");
    text = text.replace (endSpace,"");
    singleWords = text.split (" ");
    // wordsNumber = singleWords.length;
  }

  return singleWords;
}

//Paragraphs number
function calculateParagraphs(text) {
  text = text.trim();
  const lineBreakRegExp = new RegExp(/[a-z0-9¿!\-\*](\r\n|\n|\r)+/gi);
  // const lineBreakRegExp = new RegExp(/[\n+/g,'\n/']/gi);
  let paragraphsNumber = 0;

  if(text) {
    paragraphsNumber = (text.match(lineBreakRegExp) || []).length+1;
  }

  return paragraphsNumber;
}

//Show repeated words
function countRepeatedWords(singleWords){
  let repeatedWords = [];

  singleWords.forEach((value,index)=>{
    singleWords.splice(index,1); 
    if(singleWords.indexOf(value)!=-1 && repeatedWords.indexOf(value)==-1) {
      repeatedWords.push(value);
    }     
  });
  
return repeatedWords;
}
  
//Count repeated words
function countRepeatedWords(singleWords){

}
