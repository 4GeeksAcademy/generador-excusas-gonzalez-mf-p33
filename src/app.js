/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function aleatorio(lista) {
    let numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio] + " ";
  }

  //who + action + what + when
  let who = ["Taylor swift", " Ozuna ", "Ant-man", "Mario Bros"];
  let action = ["vomito", "se comio", "reputo", "programo"];
  let what = ["mi papelera", "el escalimetro", "un calvo"];
  let when = [
    "despues de sentarse en el carro",
    "cuando estaba en el eras tour",
    "mientras estaba en clase",
    "antes de pisar clavos",
    "mientras queria jugar valorant"
  ];

  let excuse =
    aleatorio(who) + aleatorio(action) + aleatorio(what) + aleatorio(when);

  let elementExcuse = window.document.querySelector("#excuse");

  elementExcuse.innerHTML = excuse;

  let excuseButton = window.document.querySelector("#generate-excuse");

  excuseButton.addEventListener("click", () => {
    let newExcuse =
      aleatorio(who) + aleatorio(action) + aleatorio(what) + aleatorio(when);
    elementExcuse.innerHTML = newExcuse;
  });
};
