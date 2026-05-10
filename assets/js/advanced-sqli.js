function setPayload(payload){

document.getElementById("username").value = payload;

}

function log(msg){

const terminal = document.getElementById("terminal");

terminal.innerHTML += "<br>" + msg;

terminal.scrollTop = terminal.scrollHeight;

}

function clearLab(){

document.getElementById("username").value = "";
document.getElementById("password").value = "";

document.getElementById("queryBox").innerHTML =
"SELECT * FROM users WHERE username='admin' AND password='123';";

document.getElementById("resultBox").innerHTML =
"[*] Waiting for payload...";

document.getElementById("terminal").innerHTML =
"[+] SQLi Lab Reset...";

}

function runLab(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

const type =
document.getElementById("labType").value;

const query =
`SELECT * FROM users WHERE username='${username}' AND password='${password}'`;

document.getElementById("queryBox").innerText = query;

const result =
document.getElementById("resultBox");

log("[*] Payload received: " + username);

if(username.includes("OR") || username.includes("--")){

result.innerHTML = `
<span class="success">
[+] Authentication Bypass Successful
</span>
`;

log("[+] Access granted");

}
else if(username.includes("UNION")){

result.innerHTML = `
<span class="warning">
[+] UNION Injection Simulated
</span>
`;

log("[+] Database dump simulated");

}
else if(username.includes("CONVERT")){

result.innerHTML = `
<span class="fail">
[!] SQL Error Revealed
</span>
`;

log("[!] Error-based SQLi triggered");

}
else if(username.includes("SUBSTRING")){

result.innerHTML = `
<span class="warning">
[+] Blind SQLi TRUE response
</span>
`;

log("[+] Blind SQLi condition TRUE");

}
else{

result.innerHTML = `
<span class="fail">
[-] Login Failed
</span>
`;

log("[-] Query returned 0 rows");

}

}