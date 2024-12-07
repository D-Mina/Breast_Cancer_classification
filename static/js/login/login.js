window.onload = function () {
    const loginBtn = document.getElementById("loginBtn");
    const errorMessage = document.getElementById("error-message");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const togglePasswordIcon = document.querySelector(".toggle-password");

    // Login button functionality
    loginBtn.addEventListener("click", function () {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = storedUsers.find(u => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            window.location.href = indexUrl; 
        } else {
            errorMessage.textContent = "Invalid username or password.";
            errorMessage.classList.add("show");
        }
    });

    togglePasswordIcon.addEventListener("click", function () {
        togglePasswordVisibility(passwordInput);
    });
};

function togglePasswordVisibility(input) {
    const isPassword = input.getAttribute('type') === 'password';
    input.setAttribute('type', isPassword ? 'text' : 'password');
}
