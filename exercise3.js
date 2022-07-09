
const random = Math.floor(Math.random() * (10-1) + 1)
const prompt = require("prompt-sync")({ sigint: true })
const alert = require('alert');
const input1 = prompt("Enter your random guess:");
if(input1 == random){
    alert('Your guess is right');
}
else{
    alert("the number you have guessed is wrong");
    var input2 = prompt("Do you want to guess one other time:");
}
if(input2 == "yes"){
    if(input1 == random){
        alert("Your guess is right"); 
    }
    else{
        alert("the number you have guessed second time is wrong");
        alert("better luck next time");
        console.log("Random number is" + random);
    }
}
else{
    alert("better luck next time");
    console.log("Random number is" + random);
}



