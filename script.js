let RandomNm = 0;
let hed = document.getElementById("suggetion");
let score = 100;
let scoreNum = document.getElementById("scoreTxt");


function play(){
    RandomNm = Math.floor(Math.random()*100 + 1);
}

function guess(event){

    event.preventDefault();
    let number = parseInt(f1.num.value)
   
    if( number <= 0 || number >= 100){
        hed.innerHTML = "Please enter a number in the range of 1 - 100";
    }
    else if(isNaN(number)){
         hed.innerHTML = "Please enter a valid number";
    }

    else if(number < RandomNm){
        hed.innerHTML = "Ohoo number is too small";
        score-=10;
        scoreNum.innerHTML = `score : ${score}`;
    }
    else if(number > RandomNm){
        hed.innerHTML = "Ohoo number is too large";
        score-=10;
        scoreNum.innerHTML = `score : ${score}`;

    }
    else {
         hed.innerHTML = ` <div style="text-align:center;">
        <img src="images/win.gif" style="width:400px; height:300px;margin-left : 140px">
        <h2>correct</h2>
      </div>`
       
    }
}

function reset(){
    hed.innerHTML = "click the play button to start the game"
    score = 100;
    document.getElementById("input").innerHTML = ""
    scoreNum.innerHTML = "score : 100"

}