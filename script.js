const startBtn = document.getElementById("start")
const gameScreen = document.querySelector('.game'); 
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


startBtn.addEventListener('click', showScreen);
startBtn.addEventListener('click', start);

function showScreen(){
    if(gameScreen.style.display == "none"){
        startBtn.innerText = "";
        gameScreen.style.display = "block";
    }else{
        gameScreen.style.display = "none";
    }
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max)) + 1;  
}

function getWinner(num1, num2){
    const res = 0; 
    // res = 1; player wins, default ai wins
    if(num1 == num2){
        console.log("tie");
    }else if(num1 == 1){
        // if player1 chooses rock
        if(num2 == 2){
        // ai paper
        res = 1; 
        }
    }else if(num1 == 2){
        // if player2 chooses paper
        if(num2 == 1){
            // ai rock
            res = 1; 
            }
    }else if(num1 == 3){
        // if player3 chooses scissors
            if(num2 == 2){
            // ai paper
            res = 1; 
            }
    }
    return res; 
}

function start(){
    const aiChoice = getRandomNumber(1,3);
}

/** 
 * thinking process:
 * 
 * rock = 1, paper = 2, scissors = 3
 * user clicks on either one
 * random gen number either 1,2,or 3 
 * 1 beats 3, 2 beats 1, 3 beats 2
 * output of who wins
*/