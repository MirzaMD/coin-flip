const flip=document.getElementById("flip");
const res=document.getElementById("res");
let i=0,j=0;
const soundEffect=document.querySelector("audio");
flip.addEventListener("click",()=>{
    const heads=document.getElementById("heads");
    const tails=document.getElementById("tails");
    const coindHead=document.getElementById("head");
    const coindTail=document.getElementById("tail");

    soundEffect.play();

    const decider=Math.random()*0.5;

    coindHead.style.animation="none";
    coindTail.style.animation="none";

    coindHead.offsetHeight;
    coindTail.offsetHeight;
     
    setTimeout(()=>{
    coindHead.style.animation="heads-flip 1.60s 1 alternate forwards";
    coindTail.style.animation="tails-flip 1.60s 1 alternate forwards";


    if(decider>0.25){
        coindHead.style.zIndex=2;
        coindTail.style.zIndex=1;
        i++;
    }
    else{
        coindTail.style.zIndex=2;
        coindHead.style.zIndex=1;
        j++;
    }
},750);
    setTimeout(()=>{
    heads.textContent="HEADS:"+i;
    tails.textContent="TAILS:"+j;
},2000);
})
res.addEventListener("click",()=>{
    const heads=document.getElementById("heads");
    const tails=document.getElementById("tails");
    
    i=0,j=0;
    heads.textContent="HEADS:"+i;
    tails.textContent="TAILS:"+j;
})