import { template } from "handlebars";
import colorsTemplate from "../templates/colors.hbs";
import colors from "../data/colors.json";
const body = document.querySelector("body");

const colorBox = document.querySelector(".colors__box");

const colorsList = colorsTemplate({ colors });

const text = document.querySelector(".text");

body.insertAdjacentHTML("beforeend", colorsList);

const colorsPallete = document.querySelector(".colors");

colorsPallete.addEventListener("click", selectColor);

function selectColor(event) {
  if (event.target.nodeName === "DIV") {
    text.style.color = event.target.style.backgroundColor;
  }
}
