import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase_init'

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



const auth = getAuth();
console.log(auth);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    let docSnap = await getDoc(doc(db, 'users', uid));

    let orgName = docSnap.data().orgName
  } else {
    window.location.replace("../");
  }

  document.getElementById('name').innerHTML = `${orgName}`
});