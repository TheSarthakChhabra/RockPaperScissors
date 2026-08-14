let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
      let possChoices = ["rock", "paper", "scissors"]
      let randIdx = Math.floor(Math.random() * 3)
      return possChoices[randIdx]
}

const drawGame = () => {
      msg.innerText = "Game was Draw. Play again."
      msg.style.backgroundColor = "#081b31"
}

const userWins = (userChoice, compChoice) => {
      msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`
      msg.style.backgroundColor = "green"
      userScore++
      userScorePara.innerText = userScore
}

const compWins = (userChoice, compChoice) => {
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`
      msg.style.backgroundColor = "red"
      compScore++
      compScorePara.innerText = compScore
}

const playGame = (userChoice) => {
      const compChoice = genCompChoice()
      if (compChoice === userChoice) drawGame()
      else if (compChoice === "rock") {
            if (userChoice === "paper") userWins(userChoice, compChoice)
            else compWins(userChoice, compChoice)
      } else if (compChoice === "paper") {
            if (userChoice === "scissors") userWins(userChoice, compChoice)
            else compWins(userChoice, compChoice)
      } else {
            if (userChoice === "rock") userWins(userChoice, compChoice)
            else compWins(userChoice, compChoice)
      }
}

choices.forEach(choice => {
      choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id")
            playGame(userChoice)
      })
});