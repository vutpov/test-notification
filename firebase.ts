// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBHHCZWxbJRAvyLIesoKAB4eP1m0720gkU",
  authDomain: "test-notification-4a882.firebaseapp.com",
  projectId: "test-notification-4a882",
  storageBucket: "test-notification-4a882.appspot.com",
  messagingSenderId: "701629392288",
  appId: "1:701629392288:web:5c1349bcf52ecdd1f0f0c5",
  measurementId: "G-Z9N8MZDT6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
const getFcmToken = async () => {
  const token = await getToken(messaging, {
    vapidKey:
      "BNSzq95JURAaaHCCK3y2IKlmzdfXsw5BavRw3Brz8C8Fnkf8S4CG-2Dz3emfxK7nCn8ApqmTFunhITM_PBKt_xU",
  });

  return token;
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    }
  });
}

export { app, analytics, messaging, requestPermission, getFcmToken };
