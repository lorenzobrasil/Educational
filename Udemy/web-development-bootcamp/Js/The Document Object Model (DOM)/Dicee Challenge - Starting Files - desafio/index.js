function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }



var randomNumber1 = getRandomArbitrary(0, 6);

var randomNumber2 = getRandomArbitrary(0, 6);

document.querySelector(".player-1 img").setAttribute("src", `./images/dice${randomNumber1}.png`);

document.querySelector(".player-2 img").setAttribute("src", `./images/dice${randomNumber2}.png`);


if ( randomNumber1 > randomNumber2 ) {
    // Player 1 vence
    document.querySelector("h1.results").textContent = "Player 1 wins!"

} else if ( randomNumber1 < randomNumber2 ) {
    // Player 2 vence
    document.querySelector("h1.results").textContent = "Player 2 wins!"

} else if ( randomNumber1 === randomNumber2 ) {
    // Empate
    document.querySelector("h1.results").textContent = "Draw"
}