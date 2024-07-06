import { template } from "handlebars";
import colorsTemplate from "../templates/colors.hbs";
import colors from "../data/colors.json";
const body = document.querySelector("body");

const colorsList = colorsTemplate({ colors });

body.insertAdjacentHTML("beforeend", colorsList);
