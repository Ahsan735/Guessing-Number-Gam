let randInd=Math.floor(Math.random()*10);
let b=prompt("I'm thinking of a number from 1 to 10 — can you find it?")
console.log(randInd)

if(b <= 10 && b > 0 ){
if(b == randInd){
    alert(`🎉 Well done! You guessed it right. Your number ${b} matches the computer’s number ${randInd}!`);
}else{
    alert(`Sorry! You guess a wrong number your number ${b} ≠ computer's number ${randInd}`)
}
}else{
    alert(`Your number is not between 0 to 10`)
}
