const fileInput = document.getElementById('fileUpload');
const fileNameDisplay = document.getElementById('fileName');
const classificationButton = document.getElementById('classificationButton');
const uploadedImage = document.getElementById('uploadedImage');
const arrow = document.getElementById('arrow');
const uploadContainer = document.querySelector('.upload-container');
const title = document.querySelector('.title'); // Targeting the title

fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileNameDisplay.textContent = file.name;
        fileNameDisplay.classList.add('active');
        classificationButton.classList.add('show');
        arrow.style.opacity = '1'; // Show the arrow

        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.onload = function() {
                // Adjust the container size based on the image size
                let imageHeight = uploadedImage.naturalHeight;
                let imageWidth = uploadedImage.naturalWidth;

                // Reduce container size based on image dimensions, limiting height to 80vh
                if (imageHeight > window.innerHeight * 0.6) {
                    uploadedImage.style.maxHeight = '60vh'; // Limit image height
                }

                // Add the 'small' class to reduce container size after image is loaded
                uploadContainer.classList.add('small');
                title.classList.add('loaded'); // Add class to return margins to original
            };
            uploadedImage.classList.add('show'); // Show the image
        };
        reader.readAsDataURL(file);
    } else {
        fileNameDisplay.textContent = 'No file chosen';
        fileNameDisplay.classList.remove('active');
        classificationButton.classList.remove('show');
        uploadedImage.classList.remove('show'); // Hide the image
        arrow.style.opacity = '0'; // Hide the arrow
        uploadContainer.classList.remove('small'); // Reset the container to normal size
        title.classList.remove('loaded'); // Remove the class to return margins to original
    }
});



// about section

document.addEventListener("DOMContentLoaded", function() {
    const infoBoxes = document.querySelectorAll('.info-box');

    infoBoxes.forEach((box, index) => {
        box.style.opacity = 0; // Reduce opacity
        box.style.transform = 'translateY(20px)'; // Move the box down

        // Delay the appearance of each box
        setTimeout(() => {
            box.style.transition = 'opacity 0.5s, transform 0.5s';
            box.style.opacity = 1; // Increase opacity
            box.style.transform = 'translateY(0)'; // Return the box to its place
        }, index * 200); // Increasing delay for each box
    });
});


window.onload = function () {
    const loginButton = document.getElementById("loginButton");
    const signUpButton = document.getElementById("signUpButton");
    const logOutButton = document.createElement("button");

    logOutButton.textContent = "Log Out";
    logOutButton.id = "logOutButton";
    logOutButton.className = "btn logout"; // Add class for styling if necessary
    logOutButton.style.display = "none"; // Initially hidden

    // Add the Log Out button to the navbar
    document.querySelector(".nav-buttons").appendChild(logOutButton);

    // Check login status from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        loginButton.style.display = "none";
        signUpButton.style.display = "none";
        logOutButton.style.display = "inline-block"; // Show the Log Out button
    }

    // Log Out function
    logOutButton.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser"); // Remove user data
        loginButton.style.display = "inline-block";
        signUpButton.style.display = "inline-block";
        logOutButton.style.display = "none"; // Hide the Log Out button
        window.location.href = log2Url ; // Redirect to login page
    });
};



// Flask

function showFileName() {
    var fileInput = document.getElementById('fileUpload');
    var fileName = document.getElementById('fileName');
    fileName.innerText = fileInput.files[0] ? fileInput.files[0].name : 'No file chosen';
}

function classifyImage() {
    var formData = new FormData();
    var fileInput = document.getElementById('fileUpload');
    var file = fileInput.files[0];
    if (file) {
        formData.append('file', file);

        fetch('/predict', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            var resultDiv = document.getElementById('predictionResult');
            resultDiv.innerText = `Prediction: ${data.prediction}`;
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please choose an image file to upload.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var fileInput = document.getElementById('fileUpload');
    var classifyButton = document.getElementById('classificationButton');

    fileInput.addEventListener('change', showFileName);
    classifyButton.addEventListener('click', classifyImage);
});


