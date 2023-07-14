//Make Dice animate on click for 3 seconds
function rollDice() {
    let audio = new Audio('Dice Roll.mp3');
    audio.play();

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

  let i = 5;
  function getRNGChance() {
    i++;
    let audio = new Audio('Card Pickup.mp3');
    audio.play();

    let RNG = Math.floor(Math.random() * 12);

    if (RNG == 0) {
      document.getElementById("spi-chance").style.zIndex = i;
    }
    else if (RNG == 1) {
      document.getElementById("vul-chance").style.zIndex = i;
    }
    else if (RNG == 2) {
      document.getElementById("cut-chance").style.zIndex = i;
    }
    else if (RNG == 3) {
      document.getElementById("bus-chance").style.zIndex = i;
    }
    else if (RNG == 4) {
      document.getElementById("prov-chance").style.zIndex = i;
    }
    else if (RNG == 5) {
      document.getElementById("rel-chance").style.zIndex = i;
    }
    else if (RNG == 6) {
      document.getElementById("war-chance").style.zIndex = i;
    }
    else if (RNG == 7) {
      document.getElementById("del-chance").style.zIndex = i;
    }
    else if (RNG == 8) {
      document.getElementById("hap-chance").style.zIndex = i;
    }
    else if (RNG == 9) {
      document.getElementById("n-chance").style.zIndex = i;
    }
    else if (RNG == 10) {
      document.getElementById("wat-chance").style.zIndex = i;
    }
    else if (RNG == 11) {
      document.getElementById("pir-chance").style.zIndex = i;
    }
  }

  let j = 5;
  function getRNGEvent() {
    j++;
    let audio = new Audio('Card Pickup.mp3');
    audio.play();

    let RNG = Math.floor(Math.random() * 12);

    if (RNG == 0) {
      document.getElementById("spi-event").style.zIndex = j;
    }
    else if (RNG == 1) {
      document.getElementById("vul-event").style.zIndex = j;
    }
    else if (RNG == 2) {
      document.getElementById("cut-event").style.zIndex = j;
    }
    else if (RNG == 3) {
      document.getElementById("bus-event").style.zIndex = j;
    }
    else if (RNG == 4) {
      document.getElementById("prov-event").style.zIndex = j;
    }
    else if (RNG == 5) {
      document.getElementById("rel-event").style.zIndex = j;
    }
    else if (RNG == 6) {
      document.getElementById("war-event").style.zIndex = j;
    }
    else if (RNG == 7) {
      document.getElementById("del-event").style.zIndex = j;
    }
    else if (RNG == 8) {
      document.getElementById("hap-event").style.zIndex = j;
    }
    else if (RNG == 9) {
      document.getElementById("n-event").style.zIndex = j;
    }
    else if (RNG == 10) {
      document.getElementById("wat-event").style.zIndex = j;
    }
    else if (RNG == 11) {
      document.getElementById("pir-event").style.zIndex = j;
    }
  }
  
  document.getElementById("roll-button").addEventListener("click", rollDice);
  
//Give out random number from dice

//Based on random number, the card result will pop out

//Make certain tiles pop up on click

  //Popup for Kettlemine
  function popupKet() {
    document.getElementById("ket-pop").style.zIndex = "6";
    document.getElementById("bg-blur-ket").style.zIndex = "5";
  }

  function popdownKet() {
    document.getElementById("ket-pop").style.zIndex = "-10";
    document.getElementById("bg-blur-ket").style.zIndex = "-10";
  }

  //Popup for Coyote Skull
  function popupCoy() {
    document.getElementById("coy-pop").style.zIndex = "6";
    document.getElementById("bg-blur-coy").style.zIndex = "5";
  }

  function popdownCoy() {
    document.getElementById("coy-pop").style.zIndex = "-10";
    document.getElementById("bg-blur-coy").style.zIndex = "-10";
  }

  //Popup for New Alice Springs
  function popupNas() {
    document.getElementById("nas-pop").style.zIndex = "6";
    document.getElementById("bg-blur-nas").style.zIndex = "5";
  }

  function popdownNas() {
    document.getElementById("nas-pop").style.zIndex = "-10";
    document.getElementById("bg-blur-nas").style.zIndex = "-10";
  }

  //Popup for Kettlemine Shafts Entrance
  function popupKSEnt() {
    document.getElementById("ksent-pop").style.zIndex = "6";
    document.getElementById("bg-blur-ksent").style.zIndex = "5";
  }

  function popdownKSEnt() {
    document.getElementById("ksent-pop").style.zIndex = "-10";
    document.getElementById("bg-blur-ksent").style.zIndex = "-10";
  }

  //Popup for Shimmering Lake
  function popupShim() {
    document.getElementById("shim-pop").style.zIndex = "6";
    document.getElementById("bg-blur-shim").style.zIndex = "5";
  }

  function popdownShim() {
    document.getElementById("shim-pop").style.zIndex = "-10";
    document.getElementById("bg-blur-shim").style.zIndex = "-10";
  }

  //Popup for Kettlemine Shafts Exit
  function popupKSExit() {
    document.getElementById("ksexit-pop").style.zIndex = "6";
    document.getElementById("bg-blur-ksexit").style.zIndex = "5";
  }

  function popdownKSExit() {
    document.getElementById("ksexit-pop").style.zIndex = "-10";
    document.getElementById("bg-blur-ksexit").style.zIndex = "-10";
  }

  //Popup for Glass Hills
  function popupGlass() {
    document.getElementById("glass-pop").style.zIndex = "6";
    document.getElementById("bg-blur-glass").style.zIndex = "5";
  }

  function popdownGlass() {
    document.getElementById("glass-pop").style.zIndex = "-10";
    document.getElementById("bg-blur-glass").style.zIndex = "-10";
  }

  //Popup for Cactus Coil
  function popupCac() {
    document.getElementById("cac-pop").style.zIndex = "6";
    document.getElementById("bg-blur-cac").style.zIndex = "5";
  }

  function popdownCac() {
    document.getElementById("cac-pop").style.zIndex = "-10";
    document.getElementById("bg-blur-cac").style.zIndex = "-10";
  }

  //Popup for Tunnel Entrance
  function popuptunEnt() {
    document.getElementById("tunent-pop").style.zIndex = "6";
    document.getElementById("bg-blur-tunent").style.zIndex = "5";
  }

  function popdowntunEnt() {
    document.getElementById("tunent-pop").style.zIndex = "-10";
    document.getElementById("bg-blur-tunent").style.zIndex = "-10";
  }

  //Popup for Tunnel Exit
  function popupTunExit() {
    document.getElementById("tunexit-pop").style.zIndex = "6";
    document.getElementById("bg-blur-tunexit").style.zIndex = "5";
  }

  function popdownTunExit() {
    document.getElementById("tunexit-pop").style.zIndex = "-10";
    document.getElementById("bg-blur-tunexit").style.zIndex = "-10";
  }

//Make the "?" "!" popup a carousel for explanation