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


    // key player expressed to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    // check right or wrong key pressed

    if(playerPressed === expectedAlphabet){
        console.log('you got a point!')
    }
    else{
        console.log('dhur vai/ apu right key press korun');
    }
   

    
}
document.addEventListener('keyup', handleKeyboardKeyUp);
function continueGame (){

    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your alphabet', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color 
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

