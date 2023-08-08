

//firebase stuff - ended at line 12 practice.js [practice C94]

var firebaseConfig = {
      apiKey: "AIzaSyDEc2Q-uxHP5dUZlE0IGq0xDwcPbueYk-w",
      authDomain: "chat-app-w-scripting.firebaseapp.com",
      databaseURL: "https://chat-app-w-scripting-default-rtdb.firebaseio.com",
      projectId: "chat-app-w-scripting",
      storageBucket: "chat-app-w-scripting.appspot.com",
      messagingSenderId: "7917915204",
      appId: "1:7917915204:web:d5f5aef389e56474544011"
    };

    firebase.initializeApp(firebaseConfig);


//---other code------------------------------------------------------------------------------------//


wun = localStorage.getItem("USERNAME");
document.getElementById('welcome').innerHTML = "Welcome " + wun;
//ADD YOUR FIREBASE LINKS HERE



function LOGOUT()
{
      localStorage.removeItem("USERNAME");
      window.location = "index.html"
};

//---AKA addroom()---//
function NewR()
{
      newroom = document.getElementById("Rname").value;
      firebase.database().ref("/").child(newroom).update
      ({
            purpose : "Adding Room Name"
      })

      
      localStorage.setItem("ROOM",newroom);
      window.location = "kwitter_msg.html"

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     r = "<div id="+Room_names+" onclick='Redirect(this.id)'>#"+Room_names+"</div><hr>"
     document.getElementById('output').innerHTML += r;
     //End code
     });
});
}
getData();