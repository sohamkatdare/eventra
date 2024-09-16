import { collection, query, where, orderBy, getDocs, doc, getDoc } from "firebase/firestore";
import { app, db } from "../firebase_init"
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const auth = getAuth(app);

const dateSort = document.getElementById("date-filter")

let locationFilter = "";

console.log(locationFilter.value)

const eventsList = document.getElementById("events-list")

let q;

document.getElementsByClassName('rsvp-button').onclick = (elem) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {

            docId = elem.parentNode.id;

            eventDoc = getDoc(doc(docId));
        
            docSnap.data().events.append(eventDoc);
        
            eventDoc.favCount += 1;
            
            const uid = user.uid; 
            let docSnap = await getDoc(doc(db, 'users', uid))
            console.log(docSnap)

            let fName = docSnap.data().firstName;
            let lName = docSnap.data().lastName;

            document.getElementById('name').innerHTML = `${fName} ${lName}`
    
        } else {
            window.location.replace("../");
        }
    });
}


if (locationFilter.value) {
    if (dateSort.value == "earliest") {
        try {
            q = query(collection(db, "events", where("city", "==", locationFilter.value), orderBy("date")));
        } catch (error) {
            console.error(error)
        }
    } else {
        try {
            q = query(collection(db, "events" , where("city", "==", locationFilter.value), orderBy("date", "desc")));
        } catch (error) {
            console.error(error)
        }
    }
} else {
    if (dateSort.value == "earliest") {
        
        q = query(collection(db, "events"), orderBy("date"));
    } else {
        try {
            q = query(collection(db, "events"), orderBy("date", "desc"));
        } catch (error) {
            console.error(error)
        }
    }
}

const template = document.getElementById("sample-event")

async function getQuerySnapshot(query) {
    const querySnapshot = await getDocs(query);

    querySnapshot.forEach((docItem) => {

        const clone = template.cloneNode(true);
    
        clone.children[0].id = docItem.id;
    
        const elements = clone.children[0].children[0].children;
    
        elements[0].innerHTML = docItem.data().title
        elements[1].innerHTML = `<p class="text-black">Date: ${docItem.data().date + ", " + docItem.data().time}</p>`
        elements[2].innerHTML = docItem.data().city + ', ' + docItem.data().country
        elements[3].innerHTML = docItem.data().description
        
        try {
            eventsList.innerHTML += clone.innerHTML;
        } catch (error) {
            console.error(error)
        }
        
    });
}



getQuerySnapshot(q)
