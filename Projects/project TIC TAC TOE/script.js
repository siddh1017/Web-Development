console.log('welcome to tic tac toe')
let win = new Audio("win.wav")
let click = new Audio("ClickAudio.wav")

let turn = "X"
let gameOver = false

// function to change turn  
const changeTurn = () =>{
    return turn === "X"?"0": "X"
}

// fucntion to chech win or not 
const checkWin = () =>{
    let boxtext = document.getElementsByClassName("boxText")
    // combinations that makes win 
    let wins =  [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [1, 4, 7]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            // document.getElementsByClassName("turn")[0].innerText = boxtext[e[0]].innerText + "Won"
            console.log("You won")
            document.querySelector(".turn").innerText = boxtext[e[0]].innerText + " : Won"
            document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width = "150px"
            gameOver = true
        }
    })
}

// game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxText")
    element.addEventListener("click", () =>{
        if (boxtext.innerText === ""){
            boxtext.innerText = turn
            turn = changeTurn()
            click.play()
            checkWin()
            if (!gameOver){
                document.getElementsByClassName("turn")[0].innerText = "Turn : " + turn
            }
        }
    })
})

reset.addEventListener("click", () => {
    let boxtext = document.querySelectorAll(".boxText")
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    document.getElementsByClassName("turn")[0].innerText = "Turn : " + turn
    gameOver = false
    document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width = "0"
})