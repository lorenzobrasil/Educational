// Receives input of two given names and returns the probability
// (pseudo-random number) of matching

var person1 = prompt("Name of person 1");
var person2 = prompt("Name of person 2");
var lovePercentage = Math.floor(Math.random() * 100) + 1;

if ( lovePercentage <= 40 ) {
    alert(`${ person1 } has ${ lovePercentage }% chance of matching ${ person2 }. You don't seem to love each other`);
}
else if ( ( lovePercentage > 40 ) && ( lovePercentage <= 70 ) ) {
    alert(`${person1} has ${ lovePercentage }% chance of matching ${person2}. You both look cool together`);
} else if ( lovePercentage > 70 ) {
    alert(`${person1} has ${ lovePercentage }% chance of matching ${person2}. You are soul mates.`);
}