function randomizeDice() {

    var img1 = document.querySelector(".img1")
    var img2 = document.querySelector(".img2")

    var rNum1 = Math.floor(Math.random()*6) + 1
    var rNum2 = Math.floor(Math.random()*6) + 1

    var titleText = document.querySelector(".titleText")

    img1.setAttribute("src", "images/dice" + rNum1 + ".png")
    img2.setAttribute("src", "images/dice" + rNum2 + ".png")




    if (rNum1 > rNum2) {
        // FLAG EMOJI -------- Windows + Period
        titleText.textContent = "🚩 Player " + 1 + " Wins!"
    }
    if (rNum2 > rNum1) {
        titleText.textContent = "Player " + 2 + " Wins! 🚩"
    } 
    if (rNum2 == rNum1){
        titleText.textContent = "Draw!"
    }

}