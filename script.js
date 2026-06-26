const sections = document.querySelectorAll("section");
const numbers = document.querySelectorAll(".nav-number");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const top = section.offsetTop - 200;

if(pageYOffset >= top){
current = section.getAttribute("id");
}

});

numbers.forEach(num=>{
num.classList.remove("active");
});

if(current==="home"){
numbers[0].classList.add("active");
}

if(current==="about"){
numbers[1].classList.add("active");
}

if(current==="projects"){
numbers[2].classList.add("active");
}

if(current==="contact"){
numbers[3].classList.add("active");
}

if(current==="thankyou"){
numbers[4].classList.add("active");
}

});