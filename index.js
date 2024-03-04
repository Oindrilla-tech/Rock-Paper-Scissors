
// Get all elements with class "choice"
const choices = document.querySelectorAll('.choice');

//
const playAgain = ()=>
{
    let Optionview = document.querySelector('#Choice-Options');
    Optionview.style.display='flex';
    let resultContainer = document.querySelector('#Choice-winner');
    resultContainer.innerHTML="";
    const Option2 = document.querySelector('.score-board');
    Option2.style.display='flex';
    const prem = document.querySelector('.nxt-page');
    prem.innerHTML="";
}
const renderView = (result, userChoice, compChoice) => {
    const Optionview = document.querySelector('#Choice-Options');
    const resultContainer = document.querySelector('#Choice-winner');
    const user_Score = document.querySelector('#user-scr');
    const comp_Score = document.querySelector('#comp-scr');
  
    Optionview.style.display = 'none';
  

  
    let result_text = "";
    switch (result) {
      case 'tie':
        result_text = "<p>TIE UP</p>";
        break;
      case 'computer':
        result_text = "<p>YOU LOST</p><p>AGAINST PC</p>";
        comp_Score.innerHTML = updateScore("compScore");
        break;
      default:
        result_text = "<p>YOU WIN</p><p>AGAINST PC</p>";
        user_Score.innerHTML = updateScore("userScore");
        const nxt = document.querySelector('.next');
        nxt.style.visibility='visible';
    }
  
    const htmlCode = `
      <div class="picked"> <p>YOU PICKED</p> <p>PC PICKED</p></div>
      <div class="win-choice1" id="${userChoice}"><img src="./images/${userChoice}.png"></div>
      <div class="winner">
          ${result_text}
          <button onclick="playAgain()" id="play-again">Play Again</button>
      </div>
      <div  class="win-choice2" id="${compChoice}"><img src="./images/${compChoice}.png"></div>
    `;
  
    resultContainer.innerHTML = htmlCode;
  }

  const updateScore = (key) => {
    let score = localStorage.getItem(key) ? parseInt(localStorage.getItem(key)) + 1 : 1;
    localStorage.setItem(key, score);
    return score;
  }

  const getScore = (key) => {
    let score = localStorage.getItem(key) ? parseInt(localStorage.getItem(key)) : 0;
    // localStorage.setItem(key, score);
    return score;
  }

  window.onload = function() {
    const userScoreElement = document.querySelector('#user-scr');
    if (userScoreElement) {
      userScoreElement.innerHTML = getScore("userScore");
    }
    const compScoreElement = document.querySelector('#comp-scr');
    if (userScoreElement) {
      compScoreElement.innerHTML = getScore("compScore");
    }
  }

// Loop through each choice element and attach a click event listener
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked!",choiceId)
        let arr =['rock','paper','scissors'];
        const compChoice = arr[Math.floor(Math.random()*3)];
        // var arr2 = [userChoice, compChoice];
        const res=decideWinner(userChoice, compChoice);
        // console.logres);
        renderView(res,userChoice,compChoice);
        console.log(res);
    });
});



const decideWinner = (userChoice, compChoice) =>
{
    //this function returns tie, user or computer based on computation
    const resultMatrix = {
        'rock': {'rock': 'tie', 'paper': 'computer', 'scissors': 'user'},
        'paper': {'rock': 'user', 'paper': 'tie', 'scissors': 'computer'},
        'scissors': {'rock': 'computer', 'paper': 'user', 'scissors': 'tie'}
    };
    if(userChoice==compChoice)
    {
        return "tie";
    }
    const result = resultMatrix[userChoice][compChoice];
    return result;
}
    

function cross()
{
  const rule1 = document.querySelector('.rules-container');
  rule1.style.visibility='hidden';
}

function rule()
{
  const rule2 = document.querySelector('.rules-container');
  rule2.style.visibility='visible';
}

function redirectTo()
{
  const Option1 = document.querySelector('#Choice-Options');
  const Option2 = document.querySelector('.score-board');
  const Option3 = document.querySelector('#Choice-winner');
  Option1.style.display = 'none';
  Option2.style.display = 'none';
  Option3.innerHTML = "";
  const prem = document.querySelector('.nxt-page');
  const htmlcode2 = `
  <img id="vector" src="./images/Vector.png">
  <p id="hurray">HURRAY!!</p>
  <p id="won">YOU WON THE GAME</p>
  <button onclick="playAgain()" id="play-again">Play Again</button>
`;
prem.innerHTML = htmlcode2;
}