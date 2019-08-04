import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDPkB0zaukudmscsd0p7FmMESffwACzzEs",
  authDomain: "lunar-pact-233908.firebaseapp.com",
  databaseURL: "https://lunar-pact-233908.firebaseio.com",
  projectId: "lunar-pact-233908",
  storageBucket: "lunar-pact-233908.appspot.com",
  messagingSenderId: "777544787406"
};

firebase.initializeApp(config);
firebase.firestore();

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
  firebase
};
