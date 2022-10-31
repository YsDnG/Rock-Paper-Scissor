    const choice=["Paper","Rock","Scissor"]
    const buttonStart = document.getElementById("startButton")
    const divResult= document.getElementById('result')
    console.log(divResult)
    divResult.innerText = "Are you Ready to Rumble ?? "
    const buttonChoiceContainer = document.getElementById('containerButtonChoice')

    buttonChoiceContainer.style.display='none'
    let nbGame = 0
    let result = 0
    let score = [ 0 ,0, 0]
    

    




function playAGame(e){ 
   
 
    const buttonChoice = buttonChoiceContainer.querySelectorAll('button')
    
    if(buttonStart.innerHTML === "Start")
    {
        buttonChoiceContainer.style.display='flex'
        buttonStart.innerHTML = "Reset"
        buttonStart.classList.add('resetButton') 
        
        
        const computerChoice = Math.round(Math.random()*2)

        


        function setPlayerChoice(e) 
        { 
            playerChoice = this.innerHTML.toLowerCase()
            result += getGameWinner(choice[computerChoice].toLowerCase(),playerChoice)
            nbGame++
            playerChoice = null
            

            if(nbGame > 3)
            {
             buttonChoice.forEach(button => button.removeEventListener('click',setPlayerChoice))
                    
            if(result !== 0)
            {
                if(result > 0)
                    divResult.innerText = "You Win  THE GAME" 
                else
                    divResult.innerText ="You Loose  THE GAME"

            }
            else
                divResult.innerText ="THE GAME IS  A TIE "

        
            }
            
        }
        buttonChoice.forEach(button => button.addEventListener('click', setPlayerChoice))
            

    }
    else
    {
        buttonStart.innerHTML = "Start" 
        buttonChoiceContainer.style.display='none'
        buttonStart.classList.remove('resetButton') 
        divResult.innerText = "Are you Ready to Rumble ??"
        divResult.classList.remove('loose')
        result = 0
        nbGame = 0
        
    }
}


 function getGameWinner(cC ,pC)
{
    if(cC === pC)
    { 
        divResult.innerText ="It's a tie : " + cC
        return 0
    }  
    if(cC=== "paper" &&  pC === "rock")
    { 
        divResult.innerText ="You Lose!  Paper beats Rock"
        return -1
    }
    if( cC=== "rock" &&  pC === "paper")
    { 
        divResult.innerText ="You Win!  Paper beats  Rock" 
        
        return 1  
    }
    if( cC=== "paper" &&  pC === "scissor")
    { 
        divResult.innerText ="You Win! Scissor beats  Paper"
        return 1 
    }
    if( cC=== "scissor" && pC === "paper")
    { 
        divResult.innerText ="You Loose! Scissor beats  Paper"
        return -1
    }
    if(cC=== "rock" && pC === "scissor")
    { 
        divResult.innerText ="You Loose! Rock beats scissor"
        return -1
    }
        if(cC=== "scissor" && pC === "rock")
    { 
        divResult.innerText ="You Win! Rock beats Scissor"
        return 1 
    }



}

buttonStart.addEventListener("click",playAGame)