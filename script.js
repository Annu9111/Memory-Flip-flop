const emojis =["🍎","🍌","🍇","🍉","🍓","🍒","🥝","🍍"];
let cardsArray=[...emojis,...emojis];

let first = null;
let second = null;
let lock = false;
let move =0;
let time=0;
let timerInterval=null;
let started = false;

const game=document.getElementById("game");
const timeEl = document.getElementById("time");
const moveEl=document.getElementById("moves");
const message=document.getElementById("message");

function shuffle(array){
    return array.sort(()=>Math.random() - 0.5);
}

function createBoard(){
    game.innerHTML="";
    let shuffled=shuffle(cardsArray);

    shuffled.forEach(symbol =>{
        const card=document.createElement("div");
        card.classList.add("card");

        card.innerHTML=`
        <div class="inner">
            <div class="front">?</div>
            <div class="back">${symbol}</div>
        </div>
        `;

        card.dataset.symbol=symbol;
        card.addEventListener("click",()=>handleClick(card));
        game.appendChild(card);
    });

}

function handleClick(card){
    if(!started || lock|| card.classList.contains("flipped")|| card.classList.contains("matched"))
        return;
    if (!first){
        first=card;
    }else{
        second=card;
        lock=true;
        moves++;
        movesEl.innerHTML=moves;

        if(first.dataset.symbol===second.dataset.symbol){
            first.classList.add("matched");
            second.classList.add("matched");
            resetTurn();
            checkWin();
        }else{
            setTimeout(()=>{
                first.classList.remove("flipped");
                second.classList.remove("flipped");
                resetTurn();
            } ,800);
        }
    }


}
