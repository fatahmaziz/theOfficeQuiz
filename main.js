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
  question: `Which of Angela's cats did Dwight kill?`,
  answer: `Sprinkles`
}, {
  question: `Who was Pam engaged to before Jim?`,
  answer: `Roy`
}, {
  question: `At Phyllis' wedding, Michael revealed that her nickname in high school was what?`,
  answer: `Easy Rider`
}
]
let questionSetTwo = [{
  question: `Who was hired as Michael Scott's replacement before he moved?`,
  answer: `Deangelo Vickers`
}, {
  question: `What was the name of Jan Levinson's assistant at corporate?`,
  answer: `Hunter`
}, {
  question: `Who came up with Suck It?`,
  answer: `David Wallace`
}
]
let questionSetThree = [{
  question: `Michael and Dwight tried to steal clients from which local competing business?`,
  answer: `Prince Paper Company`
}, {
  question: `How much does Bob Vance bid on a hug from his wife Phyllis?(Number in Dollars)`,
  answer: `4000`
}, {
  question: `What was Plop's actual name?`,
  answer: `Pete`
}
]