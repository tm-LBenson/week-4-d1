"use strict";

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const label = document.getElementById("label");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
let slideNumber = 1;

function showSlide1() {
  slide1.classList.remove("hidden");
  slide2.classList.add("hidden");
  slide3.classList.add("hidden");
  label.textContent = "Clouds";
}

function showSlide2() {
  slide2.classList.remove("hidden");
  slide1.classList.add("hidden");
  slide3.classList.add("hidden");
  label.textContent = "Floor";
}

function showSlide3() {
  slide3.classList.remove("hidden");
  slide2.classList.add("hidden");
  slide1.classList.add("hidden");
  label.textContent = "Road";
}

function render() {
  if (slideNumber === 1) {
    showSlide1();
  } else if (slideNumber === 2) {
    showSlide2();
  } else {
    showSlide3();
  }
}

prevButton.addEventListener("click", () => {
  slideNumber = slideNumber - 1;
  // slideNumber--
  if (slideNumber < 1) {
    slideNumber = 3;
  }
  render();
});

nextButton.addEventListener("click", () => {
  slideNumber = slideNumber + 1;
  // slideNumber++
  if (slideNumber > 3) {
    slideNumber = 1;
  }
  render();
});

render();
