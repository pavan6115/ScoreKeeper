// Instead of storing in variable, did the same thing using objects
// Can scale the mini-project as well, like increase the number of opponents

const p1 = {
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')
}
const p2 = {
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')
}


const reset = document.querySelector('#reset')
const maxScore = document.querySelector('#maxScore')

let winningScore = maxScore
let isGameOver = false


function updateScores (player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score
    }
}


p1.button.addEventListener('click', function () { 
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

maxScore.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    resetScore()
})

reset.addEventListener('click', resetScore);

function resetScore() {
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('winner', 'loser')
        p.button.disabled = false
    } 
}