    const choice=["Paper","Rock","Scissor"]
    const buttonStart = document.querySelector(".buttonGame")
    const divResult= document.querySelector('.dynamic-txts')
    const divScore=document.querySelector('.score')
    let p = document.createElement("p");
    
    const buttonChoiceContainer = document.querySelector('.button-container')

    buttonChoiceContainer.style.display='none'
    let nbGame = 0
    let result = 0
    let score = [ 0 ,0]
    const buttonChoice = buttonChoiceContainer.querySelectorAll('.buttonChoice')
    let playerChoice= null
    
    


function setPlayerChoice(e)
{
    playerChoice = this.innerHTML.toLowerCase()
    const computerChoice = Math.round(Math.random()*2)
    resetAnimation()
    getGameWinner(choice[computerChoice].toLowerCase(),playerChoice)
    displayScore()
    nbGame++
    playerChoice = null
    if(nbGame == 5)
            {
             buttonChoice.forEach(button => button.removeEventListener('click',setPlayerChoice))
                    
            if(score[0] !== score[1])
            {
                if(score[0]> score[1])
                {
                     displayWinner()
                     
                     divResult.firstElementChild.innerText = ("You Win  THE GAME ").toUpperCase()   
                
                }
                 else
                {
                    displayWinner()
                    
                    divResult.firstElementChild.innerText =("You Loose THE GAME ").toUpperCase()
                    
                }

            }
            else
            {
                divResult.firstElementChild.innerText =("THE GAME IS  A TIE ").toUpperCase()
                divResult.firstElementChild.classList.remove("loose")
                divResult.firstElementChild.classList.remove("win")
                divResult.firstElementChild.classList.add("white")
            }
                buttonStart.innerHTML = "PLAY AGAIN"
            }
           

}

function resetAnimation()
{
    divResult.removeChild(divResult.firstChild)
    divResult.append(p)
    divResult.firstElementChild.style="none"
    requestAnimationFrame(()=>
    {
        divResult.firstElementChild.style="";
    })
    setTimeout(() => {
        
    }, 1500);
}

function StartAGame(e){ 

   
    resetAnimation()

    if(buttonStart.innerHTML === "START")
    {
        buttonChoiceContainer.style.display='flex'
        buttonStart.innerHTML = "RESET"
        buttonStart.classList.add('resetButton') 
   
        divResult.firstElementChild.innerText = "THE MATCH STARTED !".toLocaleUpperCase() 
        buttonChoice.forEach(button => button.addEventListener('click', setPlayerChoice))
    }
    else
    {
        
        nbGame = 0
        score= [0,0]
        buttonStart.innerHTML = "START" 
        buttonChoiceContainer.style.display='none'
        buttonStart.classList.remove('resetButton') 
        divResult.firstElementChild.classList.remove("win")
        divResult.firstElementChild.classList.remove("loose")
        divResult.firstElementChild.classList.add("white")
        displayScore()

        
        divResult.firstElementChild.innerText="ARE YOU READY ?"
       
        
    }
}


 function getGameWinner(cC ,pC)
{

    if(cC === pC)
    { 
        
        divResult.firstElementChild.classList.remove("win")
        divResult.firstElementChild.classList.remove("loose")
        divResult.firstElementChild.classList.add("white")
        divResult.firstElementChild.innerText=("It is a tie : " + cC).toUpperCase()
        return 
    }  
    if(cC=== "paper" &&  pC === "rock")
    { 
        displayLoose()
        divResult.firstElementChild.innerText ="You Loose !  Paper beat Rock ".toUpperCase()
        return 
    }
    if( cC=== "rock" &&  pC === "paper")
    { 
        displayWin()
        divResult.firstElementChild.innerText="You Win !  Paper beat  Rock ".toUpperCase() 
       
        return  
    }
    if( cC=== "paper" &&  pC === "scissor")
    { 
        displayWin()
        divResult.firstElementChild.innerText ="You Win ! Scissor beat  Paper ".toUpperCase() 
        
        return 
    }
    if( cC=== "scissor" && pC === "paper")
    { 
        displayLoose()
        divResult.firstElementChild.innerText="You Loose ! Scissor beat  Paper ".toUpperCase() 
        return
    }
    if(cC=== "rock" && pC === "scissor")
    { 
        displayLoose()
        divResult.firstElementChild.innerText ="You Loose ! Rock beat scissor ".toUpperCase() 
        return 
    }
        if(cC=== "scissor" && pC === "rock")
    { 
        displayWin()
        divResult.firstElementChild.innerText="You Win ! Rock beat Scissor ".toUpperCase()
        return 
    }



}
function displayWinner()
{
    if(score[0] == score[1])
        divResult.firstElementChild.classList.add('white')

    if(score[0] > score[1])
        divResult.firstElementChild.classList.add('win')

    else if(score[0]< score[1])
        divResult.firstElementChild.classList.add('loose')

}



function displayWin()
{
        divResult.firstElementChild.classList.remove("loose")
        divResult.firstElementChild.classList.remove("white")
        divResult.firstElementChild.classList.add("win")
        score[0]++  
}

function displayLoose()
{
    divResult.firstElementChild.classList.remove("win")
    divResult.firstElementChild.classList.remove("white")
    divResult.firstElementChild.classList.add("loose")
    score[1]++

}

function displayScore()
{

    divScore.classList.remove('win')
    divScore.classList.remove('loose')

    if(score[0] == score[1])
        divScore.classList.add('white')

    if(score[0] > score[1])
        divScore.classList.add('win')
    else if(score[0]< score[1])
    divScore.classList.add('loose')
    

    divScore.firstElementChild.innerHTML= ("Score: You: " +score[0]+" / Computer: " + score[1]).toUpperCase()
}
buttonStart.addEventListener("click",StartAGame)
