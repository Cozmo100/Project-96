function LogIn(){
    Uname = document.getElementById('Username').value;

    localStorage.setItem("USERNAME",Uname);

    window.location = "kwitter_room.html"
}

