// Write your swapi code in this file!

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById(`crawlBtn`).addEventListener('click', fetchCrawl)
  document.getElementById(`planetForm`).addEventListener('submit', fetchPlanets)
  fetchDroid(2)
  fetchDroid(3)
 })

function fetchDroid(num) {
  fetch(`https://swapi.co/api/people/${num}`)
  .then(res => res.json())
  .then(json => {
    renderDroid(json,num)
  });
}

function renderDroid(droid,num) {
  document.querySelector(`#droid-${num}`).innerHTML = `Name: ${droid.name} Height: ${droid.height} Mass: ${droid.mass}`
}

function fetchCrawl() {
  fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(json => {
    renderCrawl(json.opening_crawl)
  });
}

function renderCrawl(crawl) {
  document.querySelector("#crawlDiv").innerHTML = ""
  let opening = document.createElement("P");
  opening.innerHTML = crawl;
  document.querySelector("#crawlDiv").appendChild(opening)
}

function fetchPlanets(e) {
  e.preventDefault()
  fetch(`https://swapi.co/api/planets/${e.target.children[0].value}`)
  .then(res => res.json())
  .then(json => {
    renderPlanets(json)
  })
}

function renderPlanets(planet) {
  document.querySelector("#planetData").innerHTML = ""
  let node = document.createElement("P");
  node.innerHTML = planet.name;
  document.querySelector("#planetData").appendChild(node)
}
