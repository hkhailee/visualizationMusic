
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-analytics.js";
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-auth.js";
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-database.js";
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-storage.js";
import "https://www.gstatic.com/firebasejs/8.9.1/firebase-analytics.js";
    
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBoEu0BjqhNHE2phEooJq7ItSpSv3b9P-E",
    authDomain: "vismusickie.firebaseapp.com",
    databaseURL: "https://vismusickie-default-rtdb.firebaseio.com",
    projectId: "vismusickie",
    storageBucket: "vismusickie.appspot.com",
    messagingSenderId: "510685000490",
    appId: "1:510685000490:web:b910aa6a0e7ea514f4a453",
    measurementId: "G-BGTG4MZSD7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// user authentication
//TODO:
var email = "k@mail.com";
var password = "887581";

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


