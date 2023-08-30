async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    console.log("Login Data: ", username, password);
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/movies');
      } else {
        alert(response.statusText);
      }
    }
  }
  

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
/* document.querySelector('#login-form').addEventListener('submit', function(event) {
    // callback function logic --> capturing the user input
});
*/