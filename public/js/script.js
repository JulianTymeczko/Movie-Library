//let isLoggedIn = true;


// let source = document.getElementById("navbar-template").innerHTML;
//let template = Handlebars.compile(source);


//let context = { isLoggedIn: isLoggedIn };
//let html = template(context);


//document.querySelector(".navbar").innerHTML = html


let signup = document.getElementById("signup-form");
signup.addEventListener('submit', function(event) {
    event.preventDefault();
    // First we GRAB references or DATA
    let emailInput = document.getElementById('email').value;
    let usernameInput = document.getElementById('username').value;
    let passwordInput = document.getElementById('password').value;
    let confirmInput = document.getElementById('confirm').value;

    console.log("Data: ", email, username, password, confirm)
    // SECOND we SEND that info to the SERVER (API route)

    //-->  run some vaidation 
    // check if CONFRIM == PASSWORD


   fetch('/api/users', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email: emailInput,
        username: usernameInput,
        password: passwordInput,
    })
   })
});