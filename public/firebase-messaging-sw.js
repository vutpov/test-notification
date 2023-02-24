importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBHHCZWxbJRAvyLIesoKAB4eP1m0720gkU",
  authDomain: "test-notification-4a882.firebaseapp.com",
  projectId: "test-notification-4a882",
  storageBucket: "test-notification-4a882.appspot.com",
  messagingSenderId: "701629392288",
  appId: "1:701629392288:web:5c1349bcf52ecdd1f0f0c5",
});
const messaging = firebase.messaging();
