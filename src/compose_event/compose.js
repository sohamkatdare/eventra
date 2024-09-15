import { addDoc, collection, getDoc, doc } from "firebase/firestore";
import { app, db } from "../firebase_init.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";


document.getElementById("submit-button").onclick = async (event) => {
    event.preventDefault();

    let auth = getAuth(app);

    onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        let docSnap = await getDoc(doc(db, 'users', uid));

        console.log("hello")
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

        docSnap.data().events.push(docRef.id)
        
        window.location.replace("/org_home/");
    } else {
        window.location.replace("../");
    }
});

};