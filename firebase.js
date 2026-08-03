import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getDatabase,
  ref,
  set
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyDG2_YoKzfwwF9FHb4fohaOCjS8yTVPmCM",
  authDomain: "cachecache-467ce.firebaseapp.com",
  databaseURL: "https://cachecache-467ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cachecache-467ce",
  storageBucket: "cachecache-467ce.firebasestorage.app",
  messagingSenderId: "662374954362",
  appId: "1:662374954362:web:f67e817d76f56dc73612c3"
};



// Connexion Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


// Fonction pour envoyer une position
export function sendPosition(lat,lng){

  set(ref(db,"position"),{
    lat: lat,
    lng: lng,
    time: Date.now()
  });

}

