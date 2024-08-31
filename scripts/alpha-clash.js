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
        console.log('you got a point!');
        console.log('you have pressed correctly',expectedAlphabet);
        //update score:
        //1. get the current score
        const currentScore = getTextElementvalueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);



//----------------------------------------------------------------------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
//-----------------------------------------------------------------------------------

        // //2.increase the score by 1
       

        // //3.show the update score
        // currentScoreElement.innerText = newScore;



        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('dhur vai/ apu right key press korun');
        const currentLife = getTextElementvalueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }


        //===================================================================
        //step 1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);


        // //step 2: reduce the life count
        // const newLife = currentLife - 1;


        // //step 3: display the updated life count 
        // currentLifeElement.innerText = newLife;
    }
   

    
}
document.addEventListener('keyup', handleKeyboardKeyUp);
function continueGame (){

    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your alphabet', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color 
    setBackgroundColorById(alphabet);
}

function play(){
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score'); 
    //update final score
    //step 1: get the final score
    const lastScore = getTextElementvalueById('current-score');
    console.log('last score',lastScore);
    setTextElementValueById('last-score',lastScore);
}

