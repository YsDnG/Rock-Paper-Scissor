    const choice=["Paper","Rock","Scissor"]
    const buttonStart = document.querySelector(".buttonGame")
    const divResult= document.querySelector('.dynamic-txts')
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
    result += getGameWinner(choice[computerChoice].toLowerCase(),playerChoice)
    nbGame++
    playerChoice = null
    if(nbGame > 5)
            {
             buttonChoice.forEach(button => button.removeEventListener('click',setPlayerChoice))
                    
            if(result !== 0)
            {
                if(result > 0)
                {
                divResult.firstElementChild.classList.remove("loose")
                divResult.firstElementChild.classList.add("win") 
                divResult.firstElementChild.innerText = ("You Win  THE GAME with " + score[0]+" V and "+ score[1]+' L').toLocaleUpperCase() 
            }
                else
                {
                    divResult.firstElementChild.classList.remove("win")
                    divResult.firstElementChild.classList.add("loose")
                    divResult.firstElementChild.innerText =("You Loose  THE GAME "+ score[1] +' L ' +"to " +score[0]+' V').toUpperCase()
                }

            }
            else
                divResult.firstElementChild.innerText =("THE GAME IS  A TIE "+score[1]+" point(s) for each ").toUpperCase()

        
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
        buttonStart.innerHTML = "START" 
        buttonChoiceContainer.style.display='none'
        buttonStart.classList.remove('resetButton') 
        divResult.firstElementChild.classList.remove("win")
        divResult.firstElementChild.classList.remove("loose")
        divResult.firstElementChild.classList.add("white")
        divResult.firstElementChild.innerText="ARE YOU READY ?"
        result = 0
        nbGame = 0
        score= [0,0]
        
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
        return 0
    }  
    if(cC=== "paper" &&  pC === "rock")
    { 
        divResult.firstElementChild.classList.remove("win")
        divResult.firstElementChild.classList.add("loose")
        divResult.firstElementChild.innerText ="You Loose !  Paper beat Rock".toUpperCase()
        score[1]++
        return -1
    }
    if( cC=== "rock" &&  pC === "paper")
    { 
        divResult.firstElementChild.classList.remove("loose")
        divResult.firstElementChild.classList.add("win")
        divResult.firstElementChild.innerText="You Win !  Paper beat  Rock".toUpperCase() 
        score[0]++
        return 1  
    }
    if( cC=== "paper" &&  pC === "scissor")
    { 
        divResult.firstElementChild.classList.remove("loose")
        divResult.firstElementChild.classList.add("win")
        divResult.firstElementChild.innerText ="You Win ! Scissor beat  Paper".toUpperCase()
        score[0]++
        return 1 
    }
    if( cC=== "scissor" && pC === "paper")
    { 
        divResult.firstElementChild.classList.remove("win")
        divResult.firstElementChild.classList.add("loose")
        divResult.firstElementChild.innerText="You Loose ! Scissor beat  Paper".toUpperCase()
        score[1]++
        return -1
    }
    if(cC=== "rock" && pC === "scissor")
    { 
        divResult.firstElementChild.classList.remove('all')
        divResult.firstElementChild.classList.add("loose")
        divResult.firstElementChild.innerText ="You Loose ! Rock beat scissor".toUpperCase()
        score[1]++
        return -1
    }
        if(cC=== "scissor" && pC === "rock")
    { 
        divResult.firstElementChild.classList.remove("loose")
        divResult.firstElementChild.classList.add("win")
        divResult.firstElementChild.innerText="You Win ! Rock beat Scissor".toUpperCase()
        score[0]++
        return 1 
    }



}
buttonStart.addEventListener("click",StartAGame)
