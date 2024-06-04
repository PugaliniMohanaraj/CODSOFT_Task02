// menu

function myFunction() {
  var x = document.getElementById("nav-menu");
  if (x.className === "nav__menu") {
    x.className += " responsive";
  } else {
    x.className = "nav__menu";
  }
}


var typed = new Typed(".text", {
    strings: ["Software Engineer", "Frontend Developer","Backend Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// contact

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
