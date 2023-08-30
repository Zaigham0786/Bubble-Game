const makeBubble = () => {
    var bubble = ""
    for (var i = 1; i <= 70; i++) {
        var res = Math.floor(Math.random() * 10)
        bubble += `<div class="bubble" id="bubbleval">${res}</div>`
    }
    document.querySelector(".bottom").innerHTML = bubble
}
// crating audio 
var Success = function (audioName) {
    let audio = new Audio(audioName)
    audio.play();
}
var audio = function () {
    Success("success.mp3")
}
var erroraudio = function () {
    Success("error.mp3")
}
/// above sectiom is for au
var timer = 60
const runTimer = () => {
    var timerval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(timerval)
            document.querySelector(".bottommain").innerHTML = `
            <div id="result">
              <p>You Scored : <span>${score}</span></p>
              
            </div>

            `
        }
    }, 1000);
}
var hitrn = 0
const Hit = () => {
    hitrn = Math.floor(Math.random() * 10)
    document.getElementById("hitval").textContent = hitrn
}

Hit()
runTimer()
makeBubble()
var score = 0
const increaseScore = () => {
    score += 5;
    document.querySelector("#scoreval").textContent = score
}
document.querySelector(".bottom").addEventListener("click", function (data) {
    var clickedNum = (Number(data.target.textContent))
    if (clickedNum === hitrn) {
        increaseScore()
        makeBubble()
        Hit()
        audio()
    }
    else {
        erroraudio()
    }
})