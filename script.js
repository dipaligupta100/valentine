const btn = document.getElementById("btn");
const title = document.getElementById("title");
const message = document.getElementById("message");

let step = 0;

btn.addEventListener("click", () => {
    step++;

    if (step === 1) {
        title.innerText = "Hey Love ❤️";
        message.innerText = "I just wanted to say...";
    }
    else if (step === 2) {
        //title.innerText = "Ritik ❤️";
        message.innerText = "You are the most amazing person in my life.";
    
    } 
     else if (step === 3) {
           // title.innerText = "Baby ❤️";
        message.innerText = "You make my ordinary days special.";
    
    } 
    else if (step === 4) {
        //title.innerText = "my bestest friend ❤️";
        message.innerText = "Will you be my Valentine? 💌";
        btn.innerText = "YES 💖";
    } 
    else  if (step === 5) { 
       // title.innerText = "❤️";
        message.innerText = "I knew it 😌❤️";
        btn.innerText = "click me again 😘";
    }
    else if (step === 6) { 
        title.innerText = "Happy valentime day!❤️";
        message.innerText = "you are my bestest friend as always 😌❤️";
        btn.innerText = "I love you 😘";
    }
     else {
    window.location.href = "second.html";
}

});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);