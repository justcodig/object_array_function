
const inbox = [];
const outbox = [];
for (let i = 1; i <= 45; i++) {
    inbox.push(i);
};
for(let s =0; s<6; s++){
    let a= parseInt(Math.random() * inbox.length); 
    let lot = inbox[a];
    outbox.push(lot)
    inbox.slice(a,1)
};
console.log(outbox);

const inbox2 = document.querySelector("#inbox");
const outbox2 = document.querySelector(".outbox");
const lottoButton = document.querySelector(".lottoButton");
const numberbox = document.querySelector("#numberbox");

lottoButton.addEventListener("click",function(){

    let div=document.createElement("div");
    let bb = outbox;
    div.innerHTML = bb;
    outbox2.append(div);
})
numberbox.innerHTML = inbox;

