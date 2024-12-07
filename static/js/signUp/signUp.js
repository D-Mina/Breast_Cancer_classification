

window.onload = function () {
    const signUpBtn = document.getElementById("signUpBtn");
    const usernameInput = document.getElementById("first-name");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const genderInput = document.getElementById("gender");
    const jobInput = document.getElementById("job");
    const errorMessage = document.getElementById("error-message");
    
    // Sign Up button functionality
    signUpBtn.addEventListener("click", function () {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const email = emailInput.value.trim();
        const age = ageInput.value.trim();
        const gender = genderInput.value.trim();
        const job = jobInput.value.trim();

        // Validation for required fields
        if (username === "" || password === "" || email === "" || age === "" || gender === "") {
            errorMessage.style.display = "block";
            errorMessage.textContent = "Please fill out all required fields";
            return;
        }

        // Create new user object
        const newUser = {
            username: username,
            password: password,
            email: email,
            age: age,
            gender: gender,
            job: job
        };

        // Retrieve stored users from localStorage
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Add new user to stored users
        storedUsers.push(newUser);

        // Save updated users list back to localStorage
        localStorage.setItem("users", JSON.stringify(storedUsers));

        // Redirect to Login page after successful sign up
        window.location.href = loginUrl; // Use the variable here
    });
};