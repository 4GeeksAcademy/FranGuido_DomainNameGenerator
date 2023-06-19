/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

let adjective = ["kawaii", "thicc", "sticky"];
let noun = ["donuts", "mochi", "bubbletea"];
let domain = [".com", ".cr", ".int"];

for (let i = 0; i < adjective.length; i++) {
  for (let j = 0; j < noun.length; j++) {
    for (let k = 0; k < domain.length; k++) {
      let div = document.createElement("div");
      div.innerText = adjective[i] + noun[j] + domain[k];
      document.body.appendChild(div);
    }
  }
}

console.log("${adjective[i]}${noun[j]}${domain[k]}");
