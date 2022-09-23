let button = document.querySelector('#button');

button.onclick = () => {
    let userName = document.querySelector('#user').value;
    let password = document.querySelector('#password').value;

    let defaultUserName = "admin";
    let defaultPassword = "root";

    if (!userName || !password) {
        alert('Your username and password cannot be empty.')
        return;
    }
    if (userName.length < 3 || password < 3) {
        alert('Your username and password should have 3 or more characters.')
        return;
    }

    if (userName == 'admin' && password == 'root') {
      window.location.replace('home.html')
    } else {
        alert('Your username and password is incorrect.')
    }
}