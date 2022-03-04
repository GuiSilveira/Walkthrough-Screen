"use strict";

// Elements
const btnSwitch = document.querySelectorAll(".btns");
const btnStarted = document.querySelector(".btn");
const imgLogo = document.querySelector(".image");
const header = document.querySelector(".title");
const paragraph = document.querySelector(".text");
const style = document.getElementById("style");

// Variables
let activeBtn = 0;

const pageInfo = [
  {
    imgCode: "./images/Learn.svg",
    pageName: "Learn",
    codeParagraph:
      "Practice with real exercices and projects for your portfolio",
    styleCode: "./css/learn.css",
  },
  {
    imgCode: "./images/Samples.svg",
    pageName: "Code",
    codeParagraph:
      "Learn how to code great video game interfaces for different devices",
    styleCode: "./css/code.css",
  },
  {
    imgCode: "./images/Collect.svg",
    pageName: "Collect",
    codeParagraph:
      "Collect case studies of the best teachers in the game industry",
    styleCode: "./css/collect.css",
  },
];

const changePageStyle = function (img, pageName, paragraphPage, stylePage) {
  imgLogo.src = img;
  imgLogo.alt = pageName;
  header.textContent = pageName;
  paragraph.textContent = paragraphPage;
  style.href = stylePage;
};

const changeButton = function (btn) {
  btnSwitch[activeBtn].classList.remove("active");
  activeBtn = btn;
  btnSwitch[activeBtn].classList.add("active");
};

for (let i = 0; i < btnSwitch.length; i++) {
  btnSwitch[i].addEventListener("click", function () {
    changeButton(i);

    changePageStyle(
      pageInfo[i].imgCode,
      pageInfo[i].pageName,
      pageInfo[i].codeParagraph,
      pageInfo[i].styleCode
    );
  });
}
