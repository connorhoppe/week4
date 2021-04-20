let pageTitleElement = document.querySelector(`.page-title`)
pageTitleElement.innerHTML = `Movies to Watch!`

let moviesList = document.querySelector(`.movies-to-watch`)
moviesList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
    <li>Star Wars</li>
    <li>Apollo 13</li>
`)