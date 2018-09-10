const firebase = require("firebase");

var firebaseDB = firebase.initializeApp({
  apiKey: "AIzaSyARNRSOYgpvBMmwPfBwSs8mGQw__FszX6M",
  authDomain: "frontdb-3bfde.firebaseapp.com",
  databaseURL: "https://frontdb-3bfde.firebaseio.com",
  projectId: "frontdb-3bfde",
  storageBucket: "frontdb-3bfde.appspot.com",
  messagingSenderId: "262396219357"
});

exports.test = function(req, res) {
  firebaseDB
    .database()
    .ref("users/hello")
    .set({
      username: "hola",
      email: "como",
      profile_picture: "estas"
    });
  res.send("Greetings from the Test controller!");
};

exports.product_create = function(req, res) {};
