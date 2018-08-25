
window.onload = function ()  {

    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

var letterDiv = document.getElementById("letters-list");



for (var i = 0; i < letters.length; i++) {




}

var names = ['david', 'kevin', 'michael', 'thomas', 'zach', 'annie', 'ashley', 'bill', 'edgar', 'corey', 'drew', 'ed', 'haleigh', 'irvin', 'nathan',  'patrick', 'steven', 'shaun', 'susie'];
  
  
var blanksAndSuccess = []; //Correct guesses and blanks will be in this array
var blanks = 0; //holds blanks spaces for the word chosen
var currentWord = "";
var currentLetters = [];
// Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;
  




  
  var wins ;
  var losses ;
  var guess ;
  
  function startGame() {
    numGuesses = 9;
    blanksAndSuccess = [];
    guessedLetter = [];
    incorrectGuess = [];
    
    //Selects a NAME at random
    currentWord = names[Math.floor(Math.random() * names.length)];
    
    
    console.log("currentWord");
    
    // create alphabet ul
function buttons() {
    //gets the alphabet button id from html
    var myButtons = document.getElementById('alphabet-btns');
    document.getElementById('alphabet-btns').innerHTML = '';
    //loops through the alphabet
    for (var i = 0; i < alphabet.length; i++) {
        //creates li for list
        let listItem = document.createElement('li');
        //this creates the button and adds the bootstrap button look to it
        listItem = document.createElement('BUTTON');
        listItem.classList.add('btn-primary');
        //gives each list item the id letter
        listItem.id = 'letters';
        listItem.innerHTML = alphabet[i];
        //appends listIem to my buttons
        myButtons.appendChild(listItem);
        listItem.dataset.alphabet = alphabet[i];
  
  
}

}
