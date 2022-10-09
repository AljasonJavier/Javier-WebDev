let button = document.querySelector('#button')


button.onclick = () =>{
    let userName = document.querySelector('#user').value.toLowerCase();
    let passWord = document.querySelector('#password').value.toLowerCase();

    if(!userName || !passWord){
        alert('Username or passowrd Cannot Be empty');
        return;
    }else if (userName.length < 3 || passWord.length < 3){
        alert('Username or password should at least have 3 character or more');
        return;
    }
    if (userName == "admin" && passWord =="root"){
       window.location.replace('adding.html') 
    } else{
        alert('Incorrect username or password');
    }
}