/* =========================
   MATRIX EFFECT
========================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01HACKSQL";
const arr = letters.split("");

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for(let x = 0; x < columns; x++){
  drops[x] = 1;
}

function draw(){

  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px monospace";

  for(let i = 0; i < drops.length; i++){

    const text = arr[Math.floor(Math.random() * arr.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if(drops[i] * fontSize > canvas.height && Math.random() > 0.975){
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 35);

/* =========================
   PAYLOAD SYSTEM
========================= */

let count = 0;

function setPayload(payload){
  document.getElementById("payloadInput").value = payload;
}

function runPayload(){

  const payload = document.getElementById("payloadInput").value;

  if(payload.trim() === ""){
    return;
  }

  count++;

  const table = document.getElementById("tableBody");

  const row = `
    <tr>
      <td>${count}</td>
      <td>${new Date().toLocaleTimeString()}</td>
      <td>${payload}</td>
      <td style="color:#00ff88;">SUCCESS</td>
      <td>Injection Simulated</td>
    </tr>
  `;

  table.innerHTML += row;

  document.getElementById("queryBox").innerHTML = `
SELECT * FROM users
WHERE username='admin'
AND password='${payload}';
  `;

  const log = document.getElementById("terminalLog");

  log.innerHTML += `
    <p>[*] Testing payload...</p>
    <p>[+] Payload Accepted</p>
    <p>[+] Simulated SQL Injection Successful</p>
    <hr>
  `;

}

function clearLogs(){

  document.getElementById("tableBody").innerHTML = "";

  document.getElementById("terminalLog").innerHTML = `
  <p>[*] Waiting for payload...</p>
  `;

  count = 0;
}