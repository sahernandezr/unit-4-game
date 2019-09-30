$(document).ready(function() {

//Define a random target score between 19 and 120
var target = parseInt(Math.floor((Math.random()*102)+19));

//Define global variables
var userScore = "";
var currentScore = [];
var wins = 0;
var losses = 0;

//Define the values of each gem between 1 and 12
var gem1 = Math.floor((Math.random()*12)+1);
console.log("gem 1: " + gem1);
var gem2 = Math.floor((Math.random()*12)+1);
console.log("gem 2: " + gem2);
var gem3 = Math.floor((Math.random()*12)+1);
console.log("gem 3: " + gem3);
var gem4 = Math.floor((Math.random()*12)+1);
console.log("gem 4: " + gem4);


//Show text
$("#target-text").html(target);
$("#wins-text").html(wins);
$("#losses-text").html(losses);

//Assign random values to gems
$("#button-1").val(gem1);
$("#button-2").val(gem2);
$("#button-3").val(gem3);
$("#button-4").val(gem4);


$("#button-1").on("click", function (){
        currentScore.push(gem1);
        userScore = currentScore.reduce(myFunc);

        function myFunc(total,num){
            return total+num;
        }
        console.log(userScore);
        $("#user-score").html(userScore);
        if (userScore===target) {
            winner();
        }
        else if (userScore>target) {
            loser();
        }
    
})

$("#button-2").on("click", function (){
    currentScore.push(gem2);
    userScore = currentScore.reduce(myFunc);

    function myFunc(total,num){
        return total+num;
    }
    console.log(userScore);
    $("#user-score").html(userScore);
    if (userScore===target) {
        winner();
    }
    else if (userScore>target) {
        loser();
    }

})

$("#button-3").on("click", function (){
    currentScore.push(gem3);
    userScore = currentScore.reduce(myFunc);

    function myFunc(total,num){
        return total+num;
    }
    console.log(userScore);
    $("#user-score").html(userScore);
    if (userScore===target) {
        winner();
    }
    else if (userScore>target) {
        loser();
    }

})

$("#button-4").on("click", function (){
    currentScore.push(gem4);
    userScore = currentScore.reduce(myFunc);

    function myFunc(total,num){
        return total+num;
    }
    console.log(userScore);
    $("#user-score").html(userScore);
    if (userScore===target) {
        winner();
    }
    else if (userScore>target) {
        loser();
    }

})

function winner (){
    alert("You won!");
    wins++;
    $(".wins-text").html(wins);
    reset();
}

function loser (){
    alert("You lost!");
    losses++;
    $(".losses-text").html(losses);
    reset();
}

function reset() {
    currentScore=[];
    target = parseInt(Math.floor((Math.random()*102)+19));
    $("#target-text").html(target);
    gem1 = Math.floor((Math.random()*12)+1);
    console.log("gem 1: " + gem1);
    gem2 = Math.floor((Math.random()*12)+1);
    console.log("gem 2: " + gem2);
    gem3 = Math.floor((Math.random()*12)+1);
    console.log("gem 3: " + gem3);
    gem4 = Math.floor((Math.random()*12)+1);
    console.log("gem 4: " + gem4);
    userScore=0;
    $("#user-score").html(userScore);
}

})