//Make Dice animate on click for 3 seconds
function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach(die => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });
  }
  
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.getElementById("roll-button").addEventListener("click", rollDice);
  
//Give out random number from dice

//Based on random number, the card result will pop out

//Make certain tiles pop up on click

function popupKet() {
  document.getElementById("ket-pop").style.zIndex = "6";
  document.getElementById("bg-blur").style.zIndex = "5";
}

function popdownKet() {
  document.getElementById("ket-pop").style.zIndex = "-10";
  document.getElementById("bg-blur").style.zIndex = "-10";
}

//Make the "?" "!" popup a carousel for explanation