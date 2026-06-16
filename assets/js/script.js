const textLines = [
"$ whoami",
"future security researcher",
"",
"$ mission",
"learn ethical hacking & cybersecurity",
"",
"$ status",
"online • training • building skills",
"",
"$ access",
"authorized",
"",
"$ loading",
"red team modules initialized"
];

let line = 0;
let char = 0;

const typingElement = document.getElementById("typing-text");

/* =========================
   TERMINAL TYPING EFFECT
========================= */

function typeEffect(){

if(line < textLines.length){

if(char < textLines[line].length){

typingElement.innerHTML += textLines[line].charAt(char);

char++;

setTimeout(typeEffect,40);

}else{

typingElement.innerHTML += "<br>";

line++;
char = 0;

setTimeout(typeEffect,250);

}

}

}

/* =========================
   PROFILE IMAGE SHRINK
========================= */

const profileImage = document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

if(profileImage){

if(window.scrollY > 150){

profileImage.classList.add("shrink");

}else{

profileImage.classList.remove("shrink");

}

}

});

/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load",()=>{

if(typingElement){
typeEffect();
}

});

/* =========================
   SPIDER MOVEMENT
   - Spider screen par move karta hai
   - Jab screen ke bahar jaata hai toh gayab hota hai
   - Phir doosri random jagah se wapas aata hai
========================= */

const spiders = document.querySelectorAll(".spider");

function animateSpider(spider) {

   const W = window.innerWidth;
   const H = window.innerHeight;
   const size = 40;

   // Current position
   let x = parseFloat(spider.dataset.x) || Math.random() * W;
   let y = parseFloat(spider.dataset.y) || Math.random() * H;

   // Random target — screen ke BAHAR bhi ja sakta hai
   const targets = [
      // Screen ke andar
      { tx: Math.random() * W, ty: Math.random() * H },
      // Left se bahar
      { tx: -size - 20, ty: Math.random() * H },
      // Right se bahar
      { tx: W + size + 20, ty: Math.random() * H },
      // Upar se bahar
      { tx: Math.random() * W, ty: -size - 20 },
      // Neeche se bahar
      { tx: Math.random() * W, ty: H + size + 20 },
   ];

   // 40% chance bahar jaaye, 60% andar rahe
   const pick = Math.random();
   let chosen;
   if (pick < 0.6) {
      chosen = targets[0]; // screen ke andar
   } else {
      chosen = targets[Math.floor(Math.random() * 4) + 1]; // bahar
   }

   const tx = chosen.tx;
   const ty = chosen.ty;

   // Distance calculate karo
   const dist = Math.sqrt((tx - x) ** 2 + (ty - y) ** 2);
   const speed = 120; // pixels per second
   const duration = Math.max(1500, (dist / speed) * 1000);

   // Transition set karo
   spider.style.transition = `left ${duration}ms linear, top ${duration}ms linear`;
   spider.style.left = tx + "px";
   spider.style.top  = ty + "px";

   spider.dataset.x = tx;
   spider.dataset.y = ty;

   setTimeout(() => {

      // Agar bahar gaya toh — gayab karo, doosri side se wapas laao
      const outLeft  = tx < -size;
      const outRight = tx > W + size;
      const outTop   = ty < -size;
      const outBot   = ty > H + size;

      if (outLeft || outRight || outTop || outBot) {

         // Transition band karo taaki teleport ho sake
         spider.style.transition = "none";

         // Opposite side se wapas aao
         let newX, newY;

         if (outLeft) {
            newX = W + size;
            newY = Math.random() * H;
         } else if (outRight) {
            newX = -size;
            newY = Math.random() * H;
         } else if (outTop) {
            newX = Math.random() * W;
            newY = H + size;
         } else {
            newX = Math.random() * W;
            newY = -size;
         }

         spider.style.left = newX + "px";
         spider.style.top  = newY + "px";
         spider.dataset.x  = newX;
         spider.dataset.y  = newY;

         // Thodi der ruko phir dobara move karo
         setTimeout(() => animateSpider(spider), 300);

      } else {

         // Andar hai toh seedha next move
         const pause = 500 + Math.random() * 1000;
         setTimeout(() => animateSpider(spider), pause);

      }

   }, duration + 50);

}

window.addEventListener("load", () => {

   spiders.forEach((spider, i) => {

      const W = window.innerWidth;
      const H = window.innerHeight;

      // Har spider alag jagah se shuru ho
      const startX = Math.random() * W;
      const startY = Math.random() * H;

      spider.style.transition = "none";
      spider.style.left = startX + "px";
      spider.style.top  = startY + "px";
      spider.dataset.x  = startX;
      spider.dataset.y  = startY;

      // Alag alag time pe shuru ho taaki sab ek saath na chale
      setTimeout(() => animateSpider(spider), i * 600);

   });

});
// WhatsApp Group Link (YOUR LINK)
const whatsappLink = "https://chat.whatsapp.com/GlWp1JeOFc3IOd0bMAiX0S";

/* OPEN / CLOSE FORM */
let btn = document.getElementById("joinBtn");
let form = document.getElementById("joinForm");

btn.onclick = function () {
  form.style.display = form.style.display === "block" ? "none" : "block";
};

/* DRAG FEATURE */
let isDown = false, offsetX, offsetY;

btn.addEventListener("mousedown", (e)=>{
  isDown = true;
  offsetX = e.clientX - btn.offsetLeft;
  offsetY = e.clientY - btn.offsetTop;
  btn.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e)=>{
  if(!isDown) return;
  btn.style.left = (e.clientX - offsetX) + "px";
  btn.style.top = (e.clientY - offsetY) + "px";
  btn.style.bottom = "auto";
  btn.style.right = "auto";
});

document.addEventListener("mouseup", ()=>{
  isDown = false;
  btn.style.cursor = "grab";
});

/* SUBMIT FUNCTION */
function joinSubmit(){

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let interest = document.getElementById("interest").value;

  if(!name || !phone || !address || !interest){
    alert("⚠️ Please fill all fields");
    return;
  }

  // OPEN WHATSAPP GROUP
  window.open(whatsappLink, "https://chat.whatsapp.com/GlWp1JeOFc3IOd0bMAiX0S");
}

const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

document.querySelector(".next").onclick = nextSlide;
document.querySelector(".prev").onclick = prevSlide;

// 5 second auto slide
setInterval(nextSlide, 5000);

showSlide(current);