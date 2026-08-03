import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase,
ref,
set
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {
apiKey: "AIzaSyDG2_YoKzfwf9FHb4foa0Cjs8yTVPmCM",
authDomain: "cachecache-467c.firebaseapp.com",
databaseURL: "https://cachecache-467c-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "cachecache-467c",
storageBucket: "cachecache-467c.firebasestorage.app",
messagingSenderId: "662374954362",
appId: "1:662374954362:web:f67e817d76f56dc73612c3"
};


const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


export function sendPosition(lat,lng){

    console.log("Envoi Firebase :", lat, lng);

    set(ref(db,"position"),{
    lat: lat,
    lng: lng
})
.then(()=>{
    console.log("Envoyé !");
})
.catch((error)=>{
    console.error("Erreur Firebase :", error);
});

}
