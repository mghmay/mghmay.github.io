// Add the navbar controls

document.addEventListener("DOMContentLoaded", function() {
	let prevScrollPos = window.pageYOffset;
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
  		if (prevScrollPos > currentScrollPos) {
    		document.getElementById("navbar").style.top = "0";
  		} else {
    		document.getElementById("navbar").style.top = "-200px";
  	}
  	prevScrollPos = currentScrollPos;
}
});

// Add functionality to JS gallery
let choreBotMini = document.getElementById("chore-bot-mini");
let customMilkFloatsMini = document.getElementById("custom-milk-floats-mini");
let mixedMessagesMini = document.getElementById("mixed-messages-mini");
let productLandingPageMini = document.getElementById("product-landing-page-mini");
let techicalDocumentMini = document.getElementById("techical-document-mini");
let tributePageMini = document.getElementById("tribute-page-mini");
let villageGreenMini = document.getElementById("village-green-mini");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
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
productLandingPageMini.onclick = () => currentSlide(4);
techicalDocumentMini.onclick = () => currentSlide(5);
tributePageMini.onclick = () => currentSlide(6);
villageGreenMini.onclick = () => currentSlide(7);

// Add form controls depending on input

let inputYes = document.getElementById("yes");
let inputNo = document.getElementById("no");
let project = document.getElementById("what-project");
let whatTalkAbout = document.getElementById("what-talk-about");
let options = document.getElementById("dropdown");
let otherOption = document.getElementById("other-option");


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