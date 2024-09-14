import { getQueryVariable, setQueryVariable } from "../util";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { db } from "../firebase.js";

let title, city, country, date, time, description;

composeForm = document.getElementById("compose-form");

composeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // get user info
    const title = document.getElementById("title").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const description = document.getElementById("description").value;

    
});