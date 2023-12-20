import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCOBfrNbLJa-ZKPzt8MNFSPbX79S0hrHTg",
  authDomain: "fir-job-task.firebaseapp.com",
  projectId: "fir-job-task",
  storageBucket: "fir-job-task.appspot.com",
  messagingSenderId: "938772192931",
  appId: "1:938772192931:web:ca1dca3e20befc57652916",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
