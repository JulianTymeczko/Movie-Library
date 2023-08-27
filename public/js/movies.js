
console.log('Hi There!');

let formEle = document.getElementById('movie-search');
let userInput = document.getElementById('choice');
let movieContainer = document.querySelector('.movie-container');

formEle.addEventListener('submit', (event) => {
    event.preventDefault();
    // here is were we call our SERVER API

    // console.log("User Data: ", userInput.value);
    let userData = userInput.value
    console.log("User: ", userData);
   
    fetch(`/api/movies/${userData}`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log("Data From Database: ", data);

        // here we need to Update our DOM
        // dynamically create some HTML tags
        let movieHTML = document.createElement('p');
        movieHTML.textContent = data.title;
        movieHTML.setAttribute('class', 'movie-title');

        // ADD the NEW CONTENT
        movieContainer.append(movieHTML);

        console.log("Tag: ", movieHTML);
    })
    .catch(error => {
        console.log('Error: ', error)
        throw error;
    })
    /*
    // whatever method and ENDPOINT 
    fetch('/api/movies/', {
        method: 'POST',
        body: 'moveName'
    })
    */
})