'use strict';

// Functions:
// (Done) ---- number of characters
// (Done) ---- number of characters without spaces
// (Done) ---- number of points, special characters, etc
// (Done) ---- number of vocals
// (Done) ---- number of words
// (Done) ---- numbers of paragraphs
// (Done) ---- show words repeated
// (Doing) ---- number of repeated words (mark them, optional)
// number of characters without articles and prepositions(for translation jobs)
// number of keywords
// number of stopword 
// (Done) ---- number of sentences
// avergage of words by sentence
// average of sentences by paragraph

// Morphosyntactic marker
// Conjugate verbs

// (Done) ---- Reading time
// Easy reading
//Brysbaert ofrece una tabla con con resultados de velocidad de lectura en español. En ella encuentra seis estudios que miden la lectura silenciosa y que indican una velocidad de 278 PPM y otros seis estudios que miden la lectura en voz alta, con una velocidad media de 191 PPM.

// Calcula tu velocidad lectora y donde está en la media

// Text value


const textAnalyzedCharactersNode = document.querySelector('.textAnalyzeCharacters');
const textarea = document.querySelector('.textarea');

const startSpace = /^ /;
const endSpace = / $/;
const lineBreaksAndTabs = /\s/g;
const someSpaces = /[ ]+/g;

textarea.addEventListener('keyup', function(event) {
  let text = event.target.value;
  calculateSentencesInParagraphs(text)

  textAnalyzedCharactersNode.innerHTML = `The text has ${calculateCharacters(text)} charaters, ${calculateCharactersWithoutSpaces(text)} without spaces and ${calculateVocals(text)} vocals and ${calculateSpecialCharacters(text)} special characters and ${calculateWords(text).length} words and ${calculateParagraphs(text)} paragraphs, there are ${countRepeatedWords(calculateWords(text)).length} words repeated: ${countRepeatedWords(calculateWords(text))}. Number of sentences: ${countSentences(text)}. The read time is ${countReadTime(calculateWords(text).length)} `;

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

//separate sentences 
function separateSentences(text) {
  text = text.trim();
  let sentences = [];
  const lineBreakRegExp = new RegExp(/[a-z0-9¿!\-\*](\r\n|\n|\r)+/gi);
  text = text.split(lineBreakRegExp);

  for (let i = 0; i<=text.length; i++) {
    if (i % 2 == 0) {
      sentences.push(text[i]);
    }
  }
  return sentences;
}

//words number in sentences 
function calculateWordsInSentences(text) {
 
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
  
//Count sentences
function countSentences(text){
  const sentencesRegExp = new RegExp(/[\w|\)][.,?!](\s|$\*;:{}=\-_`~()”“"…)/g);
  let sentences = 0;
  if(text) {
    sentences = (text.match(sentencesRegExp)|| []).length;
  }
  return sentences;
}

//Time of reading
function countReadTime(wordsNumber){
  let readTime = 0;
  if (wordsNumber >= 278) {
    readTime = wordsNumber / 278;
  } else {
    readTime = "less than a minute";
  }
  return `${round(readTime, 0)} minutes y ${round(readTime, 1) % 60} seconds.`;
}

//Round time of reading
function round(num, decimals = 1) {
  var sign = (num >= 0 ? 1 : -1);
  num = num * sign;
  if (decimals === 0) 
      return sign * Math.round(num);

  num = num.toString().split('e');
  num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimals) : decimals)));

  num = num.toString().split('e');
  return (sign * (num[0] + 'e' + (num[1] ? (+num[1] - decimals) : -decimals))) * 60;
}

