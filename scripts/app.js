'use strict'
const output = document.querySelector('#output')

function displayHand (html) {
  output.innerHTML = html
}

let html = "<h2>Rendered</h2>"

displayHand(html)
