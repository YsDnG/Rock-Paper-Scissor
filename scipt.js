

function getComputerChoice()
{
    
    const choice=["Paper","Rock","Scissor"]
    let result =0
    let score = [ 0 ,0, 0]
    
    for(i=0;i<5; i++)
    {
    score[2] = result
    const computerChoice = Math.round(Math.random()*2)
    let playerChoice = prompt('"Paper","Rock","Scissor').toLowerCase()
   // Loop until thePlayer choice is correct    
    while(playerChoice !== "paper" && playerChoice !== "rock" && playerChoice !== "scissor")
         playerChoice = prompt(`${playerChoice} is not Correct pleas pick again :"`).toLowerCase()
    //+1 for a W - for a L +0 for a tie
    result += playAgame(choice[computerChoice].toLowerCase(),playerChoice,score)
    //  result += playAgame("rock","rock",score)

        
        if(score[2]!== result)
        {
            if(score[2] < result *-1)
                score[0]++
            else
                score[1]++
        }
    
           
    }

    if(score[1]!== score[0])
    {
        if(score[1]> score[0])
            alert("You Win " +" <-- // -->Player: " + score[1]  +"/"+ "Computer: "+score[0] )
        else
            alert("You Loose " +"<-- // -->Player: " + score[1]  +"/"+ "Computer: "+score[0] )

    }
    else
    alert("It's a tie !<-- // -->Player: " + score[1]  +"/"+ "Computer: "+score[0] )

}

function playAgame(cC ,pC,score)
{
    if(cC === pC)
    { 
        alert("It's a tie : " + cC)
        return 0
    }  
    if(cC=== "paper" &&  pC === "rock")
    { 
        alert("You Lose!  Paper beats Rock")
        return -1
    }
    if( cC=== "rock" &&  pC === "paper")
    { 
        alert("You Win!  Paper beats  Rock" ) 
        return 1  
    }
    if( cC=== "paper" &&  pC === "scissor")
    { 
        alert( "You Win! Scissor beats  Paper" )
        return 1 
    }
    if( cC=== "scissor" && pC === "paper")
    { 
        alert("You Loose! Scissor beats  Paper")
        return -1
    }
    if(cC=== "rock" && pC === "scissor")
    { 
        alert("You Loose! Rock beats scissor")
        return -1
    }
        if(cC=== "scissor" && pC === "rock")
    { 
        alert("You Win! Rock beats Scissor")
        return 1 
    }



}

document.getElementById("startButton").addEventListener("click", getComputerChoice)