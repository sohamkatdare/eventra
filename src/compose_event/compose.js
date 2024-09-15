import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase_init.js";

console.log('hello')

document.getElementById("submit-button").onclick = async (event) => {
    event.preventDefault();

    console.log("hello")
    
    try {
        let docRef = await addDoc(collection(db, "events"), {
            title: document.getElementById("title").value,
            city: document.getElementById("city").value,
            country: document.getElementById("country").value,
            date: document.getElementById("date").value,
            time: document.getElementById("time").value,
            description: document.getElementById("description").value,
            announcements: [],
            favCount: 0
        });
        window.location.replace("/org_home/");
    } catch(e) {
        console.error("Document add threw error:", e);
    }
};