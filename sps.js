let yourScore=0;
let compScore=0;

let choices = document.querySelectorAll(".choice");  
let msg = document.querySelector("#msg");
let uScore=document.querySelector("#userScore");
let cScore=document.querySelector("#computerScore");
let resGame= document.querySelector("#restart");


const genCompChoice = () =>{                       // Generate Computer Choice Function
    const options = ["Stone","Paper","Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{                      // DrawGame Function
    console.log("Game Draw")
    msg.innerText = ("The Game ends in a Tie. ");
    msg.style.width="450px";
    msg.style.backgroundColor="#0D1B2A";
};

const showWinner =(userWin,userChoice, compChoice) =>{      // Show Winner Function
    if (userWin === true){
        yourScore++;
        uScore.innerText = yourScore ;
        console.log("You Won");
        msg.innerText = `Congratulations, Your ${userChoice} beats the ${compChoice}.`;
        msg.style.width="750px";
        msg.style.backgroundColor="#3a5a40";
    }
    else{ 
        compScore++;
        cScore.innerText = compScore;
        console.log("You Lose")
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}.`;
        msg.style.width="600px";
        msg.style.backgroundColor="#d90429";
        msg.style.color="#edf2f4";

    }
};


const playGame = (userChoice) =>{               // PlayGame Function
    console.log("User Choice =",userChoice);
    // Generate Computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);
    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Stone"){
            // compChoice= Scissor or Paper
            userWin = compChoice === ("Paper")? false : true ;
        }
        else if(userChoice === "Paper"){
             // compChoice= Scissor or Stone
            userWin = compChoice === ("Scissor")? false : true ;
        }
        else{
             userWin = compChoice === ("Stone")? false : true ;
        }
        showWinner(userWin, userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{                 // Event Added To Images
        const userChoice = choice.getAttribute("id");       // Attribute Accessed
        console.log("Choice Was Clicked", userChoice);
        playGame(userChoice);
    })
});




const restart = ()=>{              // Restart Game
    console.log("Restart")
    uScore.innerText = yourScore = 0;
    cScore.innerText = compScore = 0;
    msg.innerText="Play Your Move!"
    msg.style.backgroundColor="#0D1B2A";
    msg.style.width = "400px";
};

resGame.addEventListener("click",restart);