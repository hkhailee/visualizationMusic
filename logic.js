
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-analytics.js";
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-auth.js";
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-database.js";
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-storage.js";
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-analytics.js";
import "fb_info.js";



// user authentication
//TODO:
var email = "k@mail.com";
var password = "665";

//playing with data
var userId = 123;
var name = "stephan grey"
function writeData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
    }, (error) => {
        if (error) {
            console.error("failed to upload data")
        } else {
            console.log("added data")
        }
    });
};


firebase.auth().signInAnonymously()
    .then(() => {
        writeData(userId, name, email);
        console.log("pushed data");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode + ":" + errorMessage);
    });


