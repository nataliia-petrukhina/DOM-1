

document.addEventListener(`DOMContentLoaded`, function(){
     function randomNumber(){
        return Math.floor(Math.random() * 10)+1;
}
    
    function guessingGame(){
        const numberToGuess = randomNumber();
        for (let i = 1; i=3; i++){
            const userGuess = Number(prompt(`Versuchen Sie ${i}: Errate die Zahl von 1 bis 10`));
            
            if (userGuess === numberToGuess){
                alert(`HERZLICHEN GLÜCKWUNSCH! Du hast die Zahl ${numberToGuess} erraten.`);
                return;
            }else{
            alert("Neee. Versuche Noch einmal ;)")
            }
            }
            alert (`Du hadt nicht richtig geraten. Die Zahl war ${numberToGuess}.`);
            document.getElementById('gameMessage').style.display = 'block';
        }

        //begin
        document.getElementById('startGameButton').addEventListener('click', guessingGame);
});