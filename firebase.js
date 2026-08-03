
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getDatabase,
  ref,
  set
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {
  apiKey: "TON_API_KEY",
  authDomain: "TON_PROJET.firebaseapp.com",
  databaseURL: "https://TON_PROJET-default-rtdb.firebaseio.com",
  projectId: "TON_PROJET"
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
