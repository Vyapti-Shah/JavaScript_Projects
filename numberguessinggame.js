// NUMBER GUESSING GAME
const min=1;
const max=100;
const ans=Math.floor(Math.random()*(max-min+1))+min; //math.floor is for rounding to below value //*(max-min) means max-min will be the highest value it random can show //+1 a num one time greater than (max-min) //+min means the value store in the min will be the value shown
console.log(ans);
let attempt=0;
let guess;
let running=true;
while(running){
      guess=window.prompt(`Guess a number between ${min} and ${max}`);
      guess=Number(guess);
      console.log(typeof guess,guess);
      if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
      }
      else if(guess<min || guess>max){
        window.alert(`Please enter number between ${min} and ${max}`)
      }
      else{
        attempt++;
        if(guess<ans){
          window.alert(`TOO LOW! TRY AGAIN`);
        }
        else if(guess>ans){
          window.alert(`TOO HIGH! TRY AGAIN`);
        }
        else{
          window.alert(`CORRECT ANSWER! The answer is ${ans}. You took ${attempt} attempts.`);
          running=false;
        }
      }
}