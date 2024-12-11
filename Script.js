document.addEventListener("DOMContentLoaded", () => {
    // Validate Create Account Form
    const createAccountForm = document.getElementById("create-account");
    createAccountForm.addEventListener("submit", (event) => {
        const username = createAccountForm.querySelector("input[type='text']").value.trim();
        const password = createAccountForm.querySelector("input[type='password']").value.trim();

        if (username.length < 4) {
            alert("Username must be at least 4 characters long.");
            event.preventDefault();
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault();
            return;
        }

        alert("Account created successfully!");
    });

    // Validate Login Form
    const loginAccountForm = document.getElementById("login-account");
    loginAccountForm.addEventListener("submit", (event) => {
        const username = document.getElementById("username-field").value.trim();
        const password = document.getElementById("password-field").value.trim();

        if (username === "") {
            alert("Please enter your username.");
            event.preventDefault();
            return;
        }

        if (password === "") {
            alert("Please enter your password.");
            event.preventDefault();
            return;
        }

        alert("Login successful!");
    });
});
