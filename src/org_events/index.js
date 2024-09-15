import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "../firebase_init.js";
let auth = getAuth(app);

let events = [];

onAuthStateChanged(auth, async (user) => {
if (user) {
    const uid = user.uid;
    let docSnap = await getDoc(doc(db, 'users', uid));

    events = docSnap.data().events

    let orgName = docSnap.data().orgName

    document.getElementById('name').innerHTML = `${orgName}`;
} else {
    window.location.replace("../");
}});

const eventList = document.getElementById('events-list')

events.forEach (eventId, () => {

  eventSnap = getDoc(doc(db, "event", eventId))

  const eventElement = document.createElement('div');
  eventElement.classList.add('bg-white', 'shadow', 'p-4', 'rounded-md');
  eventElement.innerHTML = `
    <h2 class="text-xl font-semibold text-black">${eventSnap.data().title}</h2>
    <p class="text-black">Date: ${eventSnap.data().date}</p>
    <p class="text-black">Location: ${eventSnap.data().city + ", " + eventSnap.data().country}</p>
    <p class="text-black mt-2">${eventSnap.data().description}</p>
  `;
});

// Get the modal and button elements
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Close the modal when the 'x' is clicked
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

