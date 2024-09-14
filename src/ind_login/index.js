import { login, continueAsGuest } from "../auth.js";

const loginForm = document.querySelector('#loginform');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // get user info
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // login up the user
    const resp = await login(email, password);

    if (resp[0] === 'success') {
        // Add user to local storage
        localStorage.setItem('user', JSON.stringify(resp[1]));
        window.location.replace("/ind_home/");
        console.log("Login successful");
        console.log(localStorage);
    } else {
        alert("Login failed");
    }
});

document.getElementById("continueAsGuest").addEventListener("click", async (e) => {
    e.preventDefault();
    const resp = await continueAsGuest();
    if (resp[0] === 'success') {
        // Add user to local storage
        localStorage.setItem('user', JSON.stringify(resp[1]));
        window.location.replace("/ind_home/");
        console.log("Login successful");
        console.log(localStorage);
    } else {
        alert("Login failed");
    }
}
);