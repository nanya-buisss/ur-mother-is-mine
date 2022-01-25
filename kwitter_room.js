var firebaseConfig = {
      apiKey: "AIzaSyAIBu7Vh74FCNeCt5EpvZVhmDP7f-29750",
      authDomain: "kwitter-2-14088.firebaseapp.com",
      databaseURL: "https://kwitter-2-14088-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-14088",
      storageBucket: "kwitter-2-14088.appspot.com",
      messagingSenderId: "24827489361",
      appId: "1:24827489361:web:fadb53346306ffed6a9c70"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
