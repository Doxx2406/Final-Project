function chooseDice(){
 var numDice = prompt("how many dice do you want to roll?");
 var input = numDice.value;
 document.getElementById('output').innerHTML= "Current Number of Dice: " + input;
}
function rollDice(){
    
    document.getElementById('output').innerHTML ="";
    for (var i = 0; i < 6; i++) {
      var roll = Math.floor(Math.random() * 6) + 1;
      document.getElementById('output').innerHTML += roll + " ";
    
    }
    document.getElementById('score').innerHTML =  total; 
   
    document.getElementById('output').innerHTML = firstDie + " "+ secondDie;
   
}
