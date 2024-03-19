function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function playGifOne() {
    var projectoneDiv = document.querySelector('.project-one');
    projectoneDiv.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/project-1.gif')";
}

function pauseGifOne() {
    var projectoneDiv = document.querySelector('.project-one');
    projectoneDiv.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/project-1.png')";
}
function playGifTwo() {
    var projecttwoDiv = document.querySelector('.project-two');
    projecttwoDiv.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/project-2.gif')";
}

function pauseGifTwo() {
    var projecttwoDiv = document.querySelector('.project-two');
    projecttwoDiv.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/project-2.png')";
}
function playGifThree() {
    var projectthreeDiv = document.querySelector('.project-three');
    projectthreeDiv.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/project-3.gif')";
}

function pauseGifThree() {
    var projectthreeDiv = document.querySelector('.project-three');
    projectthreeDiv.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/project-4.png')";
}

