const startBtn = document.getElementById("start")
const gameScreen = document.querySelector('.game'); 

startBtn.addEventListener('click', showScreen);

function showScreen(){
    if(gameScreen.style.display == "none"){
        startBtn.innerText = "";
        gameScreen.style.display = "block";
    }else{
        gameScreen.style.display = "none";
    }
}