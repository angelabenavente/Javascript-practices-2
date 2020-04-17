'use strict';

//Function to show/hide password

const ageInputNode = document.querySelector('#birthDate');
const birthDate = ageInputNode.value;
const calculateAgeButtonNode = document.querySelector('#calculateAgeBtn');
const formContainer = document.querySelector('.calculator');

//Get current date
const today = new Date();
const dd = today.getDate();
const mm =today.getMonth()+1;
const yyyy = today.getFullYear();


//Get birthday date
document.getElementById("birthDate").addEventListener("change", function() {
  const birth = new Date(ageInputNode.value);
  const timeLived= today.getTime()-birth.getTime();

  const seconsLived = Math.round(timeLived/1000);
  const minutesLived = Math.round(timeLived/(1000*60));
  const hoursLived = Math.round(timeLived/(1000*60*60));
  const daysLived = Math.round(timeLived/(1000*60*60*24));

  const timeLivedNode = document.querySelector('.timeLived');
  timeLivedNode.innerHTML = `I am ${seconsLived} seconds, ${minutesLived} minutes, ${hoursLived} hours and ${daysLived} old.`;
  

});
