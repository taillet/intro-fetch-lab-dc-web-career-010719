// Write your numbers code in this file!
let year = 2019;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById(`number-one`).addEventListener('click', oneFacts)
  document.getElementById(`pick-a-number`).addEventListener('change', fetchNumber)
  fetchYear(year)
  setInterval(fetchYear, 5000)
  document.getElementById(`all-numbers-button`).addEventListener('click', fetchHundred)
})

function fetchHundred() {
    for (i = 0; i < 99; i++) {
  let random = Math.floor((Math.random() * 10000000) + 1);
  fetch(`http://numbersapi.com/${random}/trivia`)
  .then(res => res.text())
  .then(fact=> renderHundred(fact))
    }
}

function renderHundred(fact) {
  let node = document.createElement("p");
  node.innerHTML = fact;
  document.querySelector("#all-the-numbers").appendChild(node)
}

function fetchYear() {
  fetch(`http://numbersapi.com/${--year}/trivia`)
  .then(res => res.text())
  .then(fact=> renderYearlyFact(fact))
}

function renderYearlyFact(fact) {
  document.querySelector("#year-history").innerHTML = ""
  let node = document.createElement("p");
  node.innerHTML = fact;
  document.querySelector("#year-history").appendChild(node)
}

function oneFacts() {
  fetch('http://numbersapi.com/1/trivia')
  .then(res => res.text())
  .then(fact=> renderOne(fact))
}

function renderOne(fact){
  document.querySelector("#one-facts").innerHTML = ""
  let node = document.createElement("p");
  node.innerHTML = fact;
  document.querySelector("#one-facts").appendChild(node)
}

function fetchNumber(fact){
  if (!isNaN(fact.target.value)) {
    fetch(`http://numbersapi.com/${fact.target.value}/trivia`)
    .then(res => res.text())
    .then(fact=> renderNumber(fact))
  } else {
    renderNumber("That's not a number. Try again.")
  }
}

function renderNumber(fact){
  document.querySelector("#random-math-fact").innerHTML = ""
  let node = document.createElement("p");
  node.innerHTML = fact;
  document.querySelector("#random-math-fact").appendChild(node)
}
