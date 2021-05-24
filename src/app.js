"use strict"; // here we go again
import greet from "./js/greet.js";
// main stilius
import "./css/main.css";
// paveikslelis
import fbLogo from "./img/facebook.svg";
import pngTest from "./img/png-test.png";

console.log("greet fn", greet("its a monday today"));

function addImageTo(importedImage) {
  const imgEl = document.createElement("img");
  imgEl.src = importedImage;
  document.body.append(imgEl);
}

addImageTo(fbLogo);
addImageTo(pngTest);
