let heading = document.getElementById("heading1");
heading.textContent = "My Student Profile";

let studentName = document.getElementsByClassName("name");
studentName[0].style.color = "blue";

let messages = document.querySelectorAll(".message");

messages.forEach(function(message) {
    message.style.color = "green";
});

document.body.style.backgroundColor = "lightgray";

let button = document.getElementById("colorButton");

button.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

let link = document.getElementById("googleLink");

let linkAddress = link.getAttribute("href");

console.log(linkAddress);

link.setAttribute("target", "_blank");

let box = document.getElementById("box");

box.classList.add("active");

let hasActive = box.classList.contains("active");

console.log(hasActive);

console.log(box.parentElement);