
let formEle = document.getElementById('movie-form');
let userInput = document.getElementById('input');

formEle.addEventListener('submit', () => {
    // here is were we call our SERVER API
    fetch('/api/movies/:moveName', {
        method: 'GET',
    })

    // whatever method and ENDPOINT 
    fetch('/api/movies/', {
        method: 'POST',
        body: 'moveName'
    })
})