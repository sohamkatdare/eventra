import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase_init'

const auth = getAuth();
console.log(auth);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    let docSnap = await getDoc(doc(db, 'users', uid));

    let orgName = docSnap.data().orgName;

    document.getElementById('welcome-message').innerHTML = `Welcome, ${orgName}.`;
    document.getElementById('name').innerHTML = `${orgName}`;
  } else {
    window.location.replace("../");
  }
});