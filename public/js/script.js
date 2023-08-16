let isLoggedIn = true;


let source = document.getElementById("navbar-template").innerHTML;
let template = Handlebars.compile(source);


let context = { isLoggedIn: isLoggedIn };
let html = template(context);


document.querySelector(".navbar").innerHTML = html