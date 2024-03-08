 // view
 const app = document.getElementById("app");
 const bar = document.getElementById("bar");

 updateView();
 updateBar();

 function updateBar() {
  if (carCoolness > 0) {
    bar.innerHTML = `
      <div id="gameStatus">
        Coolness: 
        <span id="coolMeter">0</span>
      </div>

      <div id="coolnessBarContainer">
          <div id="coolnessBar"></div>
      </div>
    `;
  } else {
    bar.innerHTML = "";
  }
}

 function updateView() {
  let showStuff = ""; 
  let showEncounter = "";
  let showGameOver = "";

  if (pickUp) {
    showStuff = /*HTML*/ `
    <div id="objects">
    <div>${encounterDialogue}</div>
    <img class="objimg" src="${imagePath}">
    <button class="btn" onclick='dialogueOption(1)'>${dialogue4}</button>
    <button class="btn" onclick='dialogueOption(2)'>${dialogue5}</button>
    </div>
    `
  }

  if (isEncounter || showGasStation) {
    showEncounter = /*HTML*/ `
    <div id='dialogueOptions'>
    <div>${encounterDialogue} </div>
    <button id='dialogue1' class="btn" onclick='dialogueOption(1)'>${dialogue1}</button>
    <button id='dialogue2' class="btn" onclick='dialogueOption(2)'>${dialogue2}</button>
    <button id='dialogue3' class="btn" onclick='dialogueOption(3)'>${dialogue3}</button>
    </div>
    `
  }

  if (isGameOver) {
    showGameOver = `
      <div class="overlay">
        <div class="reset">
          <p class="game-status-text">Game Over!</p>
          <button onclick="restart()" class="play-again-button">Play again</button>
        </div>
      </div>
    `;
  }

  app.innerHTML = `
    <div id="car">
        <img class="carimg" src="car.png">
        <div id="text">
          ${showStuff}
          ${showEncounter}
          <div id="coolness">Coolness: ${carCoolness}</div>
          <div id="fuel">Fuel = ${fuelAmount}</div>
          <button onclick='runGasStation()' class="btn">Gas Station</button>
          <button onclick='drive()' class="btn">Start Driving</button>
        </div>
        ${showGameOver}
    </div>
  `;
}
      