const emojis =["🍎","🍌","🍇","🍉","🍓","🍒","🥝","🍍"];
let cardsArray=[...emojis,...emojis];

let first = null;
let second = null;
let lock = false;
let move =0;
let time=0;
let timerInterval=null;
let started = false;