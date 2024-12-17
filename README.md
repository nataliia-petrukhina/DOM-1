# The Guessing Game
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Here you can practice adding JavaScript to a webpage, as well as working with the browser's `window` object by creating a simple game.

## Task

Create a game which generates a random integer between 1 and 10. The user has 3 chances to guess the number. If they don't guess the number in 3 tries, they fail the game.

- Using the `<script>` tag, link the external JavaScript file [index.js](/index.js) with the [index.html](/index.html) file
- Write your JavaScript in the [index.js](/index.js) file
- Meet the requirements outlined below

## Requirements

- Use the **window** `alert` and `prompt` functions to display and capture information

- Create a function named `randomNumber` which;

  - takes in no arguments
  - returns a random integer between **1** and **10**

- Create a function named `guessingGame` which;

  - takes in no arguments
  - doesn't return anything
  - calls `randomNumber` to get a random number
  - keeps track of the amount of guesses with another variable
  - `prompt` the user to guess a number
  - if the user is incorrect, `prompt` a new guess until they tried 3 times
  - if the user is correct, `alert` a congratulation
  - if the user guessed incorrectly 3 times, tell them the correct number with an `alert`

- Call `guessingGame()` to initialize the application

### Reference Images

#### Starting the game

![Starting the game](./reference/game-start.png)

#### User guessed incorrectly

![User guessed incorrectly](./reference/wrong-answer.png)

#### User wins the game

![User guessed correctly](./reference/game-win.png)

#### User lost

![User did not guess](./reference/game-lost.png)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Guessing Game

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `randomNumber` returns a random number between 1 and 10 |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | three atemps should be available |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | success message is displayed upon correct guess |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | failure message is displayed upon three incorrect guesses |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=spa-browser-guessing-game)


[//]: # (autograding info end)