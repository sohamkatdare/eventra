import {signupOrg} from "../auth.js";

const password_1 = document.getElementById("password");
const password_2 = document.getElementById("confirm-password");
const error_message = document.getElementById("error");
console.log('hello')


const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', async (e) => {
    console.log('hello')
    e.preventDefault();
    

    // get user info

    const orgName = document.getElementById("orgname").value;
    const email = document.getElementById("email").value;
    const password_1_value = password_1.value;
    const password_2_value = password_2.value;

    // sign up the user
    if (password_1_value !== password_2_value) {
        alert("Passwords do not match");
        return;
    }
    const resp = await signupOrg(orgName, email, password_1_value);
    console.log(resp);
    if (resp[0] === 'success') {
        window.location.replace("/org_home/");
    } else {
        alert("Sign up failed. Please try again or try logging in.");
    }
});

function displayPasswordError() {
  
    password_1.style.border = "2px solid #ff0000"; 
    password_2.style.border = "2px solid #ff0000";
    error_message.textContent = "These passwords do not match."; 
  
    error_message.style.color = "#ff0000"; 
    error_message.style.fontWeight = "bold"; 
  }