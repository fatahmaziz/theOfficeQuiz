let chalk = require("chalk");
let readlineSync = require('readline-sync');

let userName = readlineSync.question(`Enter your name - `)
let userScore = 0
let topPerformers = {
  firstPlace: `Nandu`,
  firstScore: 3,
  secondPlace: `Hans`,
  secondScore: 2,
  thirdPlace: `Vimal`,
  thirdScore: 1
}

let questionSetOne = [{
  question: `Which of Angela's cats did Dwight kill? `,
  answer: `Sprinkles`
}, {
  question: `Who was Pam engaged to before Jim? `,
  answer: `Roy`
}, {
  question: `At Phyllis' wedding, Michael revealed that her nickname in high school was what? `,
  answer: `Easy Rider`
}
]
let questionSetTwo = [{
  question: `Who was hired as Michael Scott's replacement before he moved? `,
  answer: `Deangelo Vickers`
}, {
  question: `What was the name of Jan Levinson's assistant at corporate? `,
  answer: `Hunter`
}, {
  question: `Who came up with Suck It? `,
  answer: `David Wallace`
}
]
let questionSetThree = [{
  question: `Michael and Dwight tried to steal clients from which local competing business? `,
  answer: `Prince Paper Company`
}, {
  question: `How much does Bob Vance bid on a hug from his wife Phyllis?(Number in Dollars) `,
  answer: `4000`
}, {
  question: `What was Plop's actual name? `,
  answer: `Pete`
}
]

function checkAnswer(question, answer) {
    let userAnswer = readlineSync.question(question)
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      console.log(chalk.green(`You have answered correctly.\n`))
      userScore++
    } else {
      console.log(chalk.red(`You have answered the incorrectly.\n`))
    }
    console.log(`Your current score - ${userScore}\n`)
  }

  function quizLevelOne() {
    for (let initialValue = 0; initialValue < questionSetOne.length; initialValue++) {
      let currentQuestion = questionSetOne[initialValue]
      console.log(`Question ${initialValue + 1} - `)
      checkAnswer(currentQuestion.question, currentQuestion.answer)
    }
  }
  
  function quizLevelTwo() {
    for (let initialValue = 0; initialValue < questionSetTwo.length; initialValue++) {
      let currentQuestion = questionSetTwo[initialValue]
      console.log(`Question ${initialValue + 4} - `)
      checkAnswer(currentQuestion.question, currentQuestion.answer)
    }
  }
  
  function quizLevelThree() {
    for (let initialValue = 0; initialValue < questionSetThree.length; initialValue++) {
      let currentQuestion = questionSetThree[initialValue]
      console.log(`Question ${initialValue + 7} - `)
      checkAnswer(currentQuestion.question, currentQuestion.answer)
    }
  }

  function topScore() {
    console.log(chalk.green(`Your have scored ${userScore} points.\n`))
  
    console.log(`Leaderboard - \n`)
  
    topPerformers.userPlace = userName
    topPerformers.userScore = userScore
  
    if (userScore == 3) {
      console.log(chalk.blue.bold(`1. ${topPerformers.userPlace} has scored ${topPerformers.userScore}\n`))
      console.log(`2. ${topPerformers.firstPlace} has scored ${topPerformers.firstScore}\n`)
      console.log(`3. ${topPerformers.secondPlace} has scored ${topPerformers.secondScore}\n`)
      console.log(`Congratulations!!! You have been placed first on the leaderboard.\n`)
    } else if (userScore == 2) {
      console.log(`1. ${topPerformers.firstPlace} has scored ${topPerformers.firstScore}\n`)
      console.log(chalk.blue.bold(`2. ${topPerformers.userPlace} has scored ${topPerformers.userScore}\n`))
      console.log(`3. ${topPerformers.secondPlace} has scored ${topPerformers.secondScore}\n`)
      console.log(`Congratulations!!! You have been placed second on the leaderboard. Play again to better your score.\n`)
    } else if (userScore == 1) {
      topPerformers.thirdPlace = userName
      console.log(`1. ${topPerformers.firstPlace} has scored ${topPerformers.firstScore}\n`)
      console.log(`2. ${topPerformers.secondPlace} has scored ${topPerformers.secondScore}\n`)
      console.log(chalk.blue.bold(`3. ${topPerformers.userPlace} has scored ${topPerformers.userScore}\n`))
      console.log(`Congratulations!!! You have been placed third on the leaderboard. Play again to better your score.\n`)
    } else {
      console.log(`You scored ${userScore}, hence you cannot be placed on the leaderboard`)
    }
  
    console.log(`Take a screenshot and send it in get your name displayed on the leaderboard permanently.`)
  }

  function playQuiz() {
    console.log(`Welcome ${userName}! Are you ready to play THE OFFICE Quiz??`)
    let userChoice = readlineSync.question(`\nPress Y to play the game. Press S to view the scoreboard. Press any other button to exit.\n`)
    if (userChoice.toLowerCase() === `y`) {
      quizLevelOne()
      if (userScore >= 2) {
        quizLevelTwo()
        if (userScore >= 4) {
          quizLevelThree()
          topScore()
        } else {
          console.log(chalk.red(`You cannot proceed to next round.\n`))
          topScore()
        }
      } else {
        console.log(chalk.red(`You have scored ${userScore}. Hence You cannot proceed to next round`))
        topScore()
      }
    } else if (userChoice.toLowerCase() === `s`) {
      console.log(`Leaderboard - \n`)
      console.log(`1. ${topPerformers.firstPlace} has scored ${topPerformers.firstScore}\n`)
      console.log(`2. ${topPerformers.secondPlace} has scored ${topPerformers.secondScore}\n`)
      console.log(`3. ${topPerformers.thirdPlace} has scored ${topPerformers.thirdScore}\n`)
      let userChoice = readlineSync.question(`Press Y to play the game. Press any other button to exit.\n`)
      if (userChoice.toLowerCase() === `y`) {
        quizLevelOne()
        if (userScore >= 2) {
          quizLevelTwo()
          if (userScore >= 4) {
            quizLevelThree()
            topScore()
          } else {
            console.log(chalk.red(`You cannot proceed to next round.\n`))
            topScore()
          }
        } else {
          console.log(chalk.red(`You have scored ${userScore}. Hence You cannot proceed to next round`))
          topScore()
        }
      } else {
        console.log(`You have decide not to play :(\nIf you change your mind refresh the page :)`)
      }
    } else {
      console.log(`You have decide not to play :(\nIf you change your mind refresh the page :)`)
    }
  }
  
  playQuiz()