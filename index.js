import Movie from "./Movie"
import { clearForm } from "./utils"

let movieLibrary = []


const newMovieBtn = document.querySelector('#new-movie-btn')
newMovieBtn.addEventListener('click', () => {
    document.querySelector('#form').style.display = 'block'
})

function addMovie() {
    let title = document.querySelector('#title').value
    let year = document.querySelector('#year').value
    let rating = document.querySelector('#rating').value
    let movie = new Movie(title, year, rating)
    movieLibrary.push(movie)
    console.log(movieLibrary)
}


function removeMovie(index) {
    movieLibrary.splice(index, 1);
    render()

}

function getMovieHtml() {
    let div = document.createElement('div')
    for (let i = 0; i < movieLibrary.length; i++) {
        let movie = movieLibrary[i]
        div.innerHTML = `
        <h1>${movie.title}</h1>
        <b>${movie.year}</b>
        <p>${movie.rating}</p>
        <button class="remove-btn" data-index="${i}" onclick='removeMovie(${i})'>Remove</button>
        `
        document.querySelector('#movie-list').appendChild(div)
    }

}
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    addMovie()
    clearForm()
    render()
})

function render() {
    getMovieHtml()
}

//



function removeBook(index) {
    movieLibrary.splice(index, 1);
    render()

}







