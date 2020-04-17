'use strict';

const textarea = document.querySelector('.textarea');

document.querySelector('.textarea').addEventListener("keyup", function() {
  let text = textarea.value;
  let characters = text.length;

  const textAnalyzedCharactersNode = document.querySelector('.textAnalyzeCharacters');
  textAnalyzedCharactersNode.innerHTML = `The text has ${characters} charaters`;
});

document.querySelector('.textarea').addEventListener("keyup", function() {
  let text = textarea.value;
  let vocals = text.match(/[aeiouáéíóúàèìòùäëïöü]/gi).length ? text.match(/[aeiouáéíóúàèìòùäëïöü]/gi).length : 0;

  const textAnalyzedVocalsNode = document.querySelector('.textAnalyzeVocals');
  textAnalyzedVocalsNode.innerHTML = `The text has ${vocals} vocals`;
});
