const now = new Date();

var nicsImages = [
  "assets/nics/0e28c349-6d34-46a8-9f60-4387893c624c.jpg",
  "assets/nics/1.jpg",
  "assets/nics/1e60ea28-ea57-4a88-84e3-0daeff54effd.jpg",
  "assets/nics/6e710be5-f6ce-4b0d-83ba-0b9fa2417f1b.jpg",
  "assets/nics/9b850a95-d7ab-4b17-9983-1b498de32859.jpg",
  "assets/nics/17e68359-ccc5-43b5-b428-d74cd662953e.jpg",
  "assets/nics/84d83373-5add-4778-be74-a5c6ce4576bf.jpg",
  "assets/nics/85c80996-75c5-4d54-a4d4-a0a50a582b6f.jpg",
  "assets/nics/230afe75-76cd-470c-8223-b4a671c66bea.jpg",
  "assets/nics/20268063-7677-4986-b91a-a47513ff2caa.jpg",
  "assets/nics/d5da2348-3313-43ef-af74-1e22b924bf79.jpg",
  "assets/nics/d7408a4c-0fb3-40c6-9d44-94c53da2d120.jpg",
  "assets/nics/dda29930-7469-4192-81df-83fb6489e2c2.jpg"
];
var myImages = [
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.22 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.24 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.25 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.26 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.27 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.28 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.29 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.30 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.31 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.32 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.33 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.34 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.35 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.36 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.37 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.52 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.53 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.54 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.55 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.56 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.57 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.58 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.57.59 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.00 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.01 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.02 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.03 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.04 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.05 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.06 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.22 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.23 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.24 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.25 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.26 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.27 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.28 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.29 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.30 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.31 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.32 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.33 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.34 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.35 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.36 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.38 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.55 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.56 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.57 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.58 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.58.59 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.59.00 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.59.01 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.59.02 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.59.03 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.59.04 PM.jpeg",
  "assets/mine/WhatsApp Image 2023-09-14 at 2.59.05 PM.jpeg"
];
function calcDaysUntil() {
  let today = new Date().toISOString().slice(0, 10)

  const startDate = "2024-06-23";
  const endDate = today;

  const diffInMs = new Date(endDate) - new Date(startDate)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return diffInDays * -1 + 1;
}

window.onload = function () {
  updateIfValentine();
  updateIfAnniversary();
  updateTime();
  updateImages();
}

function updateTime() {
  document.getElementById("counter").innerHTML = calcDaysUntil() + " Days";
}

function updateImages() {
  const nicsImage = document.getElementById("nicsImage").src = getNicsImage();
  const myImage = document.getElementById("myImage").src = getMyImage();
}

function getNicsImage() {
  return getImageOfTheDay("nic");
}

function getMyImage() {
  return getImageOfTheDay("mine");
}

function getImageOfTheDay(path) {
  if (path == "nic") {
    return nicsImages[getRandomNumberInInterval(0, nicsImages.length - 1)];
  } else {
    return myImages[getRandomNumberInInterval(0, myImages.length - 1)];
  }
}

function getRandomNumberInInterval(min, max) {
  const currentDate = new Date();
  console.log(currentDate.getDate())
  const seed = currentDate.toISOString().slice(0, 10); // Use the date as a seed

  const seedNumber = parseInt(seed.replace(/-/g, ""), 10);
  const random = (seedNumber % (max - min + 1)) + min;

  console.log("--------------------")
  console.log(max)
  console.log(random)
  return random;
}

function updateIfAnniversary() {
  anniversary = "2024-11-1"; //"2024-11-1";
  today = new Date()
  if(today.getDate() == new Date(anniversary).getDate()) {
    window.location.href = 'surprise/surprise.html'
  }
}

//VALENTINE CODE
function onNoBtn(noBtn) {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const ranX = Math.floor(Math.random() * maxX);
  const ranY = Math.floor(Math.random() * maxY);

  noBtn.style.left = ranX + "px";
  noBtn.style.top = ranY + "px";
}

function updateIfValentine() {
  console.log("test");
  valentine = "2024-2-14"
  today = new Date()
  if(today.getDate() != new Date(valentine).getDate()) {

    document.body.style.overflowY = "initial";
    document.body.style.background = "none";
    document.body.style.backgroundColor = "whitesmoke";
    document.querySelector(".normal-site").style.visibility = "collapse";
    document.querySelector(".valentine-container").style.visibility = "visible";

    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");

    
    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Ich freue mich drauf ❤️💋";
      gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
      
      noBtn.style.transition = "0s";
      noBtn.style.visibility = "collapse";
      yesBtn.innerHTML = "Return to page";
      yesBtn.style.width = "300px";
      yesBtn.style.marginLeft = "0px";

      yesBtn.addEventListener("click", () => {
        document.body.style.overflowY = "initial";
        document.body.style.background = "linear-gradient(to bottom right, #9cb8c9, #48729c)";
        document.body.style.backgroundColor = "#91B2C7";
        document.querySelector(".normal-site").style.visibility = "visible";
        document.querySelector(".valentine-container").style.visibility = "collapse";
      })
    });
    
    noBtn.addEventListener("mouseover", () => {
        onNoBtn(noBtn);
    });
    
    noBtn.addEventListener("click", () => {
        onNoBtn(noBtn);
    });
  }
}