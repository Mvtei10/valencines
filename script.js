let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let message = document.getElementById("message");
let extraContent = document.getElementById("extraContent");
let container = document.querySelector(".container");

let noMessages = [
    "Sigur?",
    "Mai gândește-te...",
    "Chiar nu?",
    "Nu cred asta...",
    "Ma iei la misto?",
    "O sa fiu foarte trist...",
    "Foarte foarte trist...",
    "Foarte foarte foarte trist...",
    "Foarte foarte foarte foarte trist...",
    "Acum m-am si suparat si o sa plang...",
    "Sa nu ma mai cauti!"
];

let noClickCount = 0;

noBtn.addEventListener("click", function() {
    if (noClickCount < noMessages.length) {
        noBtn.textContent = noMessages[noClickCount];
        yesBtn.style.transform = `scale(${1 + noClickCount * 1})`;
        yesBtn.style.marginRight = `${noClickCount * -8}px`;
        yesBtn.style.marginLeft = `${noClickCount * -8}px`;
        noClickCount++;
    }
});

yesBtn.addEventListener("click", function() {
    container.innerHTML = `
        <img src="images/troat.gif" alt="Troat GIF" class="parrotGif">
        <p>Stiam eu papagalule😜😜🎉💕💕</p>
        <! <img src="images/parrot.gif" alt="Parrot GIF" class="parrotGif">
    `;
});