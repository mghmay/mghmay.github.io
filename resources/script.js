document.addEventListener("DOMContentLoaded", function() {
	var prevScrollPos = window.pageYOffset;
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