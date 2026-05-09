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

window.addEventListener("load",()=>{

if(typingElement){
typeEffect();
}

});

