import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase_init'

const auth = getAuth();
console.log(auth);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    let docSnap = await getDoc(doc(db, 'users', uid));

    let fName = docSnap.data().firstName;
    let lName = docSnap.data().lastName;

    document.getElementById('name').innerHTML = `${fName} ${lName}`
  } else {
    window.location.replace("../");
  }
});