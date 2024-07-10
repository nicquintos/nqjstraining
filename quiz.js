let correct = 0;
let rank;

const main = document.querySelector('main');

const ans1 = prompt("Current office");
if(ans1.toUpperCase()=== 'C&T'){
    correct +=1;
}
const ans2 = prompt("Current Department");
if(ans2.toUpperCase()=== 'QA'){
    correct +=1;
}
const ans3 = prompt("Current Position");
if(ans3.toUpperCase()=== 'SENIOR'){
    correct +=1;
}

if (correct === 3){
    rank = "Gold";
} else if (correct >= 1){
    rank = "Bronze";
} else {
    rank = "try again";
}

main.innerHTML = `<h2> you got ${correct} out of 3 questions </h2>`;