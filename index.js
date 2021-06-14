// Code your solutions in this file
const names = ["Ada", "Angelo", "Mark"]
function writeCards(names) {
    const thankYous = []
    for (let i = 0; i < names.length; i++){
        thankYous.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYous;
}

function countDown(number){
    let i = number;
    while (i > -1) {
        console.log(i);
        i--;
    }
}