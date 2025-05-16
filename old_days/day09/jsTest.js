const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

const userName = "Anonymous user";
const class_hidden = "hidden";

let time = new Date().getHours();
let msg = "";

function greetings(name){
if(time<11){
    msg = `Good morning ${name},\n it's ${time} o'clock`;
    greeting.innerText = msg;
} else if((time >= 11)&&(time<16)){
    msg = `Hi ${name},\n it's ${time} o'clock`;
    greeting.innerText = msg;
}}

function loginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.toggle(class_hidden);
    greetings(userName);
}
greetings(userName);
loginForm.addEventListener("submit", loginSubmit);