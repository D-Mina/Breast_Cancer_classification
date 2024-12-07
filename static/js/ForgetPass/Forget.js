document.getElementById('resetPasswordBtn').addEventListener('click', function() {
    const usernameInput = document.getElementById('username').value.trim();
    const newPasswordInput = document.getElementById('new-password').value.trim();
    const confirmPasswordInput = document.getElementById('confirm-password').value.trim();
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    // Check if all required fields are filled
    if (!usernameInput || !newPasswordInput || !confirmPasswordInput) {
        errorMessage.textContent = 'Please fill out all required fields!';
        successMessage.style.visibility = 'hidden';
        errorMessage.style.visibility = 'visible';
        return;
    }

    // Check if the passwords match
    if (newPasswordInput !== confirmPasswordInput) {
        errorMessage.textContent = 'Passwords do not match!';
        successMessage.style.visibility = 'hidden';
        errorMessage.style.visibility = 'visible';
        return;
    }

    // Retrieve stored users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Search for the user in the stored list
    const existingUser = storedUsers.find(user => user.username === usernameInput);

    if (!existingUser) {
        errorMessage.textContent = 'Username not found! Please check the username.';
        successMessage.style.visibility = 'hidden';
        errorMessage.style.visibility = 'visible';
        return;
    }

    // Update the user's password
    existingUser.password = newPasswordInput;

    // Save the updated user list in localStorage
    localStorage.setItem('users', JSON.stringify(storedUsers));

    successMessage.textContent = 'Password reset successfully!';
    successMessage.style.visibility = 'visible';
    errorMessage.style.visibility = 'hidden';

    // Redirect to the login page after the update
    setTimeout(() => {
        window.location.href = logUrl; // Redirect to the login page
    }, 2000); // Wait for 2 seconds before redirecting
});

// Function to toggle password visibility
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}
