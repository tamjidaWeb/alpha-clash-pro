// function play (){
//    //step-1: hide the home screen.to hide the screen and class hidden to the home section

//    const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');


//      //show the playground
//      const playGroundSection = document.getElementById('play-ground');
//      playGroundSection.classList.remove('hidden');
    
// }

function handleKeyboardKeyUp(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);
    
}
document.addEventListener('keyup', handleKeyboardKeyUp)
function continueGame (){
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your alphabet', alphabet);


    //set randomly generated alphabet to the screen (show it)

  
    // currentAlphabetElement.innerText = alphabet;


    //set background color 
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

