import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase_init"


const dateSort = document.getElementById("date-filter")

const locationFilter = document.getElementById("location-filter")

const eventList = document.getElementById("events-list")

let q;

if (locationFilter.value) {
    if (dateSort.value == "earliest") {
        q = query(collection(db, "events", where("city", "==", locationFilter.value), orderBy("date")));
    } else {
        q = query(collection(db, "events" , where("city", "==", locationFilter.value), orderBy("date", "desc")));
    }
} else {
    if (dateSort.value == "earliest") {
        q = query(collection(db, "events"), orderBy("date"));
    } else {
        q = query(collection(db, "events", orderBy("date", "desc")));
    }
}


const template = document.getElementById("sample-event")

const querySnapshot = await getDocs(q);

querySnapshot.forEach((docItem) => {
    const clone = template.content.cloneNode(true);
    const elements = clone.childNodes[0].children;
    elements[0].innerHTML = `<h2 class="text-xl font-semibold text-black">${docItem.data().title}</h2>`
    elements[1].innerHTML = `<p class="text-black">Date: ${docItem.data().date + ", " + docItem.data().time}</p>`
    elements[2].innerHTML = `<p class="text-black">Location: ${city + ', ' + country}</p>`
    elements[3].innerHTML = `<p class="text-black mt-2">${description}</p>`


    eventsList.appendChild(clone);
});
