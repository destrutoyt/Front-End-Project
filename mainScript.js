// Get references to the submit button and form
let submitButton = document.getElementById("submit_question");
let form = document.getElementById("question_form");

// Get references for inputs
let firstName = document.getElementById('fname');
let lastName = document.getElementById("lname");
let firstEmail = document.getElementById("user_email");
let secondEmail = document.getElementById("email_confirmation");
let question = document.getElementById("user_question");
let missingData = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    missingData = 0;

    if (!firstName.value.trim()) {
        firstName.style.border = '2px solid red';
        missingData += 1;
    }
    else {
        firstName.style.borderColor = 'lime';
    }

    if (!lastName.value.trim()) {
        lastName.style.border = '2px solid red';
        missingData += 1;
    }
    else {
        lastName.style.borderColor = 'lime';
    }

    if (!firstEmail.value.trim()) {
        firstEmail.style.border = '2px solid red';
        missingData += 1;
    }
    else {
        firstEmail.style.borderColor = 'lime';
    }
    if (!secondEmail.value.trim()) {
        secondEmail.style.border = '2px solid red';
        missingData += 1;
    }
    else {
        secondEmail.style.borderColor = 'lime';
    }

    if (firstEmail.value !== secondEmail.value) {
        firstEmail.style.border = '2px solid orange';
        secondEmail.style.border = '2px solid orange';
        missingData += 1;
    }
    
    if (!question.value.trim()) {
        question.style.border = '2px solid yellow';
        question.placeholder = "Don't forget to add your question! Max Words are 300!";
        missingData += 1;
    }
    else {
        question.style.borderColor = '';
    }

    if (missingData > 0 ) {
        alert("You are missing required fields. Verify and correct those who are red!")
    }
    else {
        alert("Your question has been submitted. We will be back at you soon!")
    }
})