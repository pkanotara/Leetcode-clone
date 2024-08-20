import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

const firebaseConfig = {
	apiKey:"AIzaSyCcTc1hrT2e7JSc3d5JbEMUSgbJQ3AzmlY",
	authDomain:"leetcode-6b75e.firebaseapp.com",
	projectId:"leetcode-6b75e",
	storageBucket:"leetcode-6b75e.appspot.com",
	messagingSenderId:"217390964713",
	appId:"1:217390964713:web:c2a11015906b9605bdf578",
	
	
};

// const app = !getApps.length ? initializeApp(firebaseConfig,"leetcode") : getApp("leetcode");
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
// firestore.enablePersistence();

export { auth, firestore, app };


