// List of all cards
var allCards = ['fa-diamond','fa-diamond',
              'fa-paper-plane-o','fa-paper-plane-o',
              'fa-anchor','fa-anchor',
              'fa-bolt','fa-bolt',
              'fa-cube','fa-cube',
              'fa-leaf','fa-leaf',
              'fa-bicycle','fa-bicycle',
              'fa-bomb','fa-bomb'
              ];

// Moves variables
var moveCounter = document.querySelector('.moves');
var moves = 0;
  
// Keep track of cards flipped
var flippedCards = [];

//Load new game and then shuffle
newGame();

 /*   - shuffle the list of cards using the provided "shuffle" method below*/
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 *   - loop through each card and create its HTML Maybe re do again?? Look it up later
 */
function makeCard(card) {
  return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
}
 
function newGame(){
  var deck = document.querySelector('.deck');
  var cardGrid = shuffle(allCards).map(function(card) {
    return makeCard(card);
  });
  deck.innerHTML = cardGrid.join('');
}

/*
 * set up the event listener for a card. If a card is clicked:
 */
var cardList = document.querySelectorAll('.card');

for(let card of cardList) {
  card.addEventListener('click', function(flipCard){
    //Disable clicking on the same card
    if (!card.classList.contains('open') &&     !card.classList.contains('show') && !card.classList.contains('match')){
      
  //Add the card to a *list* of "open" cards
    flippedCards.push(card);

  //Prevent from flipping more than two cards
      if (flippedCards.length > 2){
        //hide
      } else {
        //Show cards
        card.classList.add('open','show');
        //Check if cards match
        if (flippedCards[0].dataset.card ==   flippedCards[1].dataset.card){
            cardMatch();
        } else {
            notMatching();
        }
        }
      }
    });
  
// cardMatch function
function cardMatch(){
  flippedCards[0].classList.add('match');
  flippedCards[0].classList.add('open');
  flippedCards[0].classList.add('show');

  flippedCards[1].classList.add('match');
  flippedCards[1].classList.add('open');
  flippedCards[1].classList.add('show');
  
  //empty flippedCards array
  flippedCards = [];
}

// Not matching function
function notMatching(){

  //Flip over after 1 sec
  setTimeout(function(){
    for (let card of flippedCards){
      card.classList.remove('open','show');
    }
    moveCounter();
    flippedCards = []; //Empty flippedCards array
   }, 1000);
   const time = document.getElementById('time');
function Timer () {
    var i = 1;
    var timer = setInterval(function() {
        console.log(i);
        i++;
        if(i > 0) {
          time.innerHTML = i;
           /*clearInterval(timer);*/
        }
    }, 1000);
}

var timer = new Timer();
}

// Move Counter function
function moveCounter(){
  moves++;
  moveCounter.innerHTML = moves;
}

}