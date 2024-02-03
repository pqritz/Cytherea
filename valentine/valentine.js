const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Ich freue mich drauf ❤️💋";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
    onNoBtn();
});

noBtn.addEventListener("click", () => {
    onNoBtn();
});

function onNoBtn() {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const ranX = Math.floor(Math.random() * maxX);
    const ranY = Math.floor(Math.random() * maxY);

    noBtn.style.left = ranX + "px";
    noBtn.style.top = ranY + "px";
}