var lightBtn = document.querySelector('#light')
var darkBtn = document.querySelector('#dark')
var body = document.querySelector('#background')

var myheading  = document.querySelector(".myheading")

lightBtn.addEventListener('click', (e) =>{
       body.style.background = 'white'
       body.style.color = "black"
})


darkBtn.addEventListener('click', (e) =>{
    body.style.background = 'black'
    body.style.color = "white"
})




//creating bubbles


var canvas = document.querySelector("#canvas");
var finalscreen = document.querySelector('#final')
var points = document.querySelector("#points")






var colors = ['red', 'blue', 'pink', 'orange', 'yellow', 'purple', 'green']



function makeBubbles(){
   
    for(var i=0; i<50; i++){
        let randomNum = Math.floor(Math.random()*colors.length);
        
        canvas.innerHTML += `<div class="bubble" style="background-color:${colors[randomNum]}"></div>`
    }
}

makeBubbles()

let guess = document.querySelector('#guess')

function guessColor(){
    let randomNum = Math.floor(Math.random()*colors.length);
    guess.style.backgroundColor = colors[randomNum]
}

guessColor()

var sco = 0;  
var score = document.querySelector("#score")

var something = parseInt(score.innerHTML)


var bubbleClick = document.querySelector(".bubble")

canvas.addEventListener("click", (e)=>{
    

    let clikedColor = e.target.style.backgroundColor;
    

    if(clikedColor == guess.style.backgroundColor){
        console.log("same")
        sco = sco + 1;
        score.innerHTML = something+sco
        guessColor()
        makeBubbles()
    }
})

var timeDisplay = document.querySelector("#time")

var count = 60
function timer(){
    count = count-1

    timeDisplay.innerHTML = count
    
   
    if(count < 1){
        clearInterval(time)
        canvas.style.display = "none"
        finalscreen.style.display = "block"
        points.innerHTML = sco
    }
}

let time = setInterval(timer, 1000)

var playAgain = document.querySelector(".btn")

playAgain.addEventListener("click", (e)=>{
    canvas.style.display = "flex"
    finalscreen.style.display = "none"
    makeBubbles()
    guessColor()
    sco = 0
    score.innerHTML = 0
    timeDisplay.innerHTML = 60
    count = 60
    time = setInterval(timer, 1000)
})