// Add the navbar controls
let widthMatch = window.matchMedia("(max-width: 480px)").matches;
const navBar = document.getElementById("navbar")
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (!widthMatch) {
    if (prevScrollPos > currentScrollPos) {
      navBar.style.top = "0";
    } else {
      navBar.style.top = "-400px";
    }
  prevScrollPos = currentScrollPos;
  }
}

// Add navbar mobile functionality
const mobileMenu = document.getElementById("mobile-menu");

mobileMenu.onclick = function() {
  if (navBar.style.display === 'block') {
    navBar.style.display = 'none';
  } else {
    navBar.style.display = "block";
  }
}


// Add functionality to JS gallery
const choreBotMini = document.getElementById("chore-bot-mini");
const customMilkFloatsMini = document.getElementById("custom-milk-floats-mini");
const mixedMessagesMini = document.getElementById("mixed-messages-mini");
const productLandingMini = document.getElementById("product-landing-page-mini");
const technicalPageMini = document.getElementById("techical-document-mini");
const tributePageMini = document.getElementById("tribute-page-mini");
const villageGreenMini = document.getElementById("village-green-mini");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let slideIndex = 1;


function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  let minis = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  } if (n < 1 ) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < minis.length; i++) {
    minis[i].className = minis[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  minis[slideIndex-1].className += "active";
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



prev.onclick = () => plusSlides(-1);
next.onclick = () => plusSlides(1);
choreBotMini.onclick = () => currentSlide(1);
customMilkFloatsMini.onclick = () => currentSlide(2);
mixedMessagesMini.onclick = () => currentSlide(3);
productLandingMini.onclick = () => currentSlide(4);
technicalPageMini.onclick = () => currentSlide(5);
tributePageMini.onclick = () => currentSlide(6);
villageGreenMini.onclick = () => currentSlide(7);

//change img sizes based on mobi or notify

const choreBot = document.getElementById("chore-bot");
const customMilkFloats = document.getElementById("milk-floats");
const mixedMessages = document.getElementById("mixed-messages");
const productLanding = document.getElementById("product-landing");
const technicalPage = document.getElementById("technical-page");
const tributePage = document.getElementById("tribute-page");
const villageGreen = document.getElementById("village-green");
let widthMedia = window.matchMedia("(max-width: 480px)");

function screenSize(){
  if (widthMatch) {
  choreBot.src = "resources/images/JS-gallery-images/mobile-images/chore-bot-mobi.jpg";
  customMilkFloats.src = "resources/images/JS-gallery-images/mobile-images/custom-milk-floats-mobi.jpg";
  mixedMessages.src = "resources/images/JS-gallery-images/mobile-images/mixed-messeges-mobi.jpg";
  productLanding.src = "resources/images/JS-gallery-images/mobile-images/product-landing-mobi.jpg";
  technicalPage.src = "resources/images/JS-gallery-images/mobile-images/technical-page-mobi.jpg";
  tributePage.src = "resources/images/JS-gallery-images/mobile-images/tribute-page-mobi.jpg";
  villageGreen.src = "resources/images/JS-gallery-images/mobile-images/village-green-pres-mobi.jpg";
  choreBotMini.src = "resources/images/JS-gallery-images/mobile-images/chore-bot-mobi.jpg";
  customMilkFloatsMini.src = "resources/images/JS-gallery-images/mobile-images/custom-milk-floats-mobi.jpg";
  mixedMessagesMini.src = "resources/images/JS-gallery-images/mobile-images/mixed-messeges-mobi.jpg";
  productLandingMini.src = "resources/images/JS-gallery-images/mobile-images/product-landing-mobi.jpg";
  technicalPageMini.src = "resources/images/JS-gallery-images/mobile-images/technical-page-mobi.jpg";
  tributePageMini.src = "resources/images/JS-gallery-images/mobile-images/tribute-page-mobi.jpg";
  villageGreenMini.src = "resources/images/JS-gallery-images/mobile-images/village-green-pres-mobi.jpg";
  }
}

window.onload = () => screenSize();
window.onchange = () => screenSize();

// contact page > Add form controls depending on input

const inputYes = document.getElementById("yes");
const inputNo = document.getElementById("no");
const project = document.getElementById("what-project");
const whatTalkAbout = document.getElementById("what-talk-about");
const options = document.getElementById("dropdown");
const otherOption = document.getElementById("other-option");


inputYes.checked = false;
inputNo.checked = false;


function checkInput() {
  if (inputNo.checked) {
    whatTalkAbout.style.display = "block";
    project.style.display = "none";
  } else if (inputYes.checked) {
    project.style.display = "block";
    whatTalkAbout.style.display = "none";
  }
}

function other() {
  if (options.value === "other") {
    otherOption.style.display = "block";
  } else {
    otherOption.style.display = "none";
  }
}

inputYes.onclick = function() {
  checkInput();
}

inputNo.onclick = function() {
  checkInput();
}

options.onchange = function() {
  other()
}