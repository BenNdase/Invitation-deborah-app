// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //   apiKey: "YOUR_API_KEY",
  //   authDomain: "YOUR_AUTH_DOMAIN",
  //   projectId: "YOUR_PROJECT_ID",
  //   storageBucket: "YOUR_STORAGE_BUCKET",
  //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  //   appId: "YOUR_APP_ID"
  apiKey: "AIzaSyDO62kaNiNxDg-Nyg41-BLGiIBxsLQm5NU",
  authDomain: "invitation-deborah-app.firebaseapp.com",
  projectId: "invitation-deborah-app",
  storageBucket: "invitation-deborah-app.appspot.com",
  messagingSenderId: "811568762546",
  appId: "1:811568762546:web:73d129b22f8f6b95ec83ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
