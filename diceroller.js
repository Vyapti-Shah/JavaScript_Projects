//DICE ROLLER PROJECT

function rollDice(){
    const numofDice=document.getElementById("numofDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const images=[];

    for(let i=0; i < numofDice; i++){
        const value=Math.floor(Math.random() * 6) + 1; //*6 means output will bw bwtween 0 to 5// +1 means the *6 will be added by 1 and now the  output will be between 1 and 6
        values.push(value);
        images.push(`<img src="diceroller_images/dice${value}.png" alt="Dice ${value}">`);
    }
diceResult.textContent =`dice: ${values.join(', ')}`;
diceImages.innerHTML = images.join(``);
}
