//RANDOM NUMBER GENERATOR PROJECT

function generatePass(length, inLowercase, inUppercase, inNum, inSymbol){
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const specialChars="!@#$%^&*()_+-=";

    let allowedChars= "";
    let password="";

    allowedChars += inLowercase ? lowercaseChars : ""; //string concatanation (operation of joining strings end to end [eg: snow and ball = snowball])
    allowedChars += inUppercase ? uppercaseChars : "";
    allowedChars += inNum ? numberChars: "";
    allowedChars += inSymbol ? specialChars: "";

    if(length<=0){
        return `(password length should at least be 1)`;
    }
    if(allowedChars.length===0){
        return `(At least 1 set of charact needs to be selected)`;
    }

    for(i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];  //string concatanation
    }

    return password;
}


const passLength=12;
const inLowercase=true;
const inUppercase=true;
const inNum=true;
const inSymbol=true;

const pass= generatePass(passLength, inLowercase, inUppercase, inNum, inSymbol);
console.log(`Generated Password: ${pass}`);

document.getElementById("myPass").textContent = `Your Password is: ${pass}. (*Active for 60secs only*)`;